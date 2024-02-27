// SPDX-License-Identifier: MIT
pragma solidity >=0.8.3;

contract MQuizContract {
    uint public age;
    uint public hoursWorked;
    uint public hourlyRate;
    uint public totalSalary;

    address public owner;

    constructor() {
        owner = msg.sender;
    }
    modifier onlyOwner() {
        require(msg.sender == owner, "not owner");
        _;
    }

    function setAge(uint _age) public {
        age = _age;
    }
    function setHrsWrk(uint _hoursWorked) public {
        require(_hoursWorked > 0, "Hours Worked must be larger than zero");
        hoursWorked = _hoursWorked;
    }
    function setRate(uint _hourlyRate) public onlyOwner{
        require(_hourlyRate > 0, "Hourly Rate must be larger than zero");
        hourlyRate = _hourlyRate;
    }
    function calculateTotSal() public onlyOwner {
        if (hoursWorked > 0 && hourlyRate > 0) {
            totalSalary = (hoursWorked * hourlyRate);
        }
        else {
            revert("Hours Worked or Hourly Rate must be greater than 0!");
        }
    }
}