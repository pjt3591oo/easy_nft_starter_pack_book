const truffleAssert = require('truffle-assertions');
const Mung = artifacts.require("Mung");

contract("Mung", accounts => {
  // it이 실행될 때마다 스마트 콘트랙트 객체를 가져옵니다. 
  before(async () => {
    this.instance = await Mung.deployed();
  });

  it("should be initialized with correct value", async () => {
    // 스마트 콘트랙트에 정의된 text() 함수 호출
    const text = await this.instance.text();
    assert.equal(text, "Hello mung", "Wrong initialized value!");
  });

  it("should change the text", async () => {
    const changedText = 'hoho';
    // 스마트 콘트랙트에 정의된 setText() 함수 호출
    await this.instance.setText(changedText, { from: accounts[0] });
    // 스마트 콘트랙트에 정의된 say() 함수 호출
    const text = await this.instance.say();
    assert.equal(text, changedText, "dose not change the value!");
  });

  it("should throw exception", async () => {
    // 스마트 콘트랙트에 정의된 errorOccur() 함수 호출 
    await truffleAssert.reverts(
      this.instance.errorOccur(1, { from: accounts[0] }),
      "hello world error"
    );
  });
  
  it("should not throw exception", async () => {
    // 스마트 콘트랙트에 정의된 errorOccur() 함수 호출
    const rst = await this.instance.errorOccur(0, { from: accounts[0] }); assert.equal(rst.words[0], 0, "ErrorOccur event not emitted!");
  });
});