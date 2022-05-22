const Web3 = require('web3');
let uri = 'ws://localhost:8545';

// 이벤트를 수신하기 위해 WebsocketProvider로 연결
let web3 = new Web3(new Web3.providers.WebsocketProvider(uri));

const txSubscription = web3.eth.subscribe('pendingTransactions', (err, txHash) => {
  console.log(txHash);
});