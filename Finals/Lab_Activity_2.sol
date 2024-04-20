// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;

contract LabAct2{
    address payable public owner;
    uint256 immutable public creationTime;

    // Ether amounts
    uint256 public constant INITIAL_ETH_AMOUNT = 2 ether;
    uint256 public remainingEth;

    // Events
    event EtherReceived(address sender, uint amount);
    event EtherSent(address receiver, uint amount);

    modifier onlyOwner(){
        require(msg.sender == owner, "Not Owner!");
        _;
    }

    constructor(){
        owner = payable(msg.sender);
        creationTime = block.timestamp;
        remainingEth = INITIAL_ETH_AMOUNT;
    }

    receive() external payable {
        emit EtherReceived(msg.sender, msg.value);
    }
    
    function send_Ether(address payable _receiver, uint256 _amount) public onlyOwner{
        require(_amount <= remainingEth, "Not Enough Funds!");
        // Transfers eth amount to receiver
        _receiver.transfer(_amount);
        // subtracts from current account
        remainingEth -=_amount;
        emit EtherSent(_receiver, _amount);
    }

    function ReceivedAndEmit() external payable{
        emit EtherReceived(msg.sender, msg.value);
    }
    function checkBalance() public view returns (uint256){
        return address(this).balance;
    }

    // Destroy
    function destroy() public onlyOwner{
        selfdestruct(owner);
    }
}