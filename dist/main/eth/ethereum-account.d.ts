export interface RawAccount {
    privateKey: string;
    address: string;
}
export declare class EthereumAccount {
    private account;
    constructor(account: RawAccount);
    readonly privateKey: string;
    readonly address: string;
    static recoverAccountFromSeed(seed: string): EthereumAccount;
    static recoverAccount(pk: string): EthereumAccount;
    signReceiptTendermint(sender: any, sellToken: any, buyToken: any, sellAmount: any, buyAmount: any, nonce: any): {
        message: any;
        messageHash: any;
        v: any;
        r: any;
        s: any;
        signature: any;
    };
    signWithdrawTendermint(sender: any, token: any, amount: any): {
        message: any;
        messageHash: any;
        v: any;
        r: any;
        s: any;
        signature: any;
    };
    signReceipt(contractAddress: any, value: any, ticketNumber: any): {
        message: any;
        messageHash: any;
        v: any;
        r: any;
        s: any;
        signature: any;
    };
    hexValue(val: any): any;
    signHash(data: any, hash: any): {
        message: any;
        messageHash: any;
        v: any;
        r: any;
        s: any;
        signature: any;
    };
    sign(data: any): {
        message: any;
        messageHash: any;
        v: any;
        r: any;
        s: any;
        signature: any;
    };
    hashMessage(data: string): any;
}
