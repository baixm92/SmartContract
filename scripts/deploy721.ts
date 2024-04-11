import hre from "hardhat";
import * as dotenv from "dotenv";

async function main() {
  dotenv.config({ path: __dirname + "/.env" });
  const ACCOUNT_ADDRESS = process.env.ACCOUNT_ADDRESS || "";
  console.log("PrivateKey set:", !!ACCOUNT_ADDRESS);
  const deployedContract = await hre.ethers.deployContract(
    "TestToken721",
    [ACCOUNT_ADDRESS]
    // 如果报错，请放开下面注释掉的代码再尝试
    // { gasPrice: hre.ethers.parseEther("0.00000002") }
  );
  await deployedContract.waitForDeployment();
  console.log(
    `Counter contract deployed to https://zkatana.explorer.startale.com/address/${deployedContract.target}`
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
