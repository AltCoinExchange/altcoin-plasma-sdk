import {DepositDto} from "./dto/deposit.dto";
import {WithdrawDto} from "./dto/withdraw.dto";
import {OrderDto} from "./dto/order.dto";
import {EthEngine, EthereumWallet, TokenFactory, TOKENS} from "altcoin-ethereum-wallet";
import {EthereumAccount} from "./eth/ethereum-account";
import {App} from "./config/main.config";
import {DEX} from "altcoin-ethereum-wallet/dist/src/eth/tokens/dex";

const { connect } = require('lotion');

export class LightClient {

  private state: any;
  private acc: EthereumAccount;
  private eng: EthEngine;
  private keystore: any;

  constructor(private GCI: string, private options, private privKey) {
    this.acc = EthereumAccount.recoverAccount(privKey);
    this.eng = new EthEngine(null, App.eth, null);
    this.keystore = this.eng.recoverAccount(this.privKey);
    this.eng.login(this.keystore);
  }

  /**
   * Get lastest state from node
   * @returns {Promise<any>}
   */
  public async refreshState(path: string = '') {
    const { state, send } = await connect(this.GCI, this.options);
    const stateResult = await state[path];
    this.state = stateResult;
    return stateResult;
  }

  private async send(data: any) {
    const { state, send } = await connect(this.GCI, this.options);
    return await send(data);
  }

  /**
   * Deposit token
   * @param {TOKENS} token
   * @param {number} amount
   * @returns {Promise<any>}
   */
  public async deposit(token: TOKENS, amount: number) {

    // Get token
    const tokenContract = TokenFactory.GetToken(token, this.eng);

    // TODO: More checks
    // Approve token for spender
    const approvedResult = await tokenContract.approve(App.eth.contractAddress, amount);

    // Deposit token to contract
    const result = await tokenContract.DepositToken(amount);

    // Notify side chain about it
    return this.send({nonce: result} as DepositDto);
  }

  /**
   * Make order
   * @param {OrderDto} data
   * @returns {Promise<void>}
   */
  public async make(sellToken: TOKENS, buyToken: TOKENS, sellAmount: number, buyAmount: number) {

    // TODO: Get latest nonce from state
    // Get token
    const buyTokenObj = TokenFactory.GetToken(buyToken, this.eng);
    const sellTokenObj = TokenFactory.GetToken(sellToken, this.eng);

    const data = this.acc.signReceiptTendermint(this.acc.address, sellTokenObj.contractAddress, buyTokenObj.contractAddress, sellAmount, buyAmount, 1);

    return this.send(data);
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

