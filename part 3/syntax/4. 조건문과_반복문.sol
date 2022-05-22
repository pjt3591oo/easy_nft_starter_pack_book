// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.10;

contract ConditionLoop{
  // 조건문 - 짝수검사
  function isEven(uint a) public pure returns(bool) {
    if (a % 2 == 0) { 
      return true;    // 홀수일 때
    } else {
      return false;   // 짝수일 때
    }
  }

// 반복문 - 0 ~ maxNum까지 합계
function sum(uint maxNum) public pure returns(uint) { 
  uint _sum = 0;

  for (uint i = 0 ; i <= maxNum ; i++) {
    _sum += i; 
  }
    return _sum;
  }
}