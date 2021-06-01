// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class TokenAliasAdded extends ethereum.Event {
  get params(): TokenAliasAdded__Params {
    return new TokenAliasAdded__Params(this);
  }
}

export class TokenAliasAdded__Params {
  _event: TokenAliasAdded;

  constructor(event: TokenAliasAdded) {
    this._event = event;
  }

  get tokenAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get tokenAliasAddress(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class TokenAliasRemoved extends ethereum.Event {
  get params(): TokenAliasRemoved__Params {
    return new TokenAliasRemoved__Params(this);
  }
}

export class TokenAliasRemoved__Params {
  _event: TokenAliasRemoved;

  constructor(event: TokenAliasRemoved) {
    this._event = event;
  }

  get tokenAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class Oracle extends ethereum.SmartContract {
  static bind(address: Address): Oracle {
    return new Oracle("Oracle", address);
  }

  calculations(): Array<Address> {
    let result = super.call("calculations", "calculations():(address[])", []);

    return result[0].toAddressArray();
  }

  try_calculations(): ethereum.CallResult<Array<Address>> {
    let result = super.tryCall(
      "calculations",
      "calculations():(address[])",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddressArray());
  }

  getNormalizedValueUsdc(tokenAddress: Address, amount: BigInt): BigInt {
    let result = super.call(
      "getNormalizedValueUsdc",
      "getNormalizedValueUsdc(address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(tokenAddress),
        ethereum.Value.fromUnsignedBigInt(amount)
      ]
    );

    return result[0].toBigInt();
  }

  try_getNormalizedValueUsdc(
    tokenAddress: Address,
    amount: BigInt
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getNormalizedValueUsdc",
      "getNormalizedValueUsdc(address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(tokenAddress),
        ethereum.Value.fromUnsignedBigInt(amount)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getPriceUsdcRecommended(tokenAddress: Address): BigInt {
    let result = super.call(
      "getPriceUsdcRecommended",
      "getPriceUsdcRecommended(address):(uint256)",
      [ethereum.Value.fromAddress(tokenAddress)]
    );

    return result[0].toBigInt();
  }

  try_getPriceUsdcRecommended(
    tokenAddress: Address
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getPriceUsdcRecommended",
      "getPriceUsdcRecommended(address):(uint256)",
      [ethereum.Value.fromAddress(tokenAddress)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  managementList(): Address {
    let result = super.call("managementList", "managementList():(address)", []);

    return result[0].toAddress();
  }

  try_managementList(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "managementList",
      "managementList():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  tokenAliases(param0: Address): Address {
    let result = super.call("tokenAliases", "tokenAliases(address):(address)", [
      ethereum.Value.fromAddress(param0)
    ]);

    return result[0].toAddress();
  }

  try_tokenAliases(param0: Address): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "tokenAliases",
      "tokenAliases(address):(address)",
      [ethereum.Value.fromAddress(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  usdcAddress(): Address {
    let result = super.call("usdcAddress", "usdcAddress():(address)", []);

    return result[0].toAddress();
  }

  try_usdcAddress(): ethereum.CallResult<Address> {
    let result = super.tryCall("usdcAddress", "usdcAddress():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get _managementListAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _usdcAddress(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class DefaultCall extends ethereum.Call {
  get inputs(): DefaultCall__Inputs {
    return new DefaultCall__Inputs(this);
  }

  get outputs(): DefaultCall__Outputs {
    return new DefaultCall__Outputs(this);
  }
}

export class DefaultCall__Inputs {
  _call: DefaultCall;

  constructor(call: DefaultCall) {
    this._call = call;
  }
}

export class DefaultCall__Outputs {
  _call: DefaultCall;

  constructor(call: DefaultCall) {
    this._call = call;
  }
}

export class AddTokenAliasCall extends ethereum.Call {
  get inputs(): AddTokenAliasCall__Inputs {
    return new AddTokenAliasCall__Inputs(this);
  }

  get outputs(): AddTokenAliasCall__Outputs {
    return new AddTokenAliasCall__Outputs(this);
  }
}

export class AddTokenAliasCall__Inputs {
  _call: AddTokenAliasCall;

  constructor(call: AddTokenAliasCall) {
    this._call = call;
  }

  get tokenAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get tokenAliasAddress(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class AddTokenAliasCall__Outputs {
  _call: AddTokenAliasCall;

  constructor(call: AddTokenAliasCall) {
    this._call = call;
  }
}

export class AddTokenAliasesCall extends ethereum.Call {
  get inputs(): AddTokenAliasesCall__Inputs {
    return new AddTokenAliasesCall__Inputs(this);
  }

  get outputs(): AddTokenAliasesCall__Outputs {
    return new AddTokenAliasesCall__Outputs(this);
  }
}

export class AddTokenAliasesCall__Inputs {
  _call: AddTokenAliasesCall;

  constructor(call: AddTokenAliasesCall) {
    this._call = call;
  }

  get _tokenAliases(): Array<AddTokenAliasesCall_tokenAliasesStruct> {
    return this._call.inputValues[0].value.toTupleArray<
      AddTokenAliasesCall_tokenAliasesStruct
    >();
  }
}

export class AddTokenAliasesCall__Outputs {
  _call: AddTokenAliasesCall;

  constructor(call: AddTokenAliasesCall) {
    this._call = call;
  }
}

export class AddTokenAliasesCall_tokenAliasesStruct extends ethereum.Tuple {
  get tokenAddress(): Address {
    return this[0].toAddress();
  }

  get tokenAliasAddress(): Address {
    return this[1].toAddress();
  }
}

export class RemoveTokenAliasCall extends ethereum.Call {
  get inputs(): RemoveTokenAliasCall__Inputs {
    return new RemoveTokenAliasCall__Inputs(this);
  }

  get outputs(): RemoveTokenAliasCall__Outputs {
    return new RemoveTokenAliasCall__Outputs(this);
  }
}

export class RemoveTokenAliasCall__Inputs {
  _call: RemoveTokenAliasCall;

  constructor(call: RemoveTokenAliasCall) {
    this._call = call;
  }

  get tokenAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class RemoveTokenAliasCall__Outputs {
  _call: RemoveTokenAliasCall;

  constructor(call: RemoveTokenAliasCall) {
    this._call = call;
  }
}

export class SetCalculationsCall extends ethereum.Call {
  get inputs(): SetCalculationsCall__Inputs {
    return new SetCalculationsCall__Inputs(this);
  }

  get outputs(): SetCalculationsCall__Outputs {
    return new SetCalculationsCall__Outputs(this);
  }
}

export class SetCalculationsCall__Inputs {
  _call: SetCalculationsCall;

  constructor(call: SetCalculationsCall) {
    this._call = call;
  }

  get calculationAddresses(): Array<Address> {
    return this._call.inputValues[0].value.toAddressArray();
  }
}

export class SetCalculationsCall__Outputs {
  _call: SetCalculationsCall;

  constructor(call: SetCalculationsCall) {
    this._call = call;
  }
}
