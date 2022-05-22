const ImageNFT = artifacts.require("ImageNFT");

module.exports = function (deployer) {
  const name = "MyImageNFT";
  const symbol = "MIN";
  deployer.deploy(ImageNFT, name, symbol);
};
