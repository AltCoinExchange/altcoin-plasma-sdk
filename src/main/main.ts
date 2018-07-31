import {DepositDto} from "./dto/deposit.dto";
import {WithdrawDto} from "./dto/withdraw.dto";
import {OrderDto} from "./dto/order.dto";
import {EthereumAccount} from "./eth/ethereum-account";
import {uLotion} from "./services/ulotion";
import {EthEngine, TokenConfig, TokenFactory, TOKENS} from "altcoin-ethereum-wallet";
import {App} from "./config/main.config";
import {AugurTokenTestnet} from "altcoin-ethereum-wallet/dist/src/eth-tokens/augur";
import {IBlockchainState} from "./interfaces";
import {StateHelper} from "./common/state-helper";
import {StateMergePatch} from "./common/state-merge-patch";

// Export wallet
export {
  TOKENS,
  TokenFactory,
  ERC20,
  EthEngine,
  EthereumWallet,
  TokenConfig,
  TokenConfigMain,
  generateMnemonic,
  AugurTokenTestnet,
  AugurTokenMainnet} from "altcoin-ethereum-wallet";

// TODO: Add dynamic tokens for easier adding new ones later
export const TokenMapping = {
  [TokenConfig.Augur.contractAddress.toLowerCase()]: TOKENS.AUGUR,
  [TokenConfig.Golem.contractAddress.toLowerCase()]: TOKENS.GOLEM,
  [TokenConfig.Gnosis.contractAddress.toLowerCase()]: TOKENS.GNOSIS,
  [TokenConfig.Bat.contractAddress.toLowerCase()]: TOKENS.BAT,
  [TokenConfig.Aragon.contractAddress.toLowerCase()]: TOKENS.ARAGON,
  [TokenConfig.Eos.contractAddress.toLowerCase()]: TOKENS.EOS,
  [TokenConfig.Salt.contractAddress.toLowerCase()]: TOKENS.SALT,
  [TokenConfig.Civic.contractAddress.toLowerCase()]: TOKENS.CIVIC,
  [TokenConfig.OmiseGo.contractAddress.toLowerCase()]: TOKENS.OMISEGO,
  [TokenConfig.District0x.contractAddress.toLowerCase()]: TOKENS.DISTRICT0X,
  [TokenConfig.StatusNetwork.contractAddress.toLowerCase()]: TOKENS.STATUSNETWORK,
  [TokenConfig.Substratum.contractAddress.toLowerCase()]: TOKENS.SUBSTRATUM,
  [TokenConfig.Tron.contractAddress.toLowerCase()]: TOKENS.TRON,
  [TokenConfig.Bytom.contractAddress.toLowerCase()]: TOKENS.BYTOM,
  [TokenConfig.Dent.contractAddress.toLowerCase()]: TOKENS.DENT,
  [TokenConfig.Populous.contractAddress.toLowerCase()]: TOKENS.POPULOUS,
  [TokenConfig.Maker.contractAddress.toLowerCase()]: TOKENS.MAKER,
  [TokenConfig.DigixDAO.contractAddress.toLowerCase()]: TOKENS.DIGIXDAO,
  [TokenConfig.QASH.contractAddress.toLowerCase()]: TOKENS.QASH,
  [TokenConfig.Ethos.contractAddress.toLowerCase()]: TOKENS.ETHOS,
  [TokenConfig.FunFair.contractAddress.toLowerCase()]: TOKENS.FUNFAIR,
  [TokenConfig.RequestNetwork.contractAddress.toLowerCase()]: TOKENS.REQUESTNETWORK,
  [TokenConfig.Bancor.contractAddress.toLowerCase()]: TOKENS.BANCOR,
  [TokenConfig.Iconomi.contractAddress.toLowerCase()]: TOKENS.ICONOMI,
  [TokenConfig.TenXPay.contractAddress.toLowerCase()]: TOKENS.TENXPAY,
  [TokenConfig.Storj.contractAddress.toLowerCase()]: TOKENS.STORJ,
  [TokenConfig.EnjinCoin.contractAddress.toLowerCase()]: TOKENS.ENJINCOIN,
  [TokenConfig.WETH.contractAddress.toLowerCase()]: TOKENS.WETH,
  [TokenConfig.ZeroX.contractAddress.toLowerCase()]: TOKENS.ZEROX,
};

/**
 * Reversed map of the tokens with contract address as value
 * @returns {{}}
 * @constructor
 */
export const TokenMappingReverse = () => {
  const result = {};

  for (let prop in TokenMapping) {
    if(TokenMapping.hasOwnProperty(prop)) {
      result[TokenMapping[prop]] = prop;
    }
  }

  return result;
};

export class LightClient {

