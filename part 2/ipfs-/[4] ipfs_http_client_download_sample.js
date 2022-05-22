const IpfsHttpClient = require('ipfs-http-client');
const ipfs = IpfsHttpClient.create('http://localhost:5001');

async function main() {
  const chunks = [];
  const path = 'Qmf412jQZiuVUtdgnB36FXFX7xg5V6KEbSJ4dpQuhkLyfD';
  for await (const chunk of ipfs.cat(path)) {
    chunks.push(chunk);
  };
  console.log(chunks.toString());
};

main();