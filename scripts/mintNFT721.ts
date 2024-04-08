import { ethers } from "hardhat";
import { abi } from "../src/contracts/TestToken721.sol/TestToken721.json";

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
    const CONTRACT_ADDRESS_721 = process.env.CONTRACT_ADDRESS_721 || "";
    if (!CONTRACT_ADDRESS_721) {
      console.log("请在.env文件中设置CONTRACT_ADDRESS_721变量。");
    }
    const contract = new ethers.Contract(CONTRACT_ADDRESS_721, abi, wallet);
    const NFT_TO_ADDRESS = process.env.NFT_TO_ADDRESS || "";
    if (!NFT_TO_ADDRESS) {
      console.log("请在.env文件中设置NFT_TO_ADDRESS变量。");
    }
    const NFT_INFO_721 = process.env.NFT_INFO_721 || "";
    if (!NFT_INFO_721) {
      console.log("请在.env文件中设置NFT_INFO_721变量。");
    }
    await contract.safeMint(NFT_TO_ADDRESS, NFT_INFO_721);
    console.log(`mint DawnToken721`);
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
