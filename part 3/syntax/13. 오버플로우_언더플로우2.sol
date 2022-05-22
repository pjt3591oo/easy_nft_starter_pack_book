// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.10;

contract Flow {
  
  function underflow() public pure returns(uint) {
      uint a = 1;
    unchecked {
      return 0 - a; 
    }
  }
  
  function overflow() public pure returns(uint) {
    uint m = 115792089237316195423570985008687907853269984665640564039457584007913129639935;
    unchecked {
      return m + 1; 
    }
  } 
  
}