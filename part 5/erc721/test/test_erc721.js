// truffle-assertions는 npm을 이용하여 설치한다
// npm install --save truffle-assertions
const truffleAssert = require('truffle-assertions');
const MyERC721Token = artifacts.require("MyERC721Token");

contract("MyERC721Token", accounts => {
  
  beforeEach(async () => {
    _name = "Mung";
    _symbol = "M";
    instance = await MyERC721Token.deployed();
  })

  it('creation: initial balance', async () => {
    const name = await instance.name.call()
    const symbol = await instance.symbol.call()

    assert.strictEqual(name, _name)
    assert.strictEqual(symbol, _symbol)
  })

  it('mint', async () => {
    const beforeBalance = await instance.balanceOf.call(accounts[0])
    await instance.mint(accounts[0], 10, 'sword')
 
    const afterBalance = await instance.balanceOf.call(accounts[0])
 
    assert.strictEqual(beforeBalance.toString(), '0')
    assert.strictEqual(afterBalance.toString(), '1')
  })

  it('transfer: accounts[0] to accounts[1]', async () => {
    const beforeBalanceTo = await instance.balanceOf.call(accounts[0])
    const beforeBalanceFrom = await instance.balanceOf.call(accounts[1])
  
    await instance.transferFrom(accounts[0], accounts[1], 0)

    const afterBalanceTo = await instance.balanceOf.call(accounts[0])
    const afterBalanceFrom = await instance.balanceOf.call(accounts[1])

    assert.strictEqual(beforeBalanceTo.toString(), '1')
    assert.strictEqual(beforeBalanceFrom.toString(), '0')
    
    assert.strictEqual(afterBalanceTo.toString(), '0')
    assert.strictEqual(afterBalanceFrom.toString(), '1')
  })
  
})