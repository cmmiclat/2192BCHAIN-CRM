// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Grade {
    address public owner;
    string public studentname;

    uint public prelims;
    uint public midterms;
    uint public finals;

    uint public finalGrade;
    uint public gradeStatus;

    constructor() {
        owner = msg.sender;
    }
    modifier onlyOwner() {
        require(msg.sender == owner, "not owner");
        _;
    }

    modifier validGrade(uint input) {
        require(input >=0 && input <=100, "Grade exceeds range. Only values 0-100 allowed");
        _;
    }

    function setName(string memory _studentname) public {
        studentname = _studentname;
    }

    function setPrelimGrade(uint _prelims) public validGrade(_prelims) onlyOwner {
        prelims = _prelims;
    }
    function setMidtermGade(uint _midterms) public validGrade(_midterms) onlyOwner {
        midterms = _midterms;
    }
    function setFinalGrade(uint _finals)  public validGrade(_finals) onlyOwner {
        finals = _finals;
    }

    event GradeComputed(string _studentname, uint gradeStatus);

    function calculateGrade() public onlyOwner {
        finalGrade = (prelims+midterms+finals)/3;
        if (finalGrade >= 75) {
            gradeStatus = 1;
        }
        else {
            gradeStatus = 0;
        }
        
        emit GradeComputed(studentname, gradeStatus);
    }

}