const Web3 = require('web3');
let web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

async function main() {
  let hash = '트랜잭션 해시'; // 2.4.4에서 발생한 트랜잭션의 해시 넣어보기 
  let tx = await web3.eth.getTransaction(hash);
  console.log(tx);
}; 

main();