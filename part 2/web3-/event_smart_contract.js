const Web3 = require('web3');
let uri = 'ws://localhost:8545';
let web3 = new Web3(new Web3.providers.WebsocketProvider(uri));

const CA = "스마트 콘트랙트 주소"; // 배포한 스마트 콘트랙트의 주소 
const ABI = [ABI]; // 리믹스 또는 트러플 컴파일 결과에서 복사한 ABI
let Contract = new web3.eth.Contract(ABI, CA); // ABI와 CA를 넣어준다.

// 이벤트
Contract.events.Instructor().on('data', (event) => {
  console.log(`data set: `);
  console.log(event);
  console.log(`필요한 데이터 추출: `);
  console.log(event.returnValues);
});