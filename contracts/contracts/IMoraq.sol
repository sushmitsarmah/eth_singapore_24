// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

import "./MoraqStructs.sol";
import "./IMoraqEvents.sol";

/// @title Consume prices from the Pyth Network (https://pyth.network/).
/// @dev Please refer to the guidance at https://docs.pyth.network/documentation/pythnet-price-feeds/best-practices for how to consume prices safely.
/// @author Pyth Data Association
interface IMoraq is IMoraqEvents {
    /// @notice Starts a new betting round.
    function startNewRound() external;

    /// @notice Creates a new question for a round.
    /// @param roundId The unique identifier for the round.
    /// @param questionId The unique identifier for the question.
    /// @param coinId The identifier for the coin (e.g., BTC, ETH).
    /// @param targetPrice The target price to compare against.
    /// @param pythContract The address of the Pyth contract.
    /// @param usdPriceId The price ID for USD.
    function createQuestion(
        uint256 roundId,
        uint256 questionId,
        string calldata coinId,
        int64 targetPrice,
        address pythContract,
        bytes32 usdPriceId
    ) external;

    /// @notice Allows a user to answer a question by staking an amount.
    /// @param roundId The unique identifier for the round.
    /// @param questionId The unique identifier for the question.
    /// @param answer The user's answer (true for above, false for below).
    /// @param stake The amount staked by the user.
    function answerQuestion(uint256 roundId, uint256 questionId, bool answer, uint256 stake) external payable;

    /// @notice Fetches prices from the oracle after the round ends.
    /// @param roundId The unique identifier for the round.
    function fetchPrices(uint256 roundId) external;

    /// @notice Declares the winners based on the fetched prices.
    /// @param roundId The unique identifier for the round.
    function declareWinners(uint256 roundId) external;

    /// @notice Allows a winning user to withdraw their winnings.
    function withdrawWinnings() external;

    /// @notice Allows a winning user to proceed to the next round.
    function proceedToNextRound() external;

    function getRoundId() external view returns (uint256);

    function getQuestion(uint256 roundId, uint256 questionId) external view returns (MoraqStructs.Question memory);

    function getRoundUserAnswers(uint256 roundId, address user) external view returns (MoraqStructs.UserAnswer[] memory);
    
}