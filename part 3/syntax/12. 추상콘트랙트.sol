// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.10;

// 추상 콘트랙트 정의
abstract contract AbstractContract {
  function getStr() public virtual returns(string memory);
}

// 추상 콘트랙트 상속
contract ChildContract is AbstractContract {
   
   // implementation - 추상 콘트랙트 인터페이스 구현
  function getStr() public override pure returns(string memory) {
    return "miaow";
  }
}