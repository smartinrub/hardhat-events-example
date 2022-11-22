# Solidity Events Example

## Usage

### Getting Started

1. Run node:

```bash
yarn hardhat node
```

2. Deploy contract:

```bash
yarn hardhat run scripts/event-listener.ts --network localhost
```

>Add the contract address to your `.env`. e.g. `CONTRACT_ADDRESS=0x5FbDB2315678afecb367f032d93F642f64180aa3`

1. Start listening to events:

```bash
yarn hardhat run scripts/event-listener.ts --network localhost
```

4. Run the script that invokes the send message function.

```bash
yarn hardhat run scripts/send.ts --network localhost
```

You should see on the listener process something like: "Received message from 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266 with message Hello Event!"

### Run Tests

```bash
yarn hardhat test
```
