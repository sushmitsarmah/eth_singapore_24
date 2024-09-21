// SPDX-License-Identifier: Apache 2

pragma solidity ^0.8.24;

library MoraqErrors {
    // Function arguments are invalid (e.g., the arguments lengths mismatch)
    // Signature: 0xa9cb9e0d
    error InvalidArgument();
    // Update data is coming from an invalid data source.
    // Signature: 0xe60dce71
    error InvalidUpdateDataSource();
}