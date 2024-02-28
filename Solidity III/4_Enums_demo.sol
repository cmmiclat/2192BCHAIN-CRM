// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

enum Status {
    Pending,
    Shipped,
    Accepted,
    Rejected,
    Canceled
}

contract enumeration {
    Status public status;

    function setStatus(Status _status) external {
        status = _status;
    }

    function cancelShipment() external {
        status = Status.Canceled;
    }

    function resetStatus() external {
        status = Status.Pending;
    }
}