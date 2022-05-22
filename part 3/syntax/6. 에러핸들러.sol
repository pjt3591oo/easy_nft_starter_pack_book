// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.10;

error WowError(uint x, uint y);

contract HelloWorld {
  uint public amount;

  // require
  function require_calc(uint a) public {
    require(a != 0, 'a is not 0');
    amount += a; // amount = amount + a;
  } 

  // require - 롤백 확인
  function require_calc_rollback(uint a) public {
    amount += a; // amount = amount + a;
    require(a != 0, 'a is not 0');
  }

  // revert
  function revert_calc(uint x) public {
    if (x == 0) {
      revert WowError(1, x);
    }
    amount += x; 
  }

  // assert
  function assert_set(uint x) public {
    amount += x;
    assert(amount != 0);
  }
}