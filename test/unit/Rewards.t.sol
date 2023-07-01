/// SPDX: License-Identifier: GPL-3.0-only
pragma solidity 0.8.20;

import "../MevEthTest.sol";
import "src/libraries/Auth.sol";
import "../mocks/DepositContract.sol";
import { IStakingModule } from "../../src/interfaces/IStakingModule.sol";
import "../../src/interfaces/IMevEthShareVault.sol";
import "../../lib/safe-tools/src/SafeTestTools.sol";

//TODO: These tests should be bolstered
contract MevRewardsTest is MevEthTest {
    /**
     * Tests granting rewards when the share vault is a multisig.
     */
    function testGrantRewardsFromMultisig(uint128 amount) public {
        vm.assume(amount > 10_000);
        address mevShare = mevEth.mevEthShareVault();

        vm.deal(address(this), amount);
        payable(mevShare).transfer(amount);

        bytes memory data = abi.encodeWithSelector(IMevEthShareVault.payRewards.selector, amount);

        vm.expectEmit();
        emit Rewards(mevShare, amount);
        SafeTestLib.execTransaction(multisigSafeInstance, mevShare, 0, data);

        uint256 elastic = mevEth.totalAssets();
        uint256 base = mevEth.totalSupply();

        assertGt(elastic, base);
    }

    /**
     * Tests granting rewards when the share vault is the MevEthShareVaul.
     */

    function testGrantRewards(uint128 amount) public {
        //Update the share vault
        address newShareVault = address(new MevEthShareVault(address(mevEth), FEE_REWARDS_PER_BLOCK));
        _updateShareVault(newShareVault);

        vm.assume(amount > 10_000);
        address mevShare = mevEth.mevEthShareVault();

        vm.deal(address(this), amount);
        payable(mevShare).transfer(amount);

        vm.expectEmit();
        emit Rewards(mevShare, amount);
        IMevEthShareVault(mevShare).payRewards(amount);

        uint256 elastic = mevEth.totalAssets();
        uint256 base = mevEth.totalSupply();

        assertGt(elastic, base);
    }
}
