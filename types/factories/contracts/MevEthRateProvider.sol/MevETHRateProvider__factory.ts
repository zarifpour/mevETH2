/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type {
  Signer,
  AddressLike,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { NonPayableOverrides } from "../../../common";
import type {
  MevETHRateProvider,
  MevETHRateProviderInterface,
} from "../../../contracts/MevEthRateProvider.sol/MevETHRateProvider";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IMevEth",
        name: "_mevETH",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "getRate",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "mevETH",
    outputs: [
      {
        internalType: "contract IMevEth",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60a060405234801561001057600080fd5b5060405161021638038061021683398101604081905261002f91610040565b6001600160a01b0316608052610070565b60006020828403121561005257600080fd5b81516001600160a01b038116811461006957600080fd5b9392505050565b608051610186610090600039600081816040015260db01526101866000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c806330711adf1461003b578063679aefce1461008c575b600080fd5b6100627f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020015b60405180910390f35b6100946100a2565b604051908152602001610083565b6040517f07a2d13a000000000000000000000000000000000000000000000000000000008152670de0b6b3a764000060048201526000907f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16906307a2d13a90602401602060405180830381865afa158015610137573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061015b9190610160565b905090565b60006020828403121561017257600080fd5b505191905056fea164736f6c6343000813000a";

type MevETHRateProviderConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MevETHRateProviderConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MevETHRateProvider__factory extends ContractFactory {
  constructor(...args: MevETHRateProviderConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    _mevETH: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(_mevETH, overrides || {});
  }
  override deploy(
    _mevETH: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(_mevETH, overrides || {}) as Promise<
      MevETHRateProvider & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): MevETHRateProvider__factory {
    return super.connect(runner) as MevETHRateProvider__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MevETHRateProviderInterface {
    return new Interface(_abi) as MevETHRateProviderInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): MevETHRateProvider {
    return new Contract(address, _abi, runner) as unknown as MevETHRateProvider;
  }
}
