import { HardhatUserConfig } from "hardhat/config"
import "@nomicfoundation/hardhat-toolbox"
import "@typechain/hardhat"
import "dotenv/config"

const config: HardhatUserConfig = {
    defaultNetwork: "hardhat",
    networks: {
        localhost: { url: "http://127.0.0.1:8545/", chainId: 31337 },
    },
    solidity: "0.8.17",
}

export default config
