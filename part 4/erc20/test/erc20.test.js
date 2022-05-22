const erc20 = artifacts.require('erc20')
const truffleAssert = require('truffle-assertions');
let token

contract('ERC20', (accounts) => {
  const name = 'JeongTae'
  const symbol = 'JT'
  const decimals = 18;
  const totalSupply = '100000000000000000000000000' // 10^25 => 10000000JT

  beforeEach(async () => {
    token = await erc20.new(name, symbol, decimals, totalSupply, { from: accounts[0] })
  })

  it('creation: initial balance', async () => {
    const balance = await token.balanceOf.call(accounts[0])
    assert.strictEqual(balance.toString(), totalSupply)
  })
  
  it('creation: initial name, symbol, decimals, totalSupply', async () => {
    const _name = await token.name.call()
    assert.strictEqual(_name, name)
    
    const _symbol = await token.symbol.call()
    assert.strictEqual(_symbol, symbol)
    
    const _decimals = await token.decimals.call()
    assert.strictEqual(_decimals.toString(), decimals.toString())
    
    const _totalSupply = await token.totalSupply.call()
    assert.strictEqual(_totalSupply.toString(), totalSupply)
  })

  it('transfer: accounts[0] to accounts[1]', async () => {
    const beforeBalance = await token.balanceOf.call(accounts[0])
    const amount =  1000;
 
    await token.transfer(accounts[1], amount, { from: accounts[0] })

    const afterBalance0 = await token.balanceOf.call(accounts[0])
    const afterBalance1 = await token.balanceOf.call(accounts[1])

    assert.strictEqual(beforeBalance.toString(), totalSupply)
    assert.strictEqual(afterBalance0.toString(), "99999999999999999999999000")
    assert.strictEqual(afterBalance1.toString(), "1000")
  })
  it('transfer event', async () => {
    const amount =  1000;
    const rst = await token.transfer(accounts[1], amount, { from: accounts[0] })
    truffleAssert.eventEmitted(rst, 'Transfer', (event) => {
      const isSender = event[0] === accounts[0];
      const isReceiver = event[1] === accounts[1];
      const isAmount = event[2].toString() === amount.toString()
      return isSender && isReceiver && isAmount;
    });
  })
})
