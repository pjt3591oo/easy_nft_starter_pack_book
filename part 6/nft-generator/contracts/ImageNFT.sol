// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.10;

import "openzeppelin-solidity/contracts/token/ERC721/ERC721.sol";

contract ImageNFT is ERC721 {

  // 대체 불가능한 품목 정의
  struct Image {
    string name;
    string url;
  }

  Image[] public images; 

  constructor(string memory _name, string memory _symbol) ERC721(_name, _symbol) {}

  function mint(address _to, string memory _name, string memory _url) public {
    require(_to != address(0));
    uint _tokenId = images.length;
    images.push(Image(_name, _url));
    require(!_exists(_tokenId));
    _mint(_to, _tokenId);
  }
}