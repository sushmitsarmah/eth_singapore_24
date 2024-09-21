// SPDX-License-Identifier: Apache-2.0
pragma solidity ^0.8.0;

import "./MoraqStructs.sol";
import "./IMoraq.sol";
import "./MoraqErrors.sol";

abstract contract AbstractMoraq is IMoraq {
    /// @notice Returns the price feed with given id.
    /// @dev Reverts if the price does not exist.
    /// @param id The Pyth Price Feed ID of which to fetch the PriceFeed.
    function queryPriceFeed(
        bytes32 id
    ) public view virtual returns (MoraqStructs.PriceFeed memory priceFeed);

    /// @notice Returns true if a price feed with the given id exists.
    /// @param id The Pyth Price Feed ID of which to check its existence.
    function priceFeedExists(
        bytes32 id
    ) public view virtual returns (bool exists);

    /// @notice This function is deprecated and is only kept for backward compatibility.
    function getValidTimePeriod()
        public
        view
        virtual
        returns (uint validTimePeriod);

    /// @notice This function is deprecated and is only kept for backward compatibility.
    function getPrice(
        bytes32 id
    ) external view virtual returns (MoraqStructs.Price memory price) {
        return getPriceNoOlderThan(id, getValidTimePeriod());
    }

    function getPriceNoOlderThan(
        bytes32 id,
        uint age
    ) public view virtual override returns (MoraqStructs.Price memory price) {
        price = getPriceUnsafe(id);

        if (diff(block.timestamp, price.publishTime) > age)
            revert MoraqErrors.StalePrice();

        return price;
    }

}
