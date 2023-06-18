// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract DonationContract {
    address payable public wallet;

    event DonationReceived(address indexed sender, uint256 amount);

    constructor(address payable _wallet) {
        wallet = _wallet;
    }

    function donate() external payable {
        require(msg.value > 0, "DonationContract: Amount must be greater than zero");
        wallet.transfer(msg.value);
        emit DonationReceived(msg.sender, msg.value);
    }
}
