// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.10;

// 라이브러리 정의
library MyLibrary {
  struct Person {
    string name;
    uint age; 
  }
  function add(Person memory _p, uint b) external pure returns(uint) { 
    return _p.age + b;
  } 
}

contract MyContract {
  using MyLibrary for *;
  MyLibrary.Person charactor;
  
  // charactor 조회
  function getA() public view returns(MyLibrary.Person memory) {
    return charactor;
  }

  // charactor 생성
  function setA(string memory _name, uint _age) public {
    charactor = MyLibrary.Person(_name, _age); 
  }
  
  // charactor.age + _a 계산
  function addAge(uint _a) public view returns(uint) {
    return charactor.add(_a);
  }
}