// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.24;

import "./MoraqStructs.sol";
import "./MoraqErrors.sol";
import "./IMoraq.sol";
import "@pythnetwork/pyth-sdk-solidity/IPyth.sol";
import "@pythnetwork/pyth-sdk-solidity/PythStructs.sol";

contract Moraq is IMoraq {
    MoraqStructs.Round[] public rounds; // Array of rounds
    mapping(address => uint256) public userWinnings; // Mapping of user addresses to their winnings
    uint256 public currentRoundId = 0;
    uint256 public roundQuestions = 6;
    uint256 public maxRounds = 3;
    address public owner;

    constructor(uint256 _maxRounds, uint256 _roundQuestions) {
        owner = msg.sender;
        maxRounds = _maxRounds;
        roundQuestions = _roundQuestions;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only the contract owner can execute this");
        _;
    }

    function startNewRound() public onlyOwner {
        currentRoundId++;
        rounds.push();
        MoraqStructs.Round storage round = rounds[currentRoundId];
        round.roundId = currentRoundId;
        round.startTime = block.timestamp;
        round.endTime = block.timestamp + 1 weeks;

        if (block.timestamp >= round.endTime) {
            // on rounded ended call fetchPrices in the frontend and then declare winners
            emit RoundEnded(currentRoundId);
        }
    }

    function getRoundId() external view returns (uint256) {
        return currentRoundId;
    }

    function getQuestion(uint256 roundId, uint256 questionId) external view returns (MoraqStructs.Question memory) {
        return rounds[roundId].questions[questionId];
    }

    function getRoundUserAnswers(uint256 roundId, address user) external view returns (MoraqStructs.UserAnswer[] memory) {
        return rounds[roundId].userAnswers[user];
    }

    function createQuestion(
        uint256 roundId,
        uint256 questionId,
        string calldata coinId,
        int64 targetPrice,
        address pythContract,
        bytes32 usdPriceId
    ) external onlyOwner {
        MoraqStructs.Round storage round = rounds[roundId];
        round.questions[questionId] = MoraqStructs.Question({
            questionId: questionId,
            coinId: coinId,
            targetPrice: targetPrice,
            answer: false, // Default value, can be updated later
            pythContract: pythContract,
            usdPriceId: usdPriceId,
            pyth: IPyth(pythContract)
        });
        round.questionIds.push(questionId);

        emit QuestionCreated(roundId, questionId, msg.sender, coinId, targetPrice);
    }

    function answerQuestion(
        uint256 roundId,
        uint256 questionId,
        bool answer,
        uint256 stake
    ) external payable {
        require(msg.value == stake, "Stake amount mismatch");
        MoraqStructs.Round storage round = rounds[roundId];
        require(block.timestamp < round.endTime, "Round has ended");

        MoraqStructs.UserAnswer memory userAnswer = MoraqStructs.UserAnswer({
            questionId: questionId,
            answer: answer,
            stake: stake
        });

        round.userAnswers[msg.sender][questionId % 6] = userAnswer;
        round.userStake[msg.sender] += stake;
        round.totalStaked += stake;
        round.participants.push(msg.sender);
    }

    function fetchPrices(uint256 roundId, bytes[] calldata priceUpdate) external payable onlyOwner {
        MoraqStructs.Round storage round = rounds[roundId];
        require(block.timestamp >= round.endTime, "Round is still active");

        for (uint256 i = 0; i < round.questionIds.length; i++) {
            MoraqStructs.Question storage question = round.questions[i];

            // fetches multiple coin data. and updates
            uint fee = question.pyth.getUpdateFee(priceUpdate);
            question.pyth.updatePriceFeeds{ value: fee }(priceUpdate);

            PythStructs.Price memory price = question.pyth.getPriceNoOlderThan(question.usdPriceId, 60);
            question.answer = price.price > question.targetPrice;
        }
        declareWinners(roundId);
    }

    function declareWinners(uint256 roundId) public onlyOwner {
        MoraqStructs.Round storage round = rounds[roundId];
        require(block.timestamp >= round.endTime, "Round is still active");
        uint256 winnersStake = 0;
        uint256 numWinners = 0;

        for (uint256 i = 0; i < round.participants.length; i++) {
            address user = round.participants[i];
            uint256 correctAnswers = 0;

            for (uint256 j = 0; j < roundQuestions; j++) {
                MoraqStructs.UserAnswer storage userAnswer = round.userAnswers[user][j];
                if (userAnswer.answer == round.questions[userAnswer.questionId].answer) {
                    correctAnswers++;
                }
            }

            if (correctAnswers == roundQuestions) {
                numWinners++;
                userWinnings[user] = round.userStake[user];
                winnersStake += round.userStake[user];
                round.winners.push(user);
                round.totalStaked -= userWinnings[user];
            }
        }

        uint256 winnings = round.totalStaked - winnersStake;
        winnings = winnings / numWinners;

        for (uint256 i = 0; i < round.winners.length; i++) {
            address user = round.winners[i];
            if (currentRoundId < maxRounds) {
                userWinnings[user] += (winnings * 20 * currentRoundId) / 100;
            } else {
                userWinnings[user] += winnings;
            }
        }

        scheduleStartNewRound();
    }

    function scheduleStartNewRound() internal {
        // This function should be called after 2 days
        // You can use a time-based mechanism to call this function after 2 days
        // For simplicity, we are using a placeholder here
        // In a real implementation, you might use a service like Chainlink Keepers or a similar mechanism

        MoraqStructs.Round storage round = rounds[currentRoundId];
        if (block.timestamp >= round.endTime + 2 days) {
            for (uint256 i = 0; i < round.winners.length; i++) {
                address user = round.winners[i];
                uint256 winnings = userWinnings[user];
                if (winnings > 0) {
                    userWinnings[user] = 0;
                    payable(user).transfer(winnings);
                }
            }
            startNewRound();
        }
    }

    function withdrawWinnings() external {
        uint256 winnings = userWinnings[msg.sender];
        require(winnings > 0, "No winnings to withdraw");
        userWinnings[msg.sender] = 0;
        payable(msg.sender).transfer(winnings);
    }

    function proceedToNextRound() external {
        require(userWinnings[msg.sender] > 0, "No winnings to proceed");
        rounds[currentRoundId].totalStaked += userWinnings[msg.sender];
        userWinnings[msg.sender] = 0;

        rounds[currentRoundId].participants.push(msg.sender);
    }
}