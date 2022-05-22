const MyERC721Token = artifacts.require("MyERC721Token");

module.exports = function (deployer) {
  const name = "Mung";
  const symbol = "M";
  deployer.deploy(MyERC721Token, name, symbol);
};
