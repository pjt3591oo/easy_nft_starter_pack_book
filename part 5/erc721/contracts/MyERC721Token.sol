// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.10;

import "openzeppelin-solidity/contracts/token/ERC721/ERC721.sol";

contract MyERC721Token is ERC721 {

  // 대체 불가능한 품목 정의
  struct Character {
    uint grade;
    string name;
  }

  Character[] public characters; 

  constructor(string memory _name, string memory _symbol) ERC721(_name, _symbol) {}

  function mint(address _to, uint _grade, string memory _name) public {
    require(_to != address(0));
    uint _tokenId = characters.length;
    characters.push(Character(_grade, _name));
    require(!_exists(_tokenId));
    _mint(_to, _tokenId);
  }
}