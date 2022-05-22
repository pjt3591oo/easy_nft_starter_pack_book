const IpfsHttpClient = require('ipfs-http-client'); 
const fs = require('fs');
const ipfs = IpfsHttpClient.create('http://localhost:5001');

async function main() {
  const file = fs.readFileSync('./test.txt');
  let rst = await ipfs.add(file);
  console.log(rst);
};
main();

/*
  샘플 실행결과
  {
    path: 'Qmf412jQZiuVUtdgnB36FXFX7xg5V6KEbSJ4dpQuhkLyfD', 
    cid: CID(Qmf412jQZiuVUtdgnB36FXFX7xg5V6KEbSJ4dpQuhkLyfD), 
    size: 19
  }
*/