  private state: any;
  private acc: EthereumAccount;
  private eng: EthEngine;
  private ulotion: uLotion;
  private keystore: any;
  public static state: any;
  public stateWatcher: StateMergePatch;
  public eventFeed;

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
   * Recover account and sign order
   * @param pkey
   * @param order
   * @returns {any}
   */
  public recoverAccountAndSignOrder(pkey, order) {
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
   * Sign withdraw request and send to the tendermint
   * @param pkey
   * @param {string} token
   * @param {number} amount
   * @returns {WithdrawDto}
   */
  public recoverAccountAndSignWithdraw(pkey, token: string, amount: number): WithdrawDto {
    let acc = EthereumAccount.recoverAccount(pkey);
    const wdto = {} as WithdrawDto;

    const signature = acc.signWithdrawTendermint(acc.address,
      token,
      amount);

    wdto.v = signature.v;
    wdto.r = signature.r;
    wdto.s = signature.s;
    wdto.signature = signature.signature;
    wdto.messageHash = signature.messageHash;
    wdto.sender = acc.address;
    wdto.token = token;
    wdto.amount = amount.toString();

    return wdto;
  }

  /**
   * Get lastest state from node
   * @returns {Promise<any>}
   */
  public async refreshState(path: string = ''): Promise<any> {
    let state = await this.ulotion.state(path) as IBlockchainState;

    if (path === '') {
      StateHelper.mapAddressToEnum(state, "volume");
      for (const acc in state.accounts) {
        if (state.accounts.hasOwnProperty(acc)) {
          for (const balance in state.accounts[acc].balance) {
            StateHelper.mapAddressToEnum(state.accounts[acc], "balance");
          }
        }
      }
    } else if (path === "volume") {
      StateHelper.mapAddressToEnum(state);
    } else if (path === "accounts") {
      for (const acc in state) {
        if (state.hasOwnProperty(acc)) {
          for (const balance in state[acc].balance) {
            StateHelper.mapAddressToEnum(state[acc], "balance");
          }
        }
      }
    }

    if (typeof(state) === "string") {
      state = JSON.parse(state);
    }

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
   * Faucet for the specific token
   * For testnet only
   * @param {TOKENS} token
   * @returns {Promise<void>}
   */
  public async faucet(token: TOKENS) {

    this.authenticate(this.privKey);

    // Get token
    const tokenContract = TokenFactory.GetToken(token, this.eng);

    // Call faucet function
    return await tokenContract.faucet();
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

    // Approve token for spender
    const approvedResult = await tokenContract.approve(this.ethConfig.contractAddress, amount);

    // Deposit token to contract
    const result = await tokenContract.DepositToken(amount);

    // Deposit token to contract
    const nonce = await tokenContract.currentDepositNonce();

    // Notify side chain about it
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

    this.authenticate(this.privKey);

    // Get token
    const buyTokenObj = TokenFactory.GetToken(buyToken, this.eng);
    const sellTokenObj = TokenFactory.GetToken(sellToken, this.eng);

    const nonceState = await this.refreshState();
    let nonce = null;
    try {
      nonce = nonceState.nonce[sellTokenObj.contractAddress.toLowerCase()][this.acc.address.toLowerCase()];
    } catch {
      nonce = 1;
    }

    const order = {
      "action" : "make",
      "payload" : {
        "sellToken": sellTokenObj.contractAddress,
        "buyToken": buyTokenObj.contractAddress,
        "sellAmount": sellAmount,
        "buyAmount": buyAmount,
        "nonce": nonce,
        "sender": this.acc.address,
      }};

    const signedOrder = this.recoverAccountAndSignOrder(this.privKey, order);

    return await this.send(signedOrder);
  }

  /**
   * Get active orders for this account
   * @returns {Promise<any>}
   */
  public async getActiveOrders(all: boolean = false, sellToken?: TOKENS, buyToken?: TOKENS) {
    this.authenticate(this.privKey);
    const address = this.acc.address.toLowerCase();
    let result = null;
    let path = `orders['${address}']`;

    if (all && (sellToken || buyToken)) {
      path = "$..orders..";
    } else if (all) {
      path = "$..orders"
    }

    if (!sellToken && !buyToken) {
      result = await this.refreshState(path);
      if (result && result.length > 0) {
        result = result[0];
      }
    } else if (buyToken && sellToken) {
      // OMG Need to escape this at raw format O.o
      result = await this.refreshState(`${path}[?(@.buyToken=='${TokenMappingReverse()[buyToken]}' %26%26 @.sellToken=='${TokenMappingReverse()[sellToken]}')]`);
    } else if (sellToken) {
      result = await this.refreshState(`${path}[?(@.sellToken=='${TokenMappingReverse()[sellToken]}')]`);
    } else if (buyToken) {
      result = await this.refreshState(`${path}[?(@.buyToken=='${TokenMappingReverse()[buyToken]}')]`);
    }

    return result;
  }

  /**
   * Withdraw token
   * @param {TOKENS} withdrawToken
   * @param amount
   * @param useLatestState use latest state insead of the sending new one on the blockchain
   * This is used if there is case when withdraw from blockchain is failed due to the gas limit therefore
   * last signed transaction is repeated on the main chain
   * @returns {Promise<void>}
   */
  public async withdraw(withdrawToken: TOKENS, amount: number, useLatestState: boolean = false) {

    this.authenticate(this.privKey);

    // Get token
    const tokenContract = TokenFactory.GetToken(withdrawToken, this.eng);
    const withdrawRequest = this.recoverAccountAndSignWithdraw(this.privKey, tokenContract.contractAddress, amount);

    // Notify side chain about it
    if (!useLatestState) {
      const wConf = await this.send({action: "withdraw", payload: withdrawRequest});
    }

    // Get state from blockchain
    let wRes = await this.refreshState(`accounts['${this.acc.address.toLowerCase()}'].lastSignedWithdraw`);
    if (wRes && wRes.length > 0) {
      wRes = wRes[0];
    }

    // Withdraw token to account
    const withdrawConfirmation = await tokenContract.withdraw(wRes.sender, wRes.amount, wRes.nonce, wRes.v, wRes.r, wRes.s);

    console.log("Confirmation", withdrawConfirmation);
    return withdrawConfirmation;
  }

  /**
   * Subscribe at the event handler
   * @param {string} path
   * @param func
   * @returns {Promise<() => Promise<any>>}
   */
  public async subscribe(path: string, func) {

    const state = await this.refreshState(path);
    this.stateWatcher = new StateMergePatch(state, path);

    const that = this;
    const evtHandler = async () => {
      const result = await that.stateWatcher.diff(that);
      func(result);
      return result;
    };

    const evt = await this.ulotion.subscribeTx(evtHandler);

    return evtHandler;
  }
}

