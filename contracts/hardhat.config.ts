import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import * as dotenv from "dotenv";

dotenv.config();

const config: HardhatUserConfig = {
  solidity: "0.8.24",
  networks: {
    hardhat: {},
    airdao_mainnet: {
      url: "https://network.ambrosus.io/",
      chainId: 16718,
      accounts: [process.env.PRIVATE_KEY!], // Add private key for mainnet
    },
    airdao_testnet: {
      url: "https://network.ambrosus-test.io",
      chainId: 22040,
      accounts: [process.env.PRIVATE_KEY!], // Add private key for testnet
    },
    airdao_devnet: {
      url: "https://network.ambrosus-dev.io",
      chainId: 30746,
      accounts: [process.env.PRIVATE_KEY!], // Add private key for devnet
    },
    flow_testnet: {
      url: "https://testnet.evm.nodes.onflow.org/",
      chainId: 545,
      accounts: [process.env.PRIVATE_KEY!], // Add private key for testnet
    },
  },
};

export default config;