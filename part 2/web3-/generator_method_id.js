const Web3 = require('web3');
let uri = 'ws://localhost:8545'
let web3 = new Web3(new Web3.providers.WebsocketProvider(uri));

const way1 = web3.eth.abi.encodeFunctionSignature("transfer(address,uint256)");
const way2 = web3.eth.abi.encodeFunctionSignature({
  name: 'transfer',
  type: 'function',
  inputs: [{
    type: 'address',
    name: 'to'
  }, {
    type: 'uint256',
    name: 'value'
  }]
});

console.log(way1);
console.log(way2);

/*
  실행결과
  0xa9059cbb
  0xa9059cbb
*/