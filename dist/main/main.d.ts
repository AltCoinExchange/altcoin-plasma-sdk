import { WithdrawDto } from "./dto/withdraw.dto";
import { TOKENS } from "altcoin-ethereum-wallet";
export declare class LightClient {
    private GCI;
    private options;
    private privKey;
    private state;
    private acc;
    private eng;
    private keystore;
    constructor(GCI: string, options: any, privKey: any);
    /**
     * Authenticate user
     * @param {string} privKey
     */
    authenticate(privKey: string): void;
    /**
     * Recover account and sign message
     * @param pkey
     * @param order
     * @returns {any}
     */
    recoverAccountAndSignMessage(pkey: any, order: any): any;
    /**
     * Get lastest state from node
     * @returns {Promise<any>}
     */
    refreshState(path?: string): Promise<any>;
    private send(data);
    /**
     * Deposit token
     * @param {TOKENS} token
     * @param {number} amount
     * @returns {Promise<any>}
     */
    deposit(token: TOKENS, amount: number): Promise<any>;
    /**
     * Make order
     * @param {TOKENS} sellToken
     * @param {TOKENS} buyToken
     * @param {number} sellAmount
     * @param {number} buyAmount
     * @returns {Promise<any>}
     */
    make(sellToken: TOKENS, buyToken: TOKENS, sellAmount: number, buyAmount: number): Promise<any>;
    /**
     * Get active orders for this account
     * @returns {Promise<any>}
     */
    getActiveOrders(): Promise<any>;
    /**
     * Withdraw
     * @param {WithdrawDto} data
     * @returns {Promise<any>}
     */
    withdraw(data: WithdrawDto): Promise<void>;
}
