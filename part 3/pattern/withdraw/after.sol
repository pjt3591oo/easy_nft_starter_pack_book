// 출근패턴 적용
// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.10;

contract WithdrawalContract {
  address public target;
  uint public mostSent = 0;
  mapping (address => uint) public pendingWithdrawals;

  constructor() { }
   
  function becomeTarget() external payable returns (bool) {
    pendingWithdrawals[target] += msg.value; 
    target = msg.sender;
    mostSent = msg.value;
  }

  function withdraw() public {
    uint amount = pendingWithdrawals[msg.sender]; 
    pendingWithdrawals[msg.sender] = 0; 
    payable(msg.sender).transfer(amount);
  } 
}