import { WithdrawDto } from "./dto/withdraw.dto";
import { TOKENS } from "altcoin-ethereum-wallet";
export { TOKENS, TokenFactory, ERC20, EthEngine, EthereumWallet, TokenConfig, TokenConfigMain, generateMnemonic, AugurTokenTestnet, AugurTokenMainnet } from "altcoin-ethereum-wallet";
export declare const TokenMapping: {
    [x: string]: TOKENS;
};
/**
 * Reversed map of the tokens with contract address as value
 * @returns {{}}
 * @constructor
 */
export declare const TokenMappingReverse: () => {};
export declare class LightClient {
    private GCI;
    private options;
    private privKey;
    private ethConfig;
    private state;
    private acc;
    private eng;
    private ulotion;
    private keystore;
    constructor(GCI: string, options: any, privKey: any, ethConfig?: any);
    /**
     * Authenticate user
     * @param {string} privKey
     */
    authenticate(privKey: string): void;
    /**
     * Recover account and sign order
     * @param pkey
     * @param order
     * @returns {any}
     */
    recoverAccountAndSignOrder(pkey: any, order: any): any;
    /**
     * Sign withdraw request and send to the tendermint
     * @param pkey
     * @param {string} token
     * @param {number} amount
     * @returns {WithdrawDto}
     */
    recoverAccountAndSignWithdraw(pkey: any, token: string, amount: number): WithdrawDto;
    /**
     * Get lastest state from node
     * @returns {Promise<any>}
     */
    refreshState(path?: string): Promise<any>;
    /**
     * Send transaction to node
     * @param data
     * @returns {Promise<any>}
     */
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
    getActiveOrders(all?: boolean, sellToken?: TOKENS, buyToken?: TOKENS): Promise<any>;
    /**
     * Withdraw token
     * @param {TOKENS} withdrawToken
     * @param amount
     * @returns {Promise<void>}
     */
    withdraw(withdrawToken: TOKENS, amount: number): Promise<any>;
}
