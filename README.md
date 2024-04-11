# Sample Hardhat Project

使用前请先在根目录下配置.env 文件

```
# address对应的密钥
ACCOUNT_PRIVATE_KEY=
# address
ACCOUNT_ADDRESS=
# 对应网络的RPC网址
RPC_URL=
# 对应生成的ERC721的智能合约的address(执行完脚本npx hardhat run scripts/deploy721.ts --network network后，log中会打印出对应的地址)
CONTRACT_ADDRESS_721=
# 对应生成的ERC1155的智能合约的address(执行完脚本npx hardhat run scripts/deploy1155.ts --network network后，log中会打印出对应的地址)
CONTRACT_ADDRESS_1155=
# 生成到哪个address下
NFT_TO_ADDRESS=
# NFT721的信息(下面的值可以使用，但当信息的拥有人删除对应的图片后，NFT的图片可能无法正常显示)
NFT_INFO_721=QmUBp3fLDqpYF6gAdN6f8iFDrMVPU551NHkXbei8gcoY5V
```

ERC721 智能合约源码

```
contracts/TestToken721.sol
```

ERC1155 智能合约源码

```
contracts/TestToken1155.sol
```

编译智能合约

```
npx hardhat compile
```

部署 ERC721 智能合约到对应网络

```
npx hardhat run scripts/deploy721.ts --network network
```

部署 ERC1155 智能合约到对应网络

```
npx hardhat run scripts/deploy1155.ts --network network
```

生成 ERC721NFT

```
npx hardhat run scripts/mintNFT721.ts --network network
```

生成 ERC1155NFT

```
npx hardhat run scripts/mintNFT1155.ts --network network
```
