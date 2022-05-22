const bip39 = require("bip39");
const { hdkey } = require("ethereumjs-wallet");
const mnemonic = "vehicle drive polar gate dragon economy daring noodle sister hurdle symbol choose"; // 가나슈 CLI에서 생성한 니모닉 넣어보기

(async () => {
  const seed = await bip39.mnemonicToSeed(mnemonic);
  const rootKey = hdkey.fromMasterSeed(seed);
  const hardenedKey = rootKey.derivePath("m/44'/60'/0'/0"); // 이더리움 HD 경로

  // 10개의 자식키를 주소로 복구 
  for (let i = 0; i < 10; i++) {
    const childKey = hardenedKey.deriveChild(i);
    const wallet = childKey.getWallet();
    const address = wallet.getAddress();
    const privateKey = wallet.getPrivateKey();
    console.log(`(${i}) ${address.toString("hex")}`);
  };
  
})();