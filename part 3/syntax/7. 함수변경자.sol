// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.10;

// 함수 변경자 기본구조
contract BasicStructure {
  uint public amount;
  
  modifier zeroCheck(uint a) {
    require(a != 0, 'a is not 0');
    _; // 함수 호출 허용 
  }

  function calc(uint a) public zeroCheck(a) {
    amount += a; // amount = amount + a;
  } 
}

// 함수 변경자를 이용한 호출 권한 검사
contract PermissionCheck {
  address owner; // 스마트 콘트랙트를 배포한 EOA 
  uint amount = 0;

  constructor() {
    owner = msg.sender; // EOA 저장 
  }

  // 함수를 호출한 EOA가 스마트 콘트랙트를 배포한 EOA와 동일한지 검사 
  modifier ownerCheck() {
    require(owner == msg.sender, 'caller is not owner');
    _; 
  }

  // 스마트 콘트랙트를 배포한 EOA만 호출 가능 
  function calc(uint a) public ownerCheck {
    amount += a; // amount = amount + a;
  }
}