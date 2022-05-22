const Web3 = require('web3');
let web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

async function main() {
  const from = '주소'; // 가나슈 CLI로 생성한 주소
  const pk = '개인키'; // from에 대응하는 개인키
  const to = '0xf2Af0bc77a08Ea45C8ce2f6F902048680489A073'; // 그대로 입력 
  const tx = {
    from,
    to,
    gas: 21000, // 그대로 입력
    gasPrice: '21000000000', // 그대로 입력
    value: '1000000000000000' // 원하는 이더 전송 수량
  };

  const account = web3.eth.accounts.privateKeyToAccount(pk); // 개인키를 account 객체로 복구 
  const signedTx = await account.signTransaction(tx); // 개인키로 트랜잭션 서명
  
  const sentTx = await web3.eth.sendSignedTransaction(
    signedTx.raw || signedTx.rawTransaction
  ); // 서명된 트랜잭션 이더리움 노드로 전송 

  console.log(sentTx);
};

main();