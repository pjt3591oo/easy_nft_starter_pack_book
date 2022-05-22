// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.10;

/*
접근 제어자
  public   : 모든곳에서호출가능
  private  : 함수를 정의한 스마트 콘트랙트 내에서만 호출 가능, 상속받은 콘트랙트에서 호출 불가
  internal : 함수를 정의한 스마트 콘트랙트와 상속받은 콘트랙트에서 모두 호출 가능
  external : 트랜잭션에 의한 외부 호출만 가능
*/

/*
상태 제어자
  view : 상태 접근 가능 
  pure : 상태 접근 불가능

반환타입
  return (타입1, 타입2, ...)

함수 변경자
  modifier
*/
constructor Helloworld {
  // 함수 변경자
  modifier check() {
    _; // 함수 호출 허용 
  }

  function getP() public pure returns (string memory, uint) {
    return ("a", 1);
  }

  function setP() public check() {
    // something login~~
  }
}

/*
payable 제어자
  payable
*/
contract PayableContract {
  uint public amount = 0;
  address public addr;

  function deposit() external payable {
    addr = msg.sender; // 스마트 콘트랙트 주소 - msg.sender로 누가 이더를 전송했는지 확인가능
    amount = msg.value; // 이더 수량  - msg.value로 얼마를 전송했는지 확인가능
  }

  // receive 함수는 이더를 전송받으면 호출되는 함수
  receive() external payable {
    addr = msg.sender;
    amount = msg.value;
  }

  // this는 해당 스마트 컨트랙트를 의미하며 해당 스마트 컨트랙트의 이더 보유량 조회
  function getBalance() public pure returns(uint) { 
    return address(this).balance;
  }
}