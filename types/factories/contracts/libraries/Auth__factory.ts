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
import type { Auth, AuthInterface } from "../../../contracts/libraries/Auth";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "initialAdmin",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "Unauthorized",
    type: "error",
  },
  {
    inputs: [],
    name: "WrongRole",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "newAdmin",
        type: "address",
      },
    ],
    name: "AdminAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "oldAdmin",
        type: "address",
      },
    ],
    name: "AdminDeleted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "newOperator",
        type: "address",
      },
    ],
    name: "OperatorAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "oldOperator",
        type: "address",
      },
    ],
    name: "OperatorDeleted",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newAdmin",
        type: "address",
      },
    ],
    name: "addAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOperator",
        type: "address",
      },
    ],
    name: "addOperator",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "admins",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "oldAdmin",
        type: "address",
      },
    ],
    name: "deleteAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "oldOperator",
        type: "address",
      },
    ],
    name: "deleteOperator",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "operators",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b506040516103ee3803806103ee83398101604081905261002f9161006a565b6001600160a01b03166000908152600160208181526040808420805460ff19908116851790915591849052909220805490921617905561009a565b60006020828403121561007c57600080fd5b81516001600160a01b038116811461009357600080fd5b9392505050565b610345806100a96000396000f3fe608060405234801561001057600080fd5b50600436106100725760003560e01c8063704802751161005057806370480275146100e65780639870d7fe146100f9578063b40992a11461010c57600080fd5b806313e7c9d81461007757806327e1f7df146100ae578063429b62e5146100c3575b600080fd5b61009a610085366004610308565b60006020819052908152604090205460ff1681565b604051901515815260200160405180910390f35b6100c16100bc366004610308565b61011f565b005b61009a6100d1366004610308565b60016020526000908152604090205460ff1681565b6100c16100f4366004610308565b610197565b6100c1610107366004610308565b610215565b6100c161011a366004610308565b610290565b3360009081526001602052604090205460ff1661014e576040516282b42960e81b815260040160405180910390fd5b6001600160a01b038116600081815260016020526040808220805460ff19169055517f989ddfce057dad219e0ae16f691b121bb0e348f0d8ae0ad400b4d5ac8d616c8b9190a250565b3360009081526001602052604090205460ff166101c6576040516282b42960e81b815260040160405180910390fd5b6001600160a01b0381166000818152600160208190526040808320805460ff1916909217909155517f44d6d25963f097ad14f29f06854a01f575648a1ef82f30e562ccd3889717e3399190a250565b3360009081526001602052604090205460ff16610244576040516282b42960e81b815260040160405180910390fd5b6001600160a01b038116600081815260208190526040808220805460ff19166001179055517fac6fa858e9350a46cec16539926e0fde25b7629f84b5a72bffaae4df888ae86d9190a250565b3360009081526001602052604090205460ff166102bf576040516282b42960e81b815260040160405180910390fd5b6001600160a01b038116600081815260208190526040808220805460ff19169055517f69df2c5ec2ea4d1fbe1e503524f593b356162ca710671263827f2e1992b95ae19190a250565b60006020828403121561031a57600080fd5b81356001600160a01b038116811461033157600080fd5b939250505056fea164736f6c6343000813000a";

type AuthConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: AuthConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Auth__factory extends ContractFactory {
  constructor(...args: AuthConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    initialAdmin: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(initialAdmin, overrides || {});
  }
  override deploy(
    initialAdmin: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(initialAdmin, overrides || {}) as Promise<
      Auth & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): Auth__factory {
    return super.connect(runner) as Auth__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AuthInterface {
    return new Interface(_abi) as AuthInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): Auth {
    return new Contract(address, _abi, runner) as unknown as Auth;
  }
}
