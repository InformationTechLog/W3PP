// SPDX-License-Identifier: MIT
pragma solidity 0.8.0;

import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC20/ERC20.sol";

contract MyToken is ERC20 {
    constructor(uint totalSupply_) public ERC20("TIGEEMA","TGM") {
       _mint(msg.sender, totalSupply_);
    }

    function getTotalSupply() public view returns(uint) {
        return totalSupply();
    }
}