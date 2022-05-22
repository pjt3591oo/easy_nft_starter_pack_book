const Web3 = require('web3');
let web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

async function main() {
  let balance = await web3.eth.getBalance('주소'); // 가나슈 CLI로 생성한 주소
  console.log(balance);
};

main();