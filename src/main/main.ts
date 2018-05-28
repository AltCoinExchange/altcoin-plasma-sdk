import {DepositDto} from "./dto/deposit.dto";
import {WithdrawDto} from "./dto/withdraw.dto";
import {OrderDto} from "./dto/order.dto";
import {EthereumAccount} from "./eth/ethereum-account";
import {uLotion} from "./services/ulotion";
import {EthEngine, TokenFactory, TOKENS} from "altcoin-ethereum-wallet";
import {App} from "./config/main.config";

// Export wallet
export * from "altcoin-ethereum-wallet";

export class LightClient {

  private state: any;
  private acc: EthereumAccount;
  private eng: EthEngine;
  private ulotion: uLotion;
  private keystore: any;

  constructor(private GCI: string, private options, private privKey, private ethConfig?) {
    this.ulotion = new uLotion(this.GCI, this.options);
    if (!ethConfig) {
      this.ethConfig = App.eth;
    }
  }

  /**
   * Authenticate user
   * @param {string} privKey
   */
  public authenticate(privKey: string) {
    this.privKey = privKey;
    this.acc = EthereumAccount.recoverAccount(privKey);
    this.eng = new EthEngine(null, this.ethConfig, null);
    this.keystore = this.eng.recoverAccount(this.privKey);
    this.eng.login(this.keystore);
  }

  /**
   * Recover account and sign message
   * @param pkey
   * @param order
   * @returns {any}
   */
  public recoverAccountAndSignMessage(pkey, order) {
    let acc = EthereumAccount.recoverAccount(pkey);
    const signature = acc.signReceiptTendermint(order.payload.sender,
      order.payload.sellToken,
      order.payload.buyToken,
      order.payload.sellAmount, order.payload.buyAmount, order.payload.nonce);

    order.payload["v"] = signature.v;
    order.payload["r"] = signature.r;
    order.payload["s"] = signature.s;
    order.payload["signature"] = signature.signature;
    order.payload["messageHash"] = signature.messageHash;

    return order;
  }

  /**
   * Get lastest state from node
   * @returns {Promise<any>}
   */
  public async refreshState(path: string = '') {
    const state = await this.ulotion.state(path);
    return state;
  }

  /**
   * Send transaction to node
   * @param data
   * @returns {Promise<any>}
   */
  private async send(data: any) {
    const result = await this.ulotion.send(data);
    return result;
  }

  /**
   * Deposit token
   * @param {TOKENS} token
   * @param {number} amount
   * @returns {Promise<any>}
   */
  public async deposit(token: TOKENS, amount: number) {

    this.authenticate(this.privKey);

    // Get token
    const tokenContract = TokenFactory.GetToken(token, this.eng);

    // TODO: More checks
    // Approve token for spender
    const approvedResult = await tokenContract.approve(this.ethConfig.contractAddress, amount);

    // Deposit token to contract
    const result = await tokenContract.DepositToken(amount);

    // Deposit token to contract
    const nonce = await tokenContract.currentDepositNonce();

    // Notify side chain about it
    // TODO: Fix getting the nonce
    return await this.send({ action: "deposit", payload: {nonce: nonce} });
  }

  /**
   * Make order
   * @param {TOKENS} sellToken
   * @param {TOKENS} buyToken
   * @param {number} sellAmount
   * @param {number} buyAmount
   * @returns {Promise<any>}
   */
  public async make(sellToken: TOKENS, buyToken: TOKENS, sellAmount: number, buyAmount: number) {

    // Get token
    const buyTokenObj = TokenFactory.GetToken(buyToken, this.eng);
    const sellTokenObj = TokenFactory.GetToken(sellToken, this.eng);

    const order = {
      "action" : "make",
      "payload" : {
        "sellToken": sellTokenObj.contractAddress,
        "buyToken": buyTokenObj.contractAddress,
        "sellAmount": sellAmount,
        "buyAmount": buyAmount,
        "nonce": "1", // TODO: Get latest nonce from state
        "sender": this.acc.address,
      }};

    const signedOrder = this.recoverAccountAndSignMessage(this.privKey, order);

    return this.send(signedOrder);
  }

  /**
   * Get active orders for this account
   * @returns {Promise<any>}
   */
  public async getActiveOrders() {
    const result = await this.refreshState(`accounts[${this.acc.address}]`);
    return result;
  }

  /**
   * Withdraw
   * @param {WithdrawDto} data
   * @returns {Promise<any>}
   */
  public async withdraw(data: WithdrawDto) {
    // TODO: add contract call
    //return this.send(data);
  }
}

