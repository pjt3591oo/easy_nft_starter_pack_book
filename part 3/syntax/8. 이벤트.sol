// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.10;

// 이벤트 발생
contract EventEmitter {
  uint total = 0;
  event Sum(uint a);
  
  function sum(uint maxNum) public {
    uint _sum = 0;
    for (uint i = 0 ; i <= maxNum ; i++ ) {
      _sum += i; 
    }
    total = _sum;
    emit Sum(_sum);
  }
}

// 인덱스 키워드
contract IndexKeyword {
  event onEvent1(uint indexed a);
  event onEvent2(uint a);
  
  function event1() public {
    emit onEvent1(1);
  }
  
  function event2() public {
    emit onEvent2(2);
  }
}