// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.10;

contract Animal {
  string public name = "";

  function setName(string memory _n) public {
      name = _n;
  } 
}

contract Dog is Animal { }
contract Cat is Animal { }

contract Bird { }
contract Chicken is Animal, Bird { } // 다중상속