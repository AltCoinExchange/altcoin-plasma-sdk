import { IEthAccount } from "./eth-account";
import { EthEngine } from "./eth-engine";
export declare class EthereumWallet {
    walletAddress: string;
    engine: EthEngine;
    private abiConfiguration;
    private appConfiguration;
    private bin;
    constructor();
    getAddress(): string;
    login(keystore: any): any;
    create(password: any): IEthAccount;
    recover(privateKey?: any): any;
    recoverAccountFromSeed(pkSeed: any): any;
    generateMnemonic(): any;
    mnemonicToSeed(mnemonic: any): any;
    getbalance(address: any): Promise<number>;
    sendAllEther(privateKey: any, toAddress: any): Promise<any>;
    isWebSocketAlive(): boolean;
}
