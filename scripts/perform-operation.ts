import { ethers } from "hardhat"

const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS || "0xaddress"

async function main() {
    const myContractFactory = await ethers.getContractFactory("MyContract")
    const myContract = await myContractFactory.attach(CONTRACT_ADDRESS)

    console.log(`Calling perform operation on contract ${CONTRACT_ADDRESS}`)
    await myContract.performOperation("Hello Event!")
}

main().catch((error) => {
    console.error(error)
    process.exitCode = 1
})
