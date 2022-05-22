const erc20 = artifacts.require("erc20");

module.exports = function (deployer) {
  const name = 'JeongTae'
  const symbol = 'JT'
  const decimals = 18;
  const totalSupply = '100000000000000000000000000' // 10^25 => 10000000JT
  deployer.deploy(erc20, name, symbol, decimals, totalSupply);
};