const Web3 = require('web3');
let web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

// 개인키와 주소 생성
let createdAddress = web3.eth.accounts.create(); 
console.log(createdAddress);

// 개인키 → 키스토어 파일
let password = 'test';
let keystore = createdAddress.encrypt(password); 
console.log(keystore);

// 키스토어 파일 복구
let private = web3.eth.accounts.decrypt(keystore, password); 
console.log(private);

/**
 실행결과

 첫 번째 콘솔
  {
    address: '0xCC8E69A7Df63B1C81656dc448353Dd29AC37456f',
    privateKey: '0xbf049a922d6424071efaa113f9af043d4b07ce0bcfe15a64b176ba95afa936ec',
    signTransaction: [Function: signTransaction],
    sign: [Function: sign],
    encrypt: [Function: encrypt]
  }

  두 번째 콘솔
  {
    version: 3,
    id: '7a90c22c-fcbc-4e3d-a8ca-f1fce9f116f6',
    address: 'cc8e69a7df63b1c81656dc448353dd29ac37456f',
    crypto: {
      ciphertext: '0f87dc72ca7d23da94f06862e384de1e06491b035875253bdbd96e0699358718', 
      cipherparams: { iv: '57bcb2b8833e3020b9bc319c8fd9153f' },
      cipher: 'aes-128-ctr',
      kdf: 'scrypt',
      kdfparams: {
        dklen: 32,
        salt: 'cad9eb4f14533d5f60e5cd928e3f3144af8069c94997c1405dc188cbfbe068b8',
        n: 8192,
        r: 8,
        p: 1
      },
      mac: 'd1c28cda7af77cb50043c3461f5706b4d481ffe1f14ac9b10ecaea6ec073213e'
    } 
  }
*/