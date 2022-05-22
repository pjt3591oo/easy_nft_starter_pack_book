const IPFS = require('ipfs-api');
const ipfs = new IPFS({ 
	host: 'localhost', 
  port: 5001,
	protocol: 'http' 
});

const hash = 'Qmf412jQZiuVUtdgnB36FXFX7xg5V6KEbSJ4dpQuhkLyfD';

ipfs.files.get(hash, (err, ff) => {
	console.log(ff[0].content.toString());
})

/*
  샘플실행결과
	Hello, World!
*/