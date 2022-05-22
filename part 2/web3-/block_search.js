const Web3 = require('web3');
let web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

async function main() {
  let blockInfo = await web3.eth.getBlock(0); // 블록 정보 가져오기
  console.log(blockInfo);
};

main();