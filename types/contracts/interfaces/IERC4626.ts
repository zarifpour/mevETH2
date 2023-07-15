/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "../../common";

export interface IERC4626Interface extends Interface {
  getFunction(
    nameOrSignature:
      | "asset"
      | "convertToAssets"
      | "convertToShares"
      | "deposit"
      | "maxDeposit"
      | "maxMint"
      | "maxRedeem"
      | "maxWithdraw"
      | "mint"
      | "previewDeposit"
      | "previewMint"
      | "previewRedeem"
      | "previewWithdraw"
      | "redeem"
      | "totalAssets"
      | "withdraw"
  ): FunctionFragment;

  getEvent(nameOrSignatureOrTopic: "Deposit" | "Withdraw"): EventFragment;

  encodeFunctionData(functionFragment: "asset", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "convertToAssets",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "convertToShares",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "deposit",
    values: [BigNumberish, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "maxDeposit",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "maxMint",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "maxRedeem",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "maxWithdraw",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "mint",
    values: [BigNumberish, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "previewDeposit",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "previewMint",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "previewRedeem",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "previewWithdraw",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "redeem",
    values: [BigNumberish, AddressLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "totalAssets",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "withdraw",
    values: [BigNumberish, AddressLike, AddressLike]
  ): string;

  decodeFunctionResult(functionFragment: "asset", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "convertToAssets",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "convertToShares",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "maxDeposit", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "maxMint", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "maxRedeem", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "maxWithdraw",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "mint", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "previewDeposit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "previewMint",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "previewRedeem",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "previewWithdraw",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "redeem", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "totalAssets",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
}

export namespace DepositEvent {
  export type InputTuple = [
    caller: AddressLike,
    owner: AddressLike,
    assets: BigNumberish,
    shares: BigNumberish
  ];
  export type OutputTuple = [
    caller: string,
    owner: string,
    assets: bigint,
    shares: bigint
  ];
  export interface OutputObject {
    caller: string;
    owner: string;
    assets: bigint;
    shares: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace WithdrawEvent {
  export type InputTuple = [
    caller: AddressLike,
    receiver: AddressLike,
    owner: AddressLike,
    assets: BigNumberish,
    shares: BigNumberish
  ];
  export type OutputTuple = [
    caller: string,
    receiver: string,
    owner: string,
    assets: bigint,
    shares: bigint
  ];
  export interface OutputObject {
    caller: string;
    receiver: string;
    owner: string;
    assets: bigint;
    shares: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface IERC4626 extends BaseContract {
  connect(runner?: ContractRunner | null): IERC4626;
  waitForDeployment(): Promise<this>;

  interface: IERC4626Interface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  asset: TypedContractMethod<[], [string], "view">;

  convertToAssets: TypedContractMethod<
    [shares: BigNumberish],
    [bigint],
    "view"
  >;

  convertToShares: TypedContractMethod<
    [assets: BigNumberish],
    [bigint],
    "view"
  >;

  deposit: TypedContractMethod<
    [assets: BigNumberish, receiver: AddressLike],
    [bigint],
    "payable"
  >;

  maxDeposit: TypedContractMethod<[reciever: AddressLike], [bigint], "view">;

  maxMint: TypedContractMethod<[reciever: AddressLike], [bigint], "view">;

  maxRedeem: TypedContractMethod<[owner: AddressLike], [bigint], "view">;

  maxWithdraw: TypedContractMethod<[owner: AddressLike], [bigint], "view">;

  mint: TypedContractMethod<
    [shares: BigNumberish, receiver: AddressLike],
    [bigint],
    "payable"
  >;

  previewDeposit: TypedContractMethod<[assets: BigNumberish], [bigint], "view">;

  previewMint: TypedContractMethod<[shares: BigNumberish], [bigint], "view">;

  previewRedeem: TypedContractMethod<[shares: BigNumberish], [bigint], "view">;

  previewWithdraw: TypedContractMethod<
    [assets: BigNumberish],
    [bigint],
    "view"
  >;

  redeem: TypedContractMethod<
    [shares: BigNumberish, receiver: AddressLike, owner: AddressLike],
    [bigint],
    "nonpayable"
  >;

  totalAssets: TypedContractMethod<[], [bigint], "view">;

  withdraw: TypedContractMethod<
    [assets: BigNumberish, receiver: AddressLike, owner: AddressLike],
    [bigint],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "asset"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "convertToAssets"
  ): TypedContractMethod<[shares: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "convertToShares"
  ): TypedContractMethod<[assets: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "deposit"
  ): TypedContractMethod<
    [assets: BigNumberish, receiver: AddressLike],
    [bigint],
    "payable"
  >;
  getFunction(
    nameOrSignature: "maxDeposit"
  ): TypedContractMethod<[reciever: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "maxMint"
  ): TypedContractMethod<[reciever: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "maxRedeem"
  ): TypedContractMethod<[owner: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "maxWithdraw"
  ): TypedContractMethod<[owner: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "mint"
  ): TypedContractMethod<
    [shares: BigNumberish, receiver: AddressLike],
    [bigint],
    "payable"
  >;
  getFunction(
    nameOrSignature: "previewDeposit"
  ): TypedContractMethod<[assets: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "previewMint"
  ): TypedContractMethod<[shares: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "previewRedeem"
  ): TypedContractMethod<[shares: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "previewWithdraw"
  ): TypedContractMethod<[assets: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "redeem"
  ): TypedContractMethod<
    [shares: BigNumberish, receiver: AddressLike, owner: AddressLike],
    [bigint],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "totalAssets"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "withdraw"
  ): TypedContractMethod<
    [assets: BigNumberish, receiver: AddressLike, owner: AddressLike],
    [bigint],
    "nonpayable"
  >;

  getEvent(
    key: "Deposit"
  ): TypedContractEvent<
    DepositEvent.InputTuple,
    DepositEvent.OutputTuple,
    DepositEvent.OutputObject
  >;
  getEvent(
    key: "Withdraw"
  ): TypedContractEvent<
    WithdrawEvent.InputTuple,
    WithdrawEvent.OutputTuple,
    WithdrawEvent.OutputObject
  >;

  filters: {
    "Deposit(address,address,uint256,uint256)": TypedContractEvent<
      DepositEvent.InputTuple,
      DepositEvent.OutputTuple,
      DepositEvent.OutputObject
    >;
    Deposit: TypedContractEvent<
      DepositEvent.InputTuple,
      DepositEvent.OutputTuple,
      DepositEvent.OutputObject
    >;

    "Withdraw(address,address,address,uint256,uint256)": TypedContractEvent<
      WithdrawEvent.InputTuple,
      WithdrawEvent.OutputTuple,
      WithdrawEvent.OutputObject
    >;
    Withdraw: TypedContractEvent<
      WithdrawEvent.InputTuple,
      WithdrawEvent.OutputTuple,
      WithdrawEvent.OutputObject
    >;
  };
}
