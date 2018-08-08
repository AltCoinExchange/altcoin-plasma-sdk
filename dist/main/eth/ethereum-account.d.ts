export interface RawAccount {
    privateKey: string;
    address: string;
}
export declare class EthereumAccount {
    private account;
    constructor(account: RawAccount);
    readonly privateKey: string;
    readonly address: string;
    /**
     * Recover account from seed
     * @param {string} seed
     * @returns {EthereumAccount}
     */
    static recoverAccountFromSeed(seed: string): EthereumAccount;
    /**
     * Recover account from private key
     * @param {string} pk
     * @returns {EthereumAccount}
     */
    static recoverAccount(pk: string): EthereumAccount;
    /**
     * Sign receipt
     * @param sender
     * @param sellToken
     * @param buyToken
     * @param sellAmount
     * @param buyAmount
     * @param nonce
     * @returns {{message: any; messageHash: any; v: any; r: any; s: any; signature: any}}
     */
    signReceiptTendermint(sender: any, sellToken: any, buyToken: any, sellAmount: any, buyAmount: any, nonce: any): {
        message: any;
        messageHash: any;
        v: any;
        r: any;
        s: any;
        signature: any;
    };
    /**
     * Sign withdraw
     * @param sender
     * @param token
     * @param amount
     * @returns {{message: any; messageHash: any; v: any; r: any; s: any; signature: any}}
     */
    signWithdrawTendermint(sender: any, token: any, amount: any): {
        message: any;
        messageHash: any;
        v: any;
        r: any;
        s: any;
        signature: any;
    };
    /**
     * Sign receipt by parameters
     * @param contractAddress
     * @param value
     * @param ticketNumber
     * @returns {{message: any; messageHash: any; v: any; r: any; s: any; signature: any}}
     */
    signReceipt(contractAddress: any, value: any, ticketNumber: any): {
        message: any;
        messageHash: any;
        v: any;
        r: any;
        s: any;
        signature: any;
    };
    /**
     * To hex
     * @param val
     * @returns {string}
     */
    hexValue(val: any): any;
    /**
     * Sign hash
     * @param data
     * @param hash
     * @returns {{message: any; messageHash: any; v: any; r: any; s: any; signature: any}}
     */
    signHash(data: any, hash: any): {
        message: any;
        messageHash: any;
        v: any;
        r: any;
        s: any;
        signature: any;
    };
    /**
     * Sign data
     * @param data
     * @returns {{message: any; messageHash: any; v: any; r: any; s: any; signature: any}}
     */
    sign(data: any): {
        message: any;
        messageHash: any;
        v: any;
        r: any;
        s: any;
        signature: any;
    };
    /**
     * Hash message
     * @param {string} data
     * @returns {any}
     */
    hashMessage(data: string): any;
}
