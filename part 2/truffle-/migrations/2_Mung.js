const Mung = artifacts.require("Mung");

module.exports = function (deployer) {
  deployer.deploy(Mung, "Hello mung"); // 생성자에 "Hello mung" 문자열 전달
};