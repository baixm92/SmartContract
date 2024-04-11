// SPDX-License-Identifier: MIT
// Compatible with OpenZeppelin Contracts ^5.0.0
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC1155/extensions/ERC1155Burnable.sol";

contract TestToken1155 is ERC1155, Ownable, ERC1155Burnable {
    // 下面的地址对应NFT生成时对应的NFT信息，如果想用自己的，请更换成自己的链接。
    //{id}对应生成NFT时的tokenID，json文件的对应内容如下
    /**
    {
        "name": "ERC1155-NFT",  // NFT的名称
        "description": "this is a test NFT(ERC1155).",  // NFT的描述
        "image": "ipfs://QmbdxxpzCcTSd2jx3fVfXGXYSitLtA81RGAgED3F1xCrAc"  // NFT对应的图片
    }
     */
    constructor(address initialOwner) ERC1155("https://gateway.pinata.cloud/ipfs/QmaNKMhsMLTFhViKuNS2Jk2CqMC9eUFmxoq2HbuMeXgMG9/{id}.json") Ownable(initialOwner) {}

    function setURI(string memory newuri) public onlyOwner {
        _setURI(newuri);
    }

    function mint(address account, uint256 id, uint256 amount, bytes memory data)
        public
        onlyOwner
    {
        _mint(account, id, amount, data);
    }

    function mintBatch(address to, uint256[] memory ids, uint256[] memory amounts, bytes memory data)
        public
        onlyOwner
    {
        _mintBatch(to, ids, amounts, data);
    }
}
