// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.10;

contract DataType {
  // 논리값(boolean)
  bool b1 = true;
  bool b2 = false;

  // 정수(integer)
  int a = -10;
  uint b = 10;

  // 주소
  address c = 0x7e7A0e06f47B5F073c3bAf218242eF4B37c0D02C;
  // 주소 - transfer, balance
  function addr_error(address to) public returns(uint) { 
    to.transfer(1);    // 1이더를 to 주소에 전송 => payable(to).transfer(value);
    return to.balance; // to 주소의 잔액 조회 
  }
  // 주소 - transfer, balance
  function addr_success(address payable to) public returns(uint) { 
    to.transfer(1);    // 1이더를 to 주소에 전송
    return to.balance; // to 주소의 잔액 조회 
  }

  // 문자열
  string s = "hello world";
  // 문자열 - memory 키워드
  function setS(string memory _s) public returns(string memory) {
    s = _s;
    return s; 
  }

  // 배열
  uint[] arrUint = [1, 2, 3];
  // 배열 - 요소추가 push
  function add(uint num) public {
    arrUint.push(num); // num 값을 arrUint 배열의 마지막에 추가 
  }
  // 배열 - 요소제거 pop
  function sub() public {
    arrUint.pop(); // arrUint 배열의 마지막 요소 제거 
  }
  // 배열 - 요소접근 및 길이조회
  function get(uint idx) public view returns(uint, uint) {
    uint lastItem = arrUint[idx]; // 인덱스 사용하여 arrUint 배열 값 가져오기
    return (lastItem, arrUint.length); // 가져온 값과 arrUint 배열 길이 반환 
  }

  // 매핑
  mapping (address => uint) balance;
  // 매핑 키-값 저장
  function setBalance(address _arr, uint _n) public {
    balance[_arr] = _n;
  }

  // 구조체 - 정의
  struct Person {
    string name;
    uint age;
  }
  // 구조체 - 생성
  Person p1;
  // 구조체 - 저장
  function setP(string memory name, uint age) public {
    p1 = Person(name, age);
  }
  // 구조체 - 조회
  function getP() public returns(string memory, uint) {
    return (p1.name, p1.age); // 구조체 변수의 속성값 가져오기 
  }

  // 열거형 - 정의
  enum State { Created, Locked, Inactive }
  // 열거형 - 생성
  State public state;
  // 열거형 - 저장
  function setState(State _s) public {
    state = _s;
  }
  // 열거형 - 접근
  function getState() public view returns(State) {
    return state;
  }
}
