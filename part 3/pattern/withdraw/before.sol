// 출근패턴 미적용

// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.10;

contract SendContract {
  address payable public target;
  uint public mostSent = 0;

  constructor() {}

  function becomeTarget() external payable returns(bool) { 
    target.transfer(msg.value); // 문제 지점: 과연 항상 성공할까? 
    target = payable(msg.sender);
    mostSent = msg.value;
    return true;
  }

  function changeTarget(address payable _to) public {
    target = _to;
  } 
}