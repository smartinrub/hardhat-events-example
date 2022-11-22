import { ethers } from "hardhat"

async function main() {
    const myContractFactory = await ethers.getContractFactory("MyContract")
    console.log("Deploying contract...")
    const myContract = await myContractFactory.deploy()
    await myContract.deployed()
    console.log(`Deployed contract to: ${myContract.address}`)
}

main().catch((error) => {
    console.error(error)
    process.exitCode = 1
})
