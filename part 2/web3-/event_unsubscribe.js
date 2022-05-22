const Web3 = require('web3');
let uri = 'ws://localhost:8545';
let web3 = new Web3(new Web3.providers.WebsocketProvider(uri));

let count = 0;

// receive block
const blockSubscription = web3.eth.subscribe('newBlockHeaders', (err, blockHeader) => {
  console.log(blockHeader);
  console.log(err);
  count++;
  if (count > 5) {
    console.log('구독 해제');
    blockSubscription.unsubscribe();
  };
});