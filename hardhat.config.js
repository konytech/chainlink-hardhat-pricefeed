require("@nomiclabs/hardhat-ethers")
require('hardhat-deploy');
require("./hardhat/tasks/read-price-feed")

require('dotenv').config() // Import env variables
const MUMBAI_RPC_URL = process.env.MUMBAI_RPC_URL || "https://polygon-mumbai.alchemyapi.io/v2/your-api-key"
const MNEMONIC = process.env.MNEMONIC || "your mnemonic"

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  defaultNetwork: "mumbai",
  networks: {
    mumbai: {
      url: MUMBAI_RPC_URL,
      //accounts: [PRIVATE_KEY],
      accounts: {
        mnemonic: MNEMONIC,
      },
      saveDeployments: true,
    }
  },
  namedAccounts: {
    deployer: {
      default: 0, // here this will by default take the first account as deployer
      1: 0 // similarly on mainnet it will take the first account as deployer. Note though that depending on how hardhat network are configured, the account 0 on one network can be different than on another
    },
    feeCollector: {
      default: 1
    }
  },
  paths: {
    root: "./hardhat/"
  },
  solidity: "0.8.7",
};
