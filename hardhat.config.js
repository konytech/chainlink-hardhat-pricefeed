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
  solidity: "0.8.7",
};
