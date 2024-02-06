// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract LocalVariables {
    uint public i;
    bool public b;
    address public myAddress;

    function fooFighters() external {
        uint x = 123;
        bool f = false;

        x += 123;
        f = true;

        i = 123;
        b = true;
        myAddress = address(1);
    }
}

// Calling the variables before calling foo will return false, 0 and 0 respectively
// Calling the variables after calling foo will return true, 123 and 1 respectively