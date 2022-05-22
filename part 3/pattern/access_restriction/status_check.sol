// 접근 제한 패턴 - 상태에 따른 함수 호출 검사

// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.10;

contract AccessRestrictionPattern {
  enum State { Pending, Resolve, Reject }
  State private state;
  
  modifier checkState(State _s) {
    require(_s == state, 'not match state');
    _;
  }
  
  function processA(State _s) external checkState(State.Pending) { }
  function processB(State _s) external checkState(State.Resolve) { }
  function processC(State _s) external checkState(State.Reject) { }
}