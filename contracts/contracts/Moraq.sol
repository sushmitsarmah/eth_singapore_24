// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.24;

import "./AbstractMoraq.sol";
import "./MoraqStructs.sol";
import "./MoraqErrors.sol";

contract Moraq is AbstractMoraq {
    mapping(bytes32 => MoraqStructs.PriceFeed) priceFeeds;

    uint singleUpdateFeeInWei;
    uint validTimePeriod;

    constructor(uint _validTimePeriod, uint _singleUpdateFeeInWei) {
        singleUpdateFeeInWei = _singleUpdateFeeInWei;
        validTimePeriod = _validTimePeriod;
    }

    function queryPriceFeed(
        bytes32 id
    ) public view override returns (MoraqStructs.PriceFeed memory priceFeed) {
        if (priceFeeds[id].id == 0) revert MoraqErrors.PriceFeedNotFound();
        return priceFeeds[id];
    }

    function priceFeedExists(bytes32 id) public view override returns (bool) {
        return (priceFeeds[id].id != 0);
    }

    function getValidTimePeriod() public view override returns (uint) {
        return validTimePeriod;
    }
}