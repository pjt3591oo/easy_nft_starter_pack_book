const Web3 = require('web3');
let web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

async function main() {
  const CA = "스마트 콘트랙트 주소"; // 배포한 스마트 콘트랙트 주소 
  const ABI = [ABI]; // 리믹스 또는 트러플 컴파일 결과에서 복사한 ABI 
  const Contract = new web3.eth.Contract(ABI, CA);
  
  let data = await Contract.methods.say().call();
  console.log(data);
};

main();