/* import '@xyrusworx/hardhat-solidity-json';
//import '@nomicfoundation/hardhat-toolbox';*/
import { HardhatUserConfig } from 'hardhat/config';
/*import '@openzeppelin/hardhat-upgrades';
import 'solidity-coverage';
import '@nomiclabs/hardhat-solhint';
import '@primitivefi/hardhat-dodoc';*/
import dotenv from 'dotenv';
import '@nomicfoundation/hardhat-verify';
dotenv.config();

const config: HardhatUserConfig = {
  solidity: {
    version: '0.8.17',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  networks: {
    baseSepolia: {
      url: process.env.RPC_URL,
      accounts: [process.env.PRIVATE_KEY as string],
      gasPrice: 10000000000,
    },
  },

  etherscan: {
    apiKey: process.env.BASESCAN_API,
  },
};

export default config;
