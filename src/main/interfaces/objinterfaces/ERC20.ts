import { EthEngine } from "./eth-engine";
export declare class ERC20 {
  ethEngine: EthEngine;
  contractAddress: string;
  constructor(contractAddress: string, ethEngine: EthEngine);
  totalSupply(): number;
  balanceOf(owner: string): Promise<any>;
  transfer(to: string, value: number): Promise<any>;
  transferFrom(from: string, to: string, value: number): Promise<any>;
  approve(spender: string, value: number): Promise<any>;
  allowance(owner: string, spender: string): Promise<any>;
  faucet(): Promise<any>;
}
