const IPFS = require('ipfs-api');
const fs = require('fs');
const ipfs = new IPFS({ 
	host: 'localhost', 
  port: 5001,
	protocol: 'http' 
});


const file = fs.readFileSync('./test.txt');
const fileBuffer = new Buffer.from(file);

ipfs.files.add(fileBuffer, (err, f) => {
	console.log(f);
})

/*
  샘플실행결과
	[{
		path: 'Qmf412jQZiuVUtdgnB36FXFX7xg5V6KEbSJ4dpQuhkLyfD',
		hash: 'Qmf412jQZiuVUtdgnB36FXFX7xg5V6KEbSJ4dpQuhkLyfD',
		size: 19
	}]
*/