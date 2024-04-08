// import { HardhatUserConfig } from "hardhat/config";
// import "@nomicfoundation/hardhat-toolbox";

// const config: HardhatUserConfig = {
//   solidity: "0.8.24",
// };

// export default config;

import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import * as dotenv from "dotenv";

dotenv.config({ path: __dirname + "/.env" });
const ACCOUNT_PRIVATE_KEY = process.env.ACCOUNT_PRIVATE_KEY || "";
console.log("PrivateKey set:", !!ACCOUNT_PRIVATE_KEY);
const RPC_URL = process.env.RPC_URL || "";
console.log("RpcUrl set:", !!RPC_URL);

const config: HardhatUserConfig = {
  solidity: "0.8.24",
  paths: {
    artifacts: "./src",
  },
  networks: {
    network: {
      url: RPC_URL,
      accounts: [ACCOUNT_PRIVATE_KEY],
    },
  },
};

export default config;
