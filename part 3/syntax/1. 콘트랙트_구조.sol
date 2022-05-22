// 스마트 콘트랙트 구조

// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.10;

// 스마트 콘트랜트 구조
contract HelloWorld {
  // 상태선언
  string public text;

  // 생성자
  constructor() {
    text = "Hello, World!";
  }

  // 데이터 변경 함수
  function setName(string memory _text) public { 
    text = _text;
  }

  // 데이터 조회 함수
  function run() public view returns(string memory) { 
    return text;
  }
}