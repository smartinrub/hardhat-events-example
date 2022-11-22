// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract MyContract {
    event OperationPerformed(address indexed sender, string message);

    function performOperation(string memory _message) public {
        emit OperationPerformed(msg.sender, _message);
    }
}
