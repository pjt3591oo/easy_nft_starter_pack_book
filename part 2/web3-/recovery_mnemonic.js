const bip39 = require("bip39");
const { hdkey } = require("ethereumjs-wallet");
const mnemonic = "니모닉"; // 앞에서 생성한 니모닉 넣어보기 

(async () => {
  const seed = await bip39.mnemonicToSeed(mnemonic);
  const rootKey = hdkey.fromMasterSeed(seed);
  const hardenedKey = rootKey.derivePath("m/44'/60'/0'/0"); // 이더리움 HD 경로
  const childKey = hardenedKey.deriveChild(0); // 값을 조정하여 자식키 생성
  const wallet = childKey.getWallet(); // 주소와 개인키를 하나의 쌍으로 가진 객체 가져오기 
  const address = wallet.getAddress(); // 주소 가져오기
  const privateKey = wallet.getPrivateKey(); // 개인키 가져오기
  
  console.log(`seed is ${seed.toString('hex')}`);
  console.log(`address is ${address.toString("hex")}`);
  console.log(`privateKey is ${privateKey.toString("hex")}`);
})();