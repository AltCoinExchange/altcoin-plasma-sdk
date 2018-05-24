import { IEthAccount } from "./eth-account";
export declare enum EthConfirmation {
    RECEIPT = 0,
    CONFIRMATION = 1,
    STATIC = 2,
}
export declare class EthEngine {
    private abiConfiguration;
    configuration: any;
    private bin;
    protected web3: any;
    private contract;
    private maxThreads;
    private firstBlockNumber;
    constructor(abiConfiguration: any, configuration: any, bin: any);
    isListening(): boolean;
    createAccount(password: any): IEthAccount;
    login(keystore: any): any;
    getBalance(address: any): Promise<number>;
    sendAllEther(privateKey: any, toAddress: any): Promise<any>;
    sendEther(toAddress: any, balance: any): Promise<any>;
    getContractCode(contractAddress: any): Promise<any>;
    callFunction(name: any, params: any, generalParams: any, confirmation?: EthConfirmation, abi?: any, contractAddress?: any): Promise<{}>;
    recoverAccountFromSeed(pkSeed: any): any;
    recoverAccount(pKey: string): any;
    toWei(amount: any, conversion: any): any;
    fromWeiToEther(weiValue: any): any;
    isMethodPayable(name: string, abi: any[]): boolean;
    scanBlockRange(startingBlock?: any, stoppingBlock?: any, callback?: any): Promise<any>;
}
