// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SendEther {
    constructor() payable {}

    receive() external payable {}

    function sendViaTransfer(address payable _to) external payable {
        _to.transfer(100);
    }

    function sendViaSend(address payable _to) external payable {
        bool sent = _to.send(100);
        require(sent, "Sending Failed.");
    }

    function sendViaCall(address payable _to) external payable {
        (bool success, ) = _to.call{value:100}("");
        require(success, "Call Failed.");
    }
}

contract ReceiveEther {
    event Log(uint amount, uint gas);
    
    receive() external payable {
        emit Log(msg.value, gasleft());
    }
}