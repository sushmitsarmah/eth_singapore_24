// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

import "@pythnetwork/pyth-sdk-solidity/IPyth.sol";

library MoraqStructs {
    struct Price {
        int64 price;
        uint64 publishTime;
    }

    struct Question {
        uint256 questionId;
        string coinId; // Identifier for the coin (e.g., BTC, ETH)
        int64 targetPrice; // Target price to compare against
        bool answer; // True for above, false for below
        address pythContract;
        bytes32 usdPriceId;
        IPyth pyth;
    }

    struct UserAnswer {
        uint256 questionId;
        bool answer; // User's answer (true for above, false for below)
        uint256 stake; // Amount staked by the user
    }

    struct Round {
        uint256 roundId;
        uint256 startTime; // Timestamp when the round starts
        uint256 endTime; // Timestamp when the round ends
        mapping(uint256 => Question) questions; // Mapping of questionId to Question
        uint256[] questionIds; 
        mapping(address => UserAnswer[]) userAnswers; // Mapping of user address to their answers
        mapping(address => uint256) userStake; // Mapping of user address to their answers
        uint256 totalStaked; // Total amount staked in the round
        address[] participants; // List of participants in the round
        address[] winners; // List of winners in the round
    }
}