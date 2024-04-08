import { ethers } from "hardhat";
import { abi } from "../src/contracts/TestToken1155.sol/TestToken1155.json";

async function main() {
  try {
    const RPC_URL = process.env.RPC_URL || "";
    if (!RPC_URL) {
      console.log("请在.env文件中设置RPC_URL变量。");
    }
    const provider = new ethers.JsonRpcProvider(RPC_URL);
    const ACCOUNT_PRIVATE_KEY = process.env.ACCOUNT_PRIVATE_KEY || "";
    if (!ACCOUNT_PRIVATE_KEY) {
      console.log("请在.env文件中设置ACCOUNT_PRIVATE_KEY变量。");
    }
    const wallet = new ethers.Wallet(ACCOUNT_PRIVATE_KEY, provider);
    const CONTRACT_ADDRESS_1155 = process.env.CONTRACT_ADDRESS_1155 || "";
    if (!CONTRACT_ADDRESS_1155) {
      console.log("请在.env文件中设置CONTRACT_ADDRESS_1155变量。");
    }
    const contract = new ethers.Contract(CONTRACT_ADDRESS_1155, abi, wallet);
    const NFT_TO_ADDRESS = process.env.NFT_TO_ADDRESS || "";
    if (!NFT_TO_ADDRESS) {
      console.log("请在.env文件中设置NFT_TO_ADDRESS变量。");
    }
    const NFT_INFO_1155 = process.env.NFT_INFO_1155 || "";
    if (!NFT_INFO_1155) {
      console.log("请在.env文件中设置NFT_INFO_1155变量。");
    }
    await contract.mint(NFT_TO_ADDRESS, 1, 1, "0x");
    console.log(`mint DawnToken1155`);
  } catch (error) {
    console.log(error);
  }
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
