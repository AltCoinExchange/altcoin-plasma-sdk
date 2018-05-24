import { EthEngine } from "./eth-engine";
import { ERC20 } from "./ERC20";
export declare class DEX extends ERC20 {
  constructor(contractAddress: string, ethEngine: EthEngine);
  currentDepositNonce(): Promise<any>;
  DepositToken(amount: number): Promise<any>;
  withdraw(amount: number, nonce: number, v: string, r: string, s: string): Promise<any>;
}
