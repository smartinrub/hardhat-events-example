// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract MyContract {
    event MessageSent(address indexed sender, string message);

    function sendMessage(string memory _message) public {
        emit MessageSent(msg.sender, _message);
    }
}
