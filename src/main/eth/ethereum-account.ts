import * as Account from "eth-lib/lib/account";
import * as Hash from "eth-lib/lib/hash";
import * as Web3Utils from "web3-utils";
import { DepositDto } from '../dto/deposit.dto';
import * as HDKey from "hdkey";

export interface RawAccount {
  privateKey: string;
  address: string;
}

export class EthereumAccount {

  constructor(private account: RawAccount) {
  }

  get privateKey() {
    return this.account.privateKey;
  }

  get address() {
    return this.account.address;
  }

  static recoverAccountFromSeed(seed: string): EthereumAccount {
    const hdkey = new HDKey.fromMasterSeed(seed);
    const hdnode = hdkey.derive("m/44'/60'/0'/0/0");
    const privateKey = hdnode._privateKey.toString();

    const accounts = Account.accounts;
    const acc = accounts.privateKeyToAccount("0x" + privateKey);
    return acc;
  }

  static recoverAccount(pk: string): EthereumAccount {
    return new EthereumAccount(Account.fromPrivate(pk));
  }

  signReceiptTendermint(sender, sellToken, buyToken, sellAmount, buyAmount, nonce) {
    const data = sender + sellToken + buyToken + this.hexValue(sellAmount) + this.hexValue(buyAmount) + this.hexValue(nonce);
    const hash = this.hashMessage(data);
    return this.signHash(data, hash);
  }

  signWithdrawTendermint(sender, token, amount) {
    const data = sender + token + this.hexValue(amount);
    const hash = this.hashMessage(data);
    return this.signHash(data, hash);
  }

  signReceipt(contractAddress, value, ticketNumber) {
    if (typeof value !== "string") {
      throw new Error("value must be string");
    }

    const data = contractAddress + this.hexValue(value) + this.hexValue(ticketNumber);
    return this.sign(data);
  }

  hexValue(val) {
    return Web3Utils.asciiToHex(val).replace("0x", "");
  }

  signHash(data, hash) {
    const signature = Account.sign(hash, this.privateKey);
    const vrs = Account.decodeSignature(signature);

    return {
      message: data,
      messageHash: hash,
      v: vrs[0],
      r: vrs[1],
      s: vrs[2],
      signature: signature
    };
  };

  sign(data) {
    const hash = this.hashMessage(data);

    const signature = Account.sign(hash, this.privateKey);
    const vrs = Account.decodeSignature(signature);

    return {
      message: data,
      messageHash: hash,
      v: vrs[0],
      r: vrs[1],
      s: vrs[2],
      signature: signature
    };
  };

  public hashMessage(data: string) {
    return Hash.keccak256s(data);
  };

}
