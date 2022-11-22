import { ethers } from "hardhat"
import { expect, assert } from "chai"
import { MyContract, MyContract__factory } from "../typechain-types"

describe("MyContract", function () {
    let myContractFactory: MyContract__factory
    let myContract: MyContract

    beforeEach(async function () {
        myContractFactory = (await ethers.getContractFactory(
            "MyContract"
        )) as MyContract__factory
        myContract = await myContractFactory.deploy()
    })

    it("Should emit event", async function () {
        let senders = await ethers.getSigners()
        await expect(myContract.performOperation("Hello"))
            .to.emit(myContract, "OperationPerformed")
            .withArgs(await senders[0].getAddress(), "Hello")
    })
})
