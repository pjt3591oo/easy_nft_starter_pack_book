const Web3 = require('web3');
let web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

async function main() {
  const CA = "스마트 콘트랙트 주소"; // 배포한 스마트 콘트랙트의 주소 
  const from = '주소'; // 가나슈 CLI로 생성한 주소
  const pk = '개인키'; // from에 대응하는 개인키
  const ABI = [ABI]; // 리믹스 또는 트러플 컴파일 결과에서 복사한 ABI
  
  // 스마트 콘트랙트 객체 생성
  let Contract = new web3.eth.Contract(ABI, CA);
  
  // 스마트 콘트랙트에 정의한 함수 실행
  let bytedata = await Contract.methods.setText("test").encodeABI(); 
  console.log(bytedata);

  const tx = {
    from,
    to: CA,
    gas: 1000000, // 그대로 입력
    gasPrice: '21000000000', // 그대로 입력 data: bytedata
  };
  
  const account = web3.eth.accounts.privateKeyToAccount(pk);
  const signedTx = await account.signTransaction(tx);
  const sentTx = await web3.eth.sendSignedTransaction(
    signedTx.raw ||
    signedTx.rawTransaction
  );

  console.log(sentTx);
}; 

main();