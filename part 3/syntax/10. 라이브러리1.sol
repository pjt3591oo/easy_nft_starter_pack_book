// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.10;

// 라이브러리 정의
library Math {
  function add(uint _a, uint _b) external pure returns(uint) {
    return _a + _b;
  }

 function sub(uint _a, uint _b) external pure returns(uint) {
    return _a - _b;
  } 
}

contract HelloWorld {
  using Math for uint; // unit에 Math 라이브러리 attach(확장)하기
  uint a = 10;

  function sum(uint _a) public view returns(uint) {
    return a.add(_a);
  } 
}