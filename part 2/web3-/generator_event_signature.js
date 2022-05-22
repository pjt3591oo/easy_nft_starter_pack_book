const Web3 = require('web3');
let uri = 'ws://localhost:8545';
let web3 = new Web3(new Web3.providers.WebsocketProvider(uri));

const way1 = web3.eth.abi.encodeEventSignature("Transfer(address,address,uint256)");
const way2 = web3.eth.abi.encodeEventSignature({
  name: 'Transfer',
  type: 'event',
  inputs: [{
    indexed: true,
    type: 'address',
    name: 'from'
  }, {
    indexed: true,
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

  0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef
  0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef
*/