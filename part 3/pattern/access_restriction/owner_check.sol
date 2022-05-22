// 접근 제한 패턴 - 소유권 검사

// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.10;

contract AccessRestrictionPattern {
  address owner; // 스마트 콘트랙트를 배포한 EOA 
  uint amount = 0;

  constructor() {
    owner = msg.sender; // 스마트 콘트랙트를 배포한 EOA 저장 
  }
  
  // 함수를 호출한 EOA가 스마트 콘트랙트를 배포한 EOA와 같은지 검사 
  modifier ownerCheck() {
    require(owner == msg.sender, 'caller is not owner');
    _; 
  }

  // 스마트 콘트랙트를 배포한 EOA만 호출 가능 
  function calc(uint a) public ownerCheck {
   amount += a; // amount = amount + a;
  }
}