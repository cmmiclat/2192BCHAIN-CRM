// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Events {

    event Log(address indexed sender, string message);
    event AnotherLog();

    function eventTest() public {
        emit Log(msg.sender, "Hello World");
        emit Log(msg.sender, "Testing");
        emit AnotherLog();
    }
}