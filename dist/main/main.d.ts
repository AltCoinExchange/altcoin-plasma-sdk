import { WithdrawDto } from "./dto/withdraw.dto";
import { TOKENS } from "altcoin-ethereum-wallet";
import { StateMergePatch } from "./common/state-merge-patch";
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
    private ethConfig?;
    private state;
    private states;
    private acc;
    private eng;
    private ulotion;
    private keystore;
    static state: any;
    stateWatcher: StateMergePatch;
    eventFeed: any;
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
    private send;
    /**
     * Faucet for the specific token
     * For testnet only
     * @param {TOKENS} token
     * @returns {Promise<void>}
     */
    faucet(token: TOKENS): Promise<any>;
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
     * @param useLatestState use latest state insead of the sending new one on the blockchain
     * This is used if there is case when withdraw from blockchain is failed due to the gas limit therefore
     * last signed transaction is repeated on the main chain
     * @returns {Promise<void>}
     */
    withdraw(withdrawToken: TOKENS, amount: number, useLatestState?: boolean): Promise<any>;
    /**
     * Subscribe at the event
     * @param {string} path
     * @param func
     * @returns {Promise<() => Promise<any>>}
     */
    subscribe(path: string, func: any): Promise<() => Promise<void>>;
    /**
     * Subscribe at the multiple events
     * @param {string} path
     * @param func
     * @returns {Promise<() => Promise<any>>}
     */
    subscribeMulti(path: string[], func: any): Promise<() => Promise<void>>;
}
