import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.24",
  networks: {
    hardhat: {},
    mainnet: {
      url: "https://network.ambrosus.io/",
      chainId: 16718,
    },
    testnet: {
      url: "https://network.ambrosus-test.io",
      chainId: 22040,
    },
    devnet: {
      url: "https://network.ambrosus-dev.io",
      chainId: 30746,
    },
  },
};

export default config;
