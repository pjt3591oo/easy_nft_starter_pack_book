// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.10;

// 인터페이스 정의
interface InterfaceContract {
  event Event1(uint a);
  function getStr1() external returns(string memory);
}

// 인터페이스 상속
contract ChildContract is InterfaceContract {
   
  // implementation - 인터페이스 구현
  function getStr1() public override returns(string memory) {
    emit Event1(1);
    return "mung";
  }
}