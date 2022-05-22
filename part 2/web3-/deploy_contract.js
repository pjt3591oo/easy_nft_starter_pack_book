const Web3 = require('web3');
let web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

async function main() {
  const from = '주소'; // 가나슈 CLI로 생성한 주소
  const mungContract = new web3.eth.Contract([ABI]); // 복사한 ABI 

  const mung = mungContract.deploy({
    data: '바이트코드', // 복사한 바이트코드
    arguments: ["hoho"] // 솔리디티 생산자에 전달할 값
  }).send({
    from: from,
    gas: '4700000' // 그대로 입력 
  }, function (err, contract) {
    console.log(err);
    console.log(contract);
  });

}; 

main();