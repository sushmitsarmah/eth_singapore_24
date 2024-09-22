// SPDX-License-Identifier: Apache-2.0

pragma solidity ^0.8.24;

/// @title IPythEvents contains the events that Pyth contract emits.
/// @dev This interface can be used for listening to the updates for off-chain and testing purposes.
interface IMoraqEvents {
    /// @dev Emitted when a new question is created.
    /// @param roundId The unique ID of the question.
    /// @param questionId The unique ID of the question.
    /// @param creator The address of the user who created the question.
    /// @param coinID The text of the question.
    /// @param targetPrice The amount staked for the question.
    event QuestionCreated(
        uint256 indexed roundId,
        uint256 indexed questionId,
        address indexed creator,
        string coinID,
        int64 targetPrice
    );

    /// @dev Emitted when a user responds to a question.
    /// @param questionId The unique ID of the question.
    /// @param responder The address of the user who responded.
    /// @param response The response of the user (true for 'yes', false for 'no').
    /// @param stakeAmount The amount staked by the user.
    event QuestionAnswered(
        uint256 indexed questionId,
        address indexed responder,
        bool response,
        uint256 stakeAmount
    );

    /// @dev Emitted when the winners of a question are declared.
    /// @param questionId The unique ID of the question.
    /// @param winners The addresses of the users who won.
    /// @param totalReward The total reward distributed among the winners.
    event WinnersDeclared(
        uint256 indexed questionId,
        address[] winners,
        uint256 totalReward
    );

    event RoundEnded(
        uint256 roundId
    );
}

