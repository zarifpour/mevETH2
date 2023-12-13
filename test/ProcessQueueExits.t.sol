/// SPDX: License-Identifier: MIT
pragma solidity ^0.8.19;

// Test utils
import "forge-std/Test.sol";

import "script/ProcessQueueExits.s.sol";

contract ProcessQueueRewardsTest is Test {
    string RPC_ETH_MAINNET = vm.envString("RPC_MAINNET");
    uint256 FORK_ID;
    ProcessQueueExitsScript process;

    function setUp() public virtual {
        FORK_ID = vm.createSelectFork(RPC_ETH_MAINNET);
        process = new ProcessQueueExitsScript();
    }

    function testProcessQueueExits() public virtual {
        vm.selectFork(FORK_ID);
        // dummy exit 10 validators
        vm.deal(0x617c8dE5BdE54ffbb8d92716CC947858cA38f582, 320 ether);
        process.run();
    }
}
