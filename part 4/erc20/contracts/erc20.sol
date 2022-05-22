// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.10;

contract erc20 {
  event Transfer(address indexed _from, address indexed _to, uint256 _value);
  event Approval(address indexed _owner, address indexed _spender, uint256 _value);

  string public name;
  string public symbol;
  uint8 public decimals;
  uint public totalSupply;

  mapping(address => uint) public balanceOf;
  mapping(address => mapping(address => uint)) public _allowances;
  
  constructor (
    string memory _name,
    string memory _symbol,
    uint8 _decimals,
    uint _totalSupply
  ) {
    name = _name;
    symbol = _symbol;
    decimals = _decimals;
    totalSupply = _totalSupply;

    balanceOf[msg.sender] = totalSupply;
    emit Transfer(address(this), msg.sender, totalSupply);
  }

  function transfer(address recipient, uint256 amount) public returns (bool) {
    _transfer(msg.sender, recipient, amount);
    return true;
  }
  function transferFrom(address sender, address recipient, uint256 amount) public returns (bool) {
    _transfer(sender, recipient, amount);
    _approve(sender, msg.sender, _allowances[sender][msg.sender] - amount);
    return true;
  }
  function allowance(address owner, address spender) public view returns (uint256) {
    return _allowances[owner][spender];
  }
  function approve(address spender, uint256 value) public returns (bool) {
    _approve(msg.sender, spender, value);
    return true;
  }

  function _transfer(address sender, address recipient, uint256 amount) internal {
    balanceOf[sender] -= amount;
    balanceOf[recipient] += amount;

    emit Transfer(sender, recipient, amount);
  }

  function _approve(address owner, address spender, uint256 value) internal {
    _allowances[owner][spender] = value;

    emit Approval(owner, spender, value);
  }
}