import { ethers } from "hardhat"

const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS || "0xaddress"

export default async function listen() {
    const myContractFactory = await ethers.getContractFactory("MyContract")
    const myContract = await myContractFactory.attach(CONTRACT_ADDRESS)

    console.log(`Listening to events from contract ${CONTRACT_ADDRESS}`)
    myContract.on("OperationPerformed", (sender, message) => {
        console.log(`Received message from ${sender} with message ${message}`)
    })
}

listen()
