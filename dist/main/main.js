"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var ethereum_account_1 = require("./eth/ethereum-account");
var ulotion_1 = require("./services/ulotion");
var altcoin_ethereum_wallet_1 = require("altcoin-ethereum-wallet");
var main_config_1 = require("./config/main.config");
var state_helper_1 = require("./common/state-helper");
// Export wallet
var altcoin_ethereum_wallet_2 = require("altcoin-ethereum-wallet");
exports.TOKENS = altcoin_ethereum_wallet_2.TOKENS;
exports.TokenFactory = altcoin_ethereum_wallet_2.TokenFactory;
exports.ERC20 = altcoin_ethereum_wallet_2.ERC20;
exports.EthEngine = altcoin_ethereum_wallet_2.EthEngine;
exports.EthereumWallet = altcoin_ethereum_wallet_2.EthereumWallet;
exports.TokenConfig = altcoin_ethereum_wallet_2.TokenConfig;
exports.TokenConfigMain = altcoin_ethereum_wallet_2.TokenConfigMain;
exports.generateMnemonic = altcoin_ethereum_wallet_2.generateMnemonic;
exports.AugurTokenTestnet = altcoin_ethereum_wallet_2.AugurTokenTestnet;
exports.AugurTokenMainnet = altcoin_ethereum_wallet_2.AugurTokenMainnet;
// TODO: Add dynamic tokens for easier adding new ones later
exports.TokenMapping = (_a = {},
    _a[altcoin_ethereum_wallet_1.TokenConfig.Augur.contractAddress.toLowerCase()] = altcoin_ethereum_wallet_1.TOKENS.AUGUR,
    _a[altcoin_ethereum_wallet_1.TokenConfig.Golem.contractAddress.toLowerCase()] = altcoin_ethereum_wallet_1.TOKENS.GOLEM,
    _a[altcoin_ethereum_wallet_1.TokenConfig.Gnosis.contractAddress.toLowerCase()] = altcoin_ethereum_wallet_1.TOKENS.GNOSIS,
    _a[altcoin_ethereum_wallet_1.TokenConfig.Bat.contractAddress.toLowerCase()] = altcoin_ethereum_wallet_1.TOKENS.BAT,
    _a[altcoin_ethereum_wallet_1.TokenConfig.Aragon.contractAddress.toLowerCase()] = altcoin_ethereum_wallet_1.TOKENS.ARAGON,
    _a[altcoin_ethereum_wallet_1.TokenConfig.Eos.contractAddress.toLowerCase()] = altcoin_ethereum_wallet_1.TOKENS.EOS,
    _a[altcoin_ethereum_wallet_1.TokenConfig.Salt.contractAddress.toLowerCase()] = altcoin_ethereum_wallet_1.TOKENS.SALT,
    _a[altcoin_ethereum_wallet_1.TokenConfig.Civic.contractAddress.toLowerCase()] = altcoin_ethereum_wallet_1.TOKENS.CIVIC,
    _a[altcoin_ethereum_wallet_1.TokenConfig.OmiseGo.contractAddress.toLowerCase()] = altcoin_ethereum_wallet_1.TOKENS.OMISEGO,
    _a[altcoin_ethereum_wallet_1.TokenConfig.District0x.contractAddress.toLowerCase()] = altcoin_ethereum_wallet_1.TOKENS.DISTRICT0X,
    _a[altcoin_ethereum_wallet_1.TokenConfig.StatusNetwork.contractAddress.toLowerCase()] = altcoin_ethereum_wallet_1.TOKENS.STATUSNETWORK,
    _a[altcoin_ethereum_wallet_1.TokenConfig.Substratum.contractAddress.toLowerCase()] = altcoin_ethereum_wallet_1.TOKENS.SUBSTRATUM,
    _a[altcoin_ethereum_wallet_1.TokenConfig.Tron.contractAddress.toLowerCase()] = altcoin_ethereum_wallet_1.TOKENS.TRON,
    _a[altcoin_ethereum_wallet_1.TokenConfig.Bytom.contractAddress.toLowerCase()] = altcoin_ethereum_wallet_1.TOKENS.BYTOM,
    _a[altcoin_ethereum_wallet_1.TokenConfig.Dent.contractAddress.toLowerCase()] = altcoin_ethereum_wallet_1.TOKENS.DENT,
    _a[altcoin_ethereum_wallet_1.TokenConfig.Populous.contractAddress.toLowerCase()] = altcoin_ethereum_wallet_1.TOKENS.POPULOUS,
    _a[altcoin_ethereum_wallet_1.TokenConfig.Maker.contractAddress.toLowerCase()] = altcoin_ethereum_wallet_1.TOKENS.MAKER,
    _a[altcoin_ethereum_wallet_1.TokenConfig.DigixDAO.contractAddress.toLowerCase()] = altcoin_ethereum_wallet_1.TOKENS.DIGIXDAO,
    _a[altcoin_ethereum_wallet_1.TokenConfig.QASH.contractAddress.toLowerCase()] = altcoin_ethereum_wallet_1.TOKENS.QASH,
    _a[altcoin_ethereum_wallet_1.TokenConfig.Ethos.contractAddress.toLowerCase()] = altcoin_ethereum_wallet_1.TOKENS.ETHOS,
    _a[altcoin_ethereum_wallet_1.TokenConfig.FunFair.contractAddress.toLowerCase()] = altcoin_ethereum_wallet_1.TOKENS.FUNFAIR,
    _a[altcoin_ethereum_wallet_1.TokenConfig.RequestNetwork.contractAddress.toLowerCase()] = altcoin_ethereum_wallet_1.TOKENS.REQUESTNETWORK,
    _a[altcoin_ethereum_wallet_1.TokenConfig.Bancor.contractAddress.toLowerCase()] = altcoin_ethereum_wallet_1.TOKENS.BANCOR,
    _a[altcoin_ethereum_wallet_1.TokenConfig.Iconomi.contractAddress.toLowerCase()] = altcoin_ethereum_wallet_1.TOKENS.ICONOMI,
    _a[altcoin_ethereum_wallet_1.TokenConfig.TenXPay.contractAddress.toLowerCase()] = altcoin_ethereum_wallet_1.TOKENS.TENXPAY,
    _a[altcoin_ethereum_wallet_1.TokenConfig.Storj.contractAddress.toLowerCase()] = altcoin_ethereum_wallet_1.TOKENS.STORJ,
    _a[altcoin_ethereum_wallet_1.TokenConfig.EnjinCoin.contractAddress.toLowerCase()] = altcoin_ethereum_wallet_1.TOKENS.ENJINCOIN,
    _a[altcoin_ethereum_wallet_1.TokenConfig.WETH.contractAddress.toLowerCase()] = altcoin_ethereum_wallet_1.TOKENS.WETH,
    _a);
/**
 * Reversed map of the tokens with contract address as value
 * @returns {{}}
 * @constructor
 */
exports.TokenMappingReverse = function () {
    var result = {};
    for (var prop in exports.TokenMapping) {
        if (exports.TokenMapping.hasOwnProperty(prop)) {
            result[exports.TokenMapping[prop]] = prop;
        }
    }
    return result;
};
var LightClient = /** @class */ (function () {
    function LightClient(GCI, options, privKey, ethConfig) {
        this.GCI = GCI;
        this.options = options;
        this.privKey = privKey;
        this.ethConfig = ethConfig;
        this.ulotion = new ulotion_1.uLotion(this.GCI, this.options);
        if (!ethConfig) {
            this.ethConfig = main_config_1.App.eth;
        }
    }
    /**
     * Authenticate user
     * @param {string} privKey
     */
    LightClient.prototype.authenticate = function (privKey) {
        this.privKey = privKey;
        this.acc = ethereum_account_1.EthereumAccount.recoverAccount(privKey);
        this.eng = new altcoin_ethereum_wallet_1.EthEngine(null, this.ethConfig, null);
        this.keystore = this.eng.recoverAccount(this.privKey);
        this.eng.login(this.keystore);
    };
    /**
     * Recover account and sign order
     * @param pkey
     * @param order
     * @returns {any}
     */
    LightClient.prototype.recoverAccountAndSignOrder = function (pkey, order) {
        var acc = ethereum_account_1.EthereumAccount.recoverAccount(pkey);
        var signature = acc.signReceiptTendermint(order.payload.sender, order.payload.sellToken, order.payload.buyToken, order.payload.sellAmount, order.payload.buyAmount, order.payload.nonce);
        order.payload["v"] = signature.v;
        order.payload["r"] = signature.r;
        order.payload["s"] = signature.s;
        order.payload["signature"] = signature.signature;
        order.payload["messageHash"] = signature.messageHash;
        return order;
    };
    /**
     * Sign withdraw request and send to the tendermint
     * @param pkey
     * @param {string} token
     * @param {number} amount
     * @returns {WithdrawDto}
     */
    LightClient.prototype.recoverAccountAndSignWithdraw = function (pkey, token, amount) {
        var acc = ethereum_account_1.EthereumAccount.recoverAccount(pkey);
        var wdto = {};
        var signature = acc.signWithdrawTendermint(acc.address, token, amount);
        wdto.v = signature.v;
        wdto.r = signature.r;
        wdto.s = signature.s;
        wdto.signature = signature.signature;
        wdto.messageHash = signature.messageHash;
        wdto.sender = acc.address;
        wdto.token = token;
        wdto.amount = amount.toString();
        return wdto;
    };
    /**
     * Get lastest state from node
     * @returns {Promise<any>}
     */
    LightClient.prototype.refreshState = function (path) {
        if (path === void 0) { path = ''; }
        return __awaiter(this, void 0, void 0, function () {
            var state, acc, balance, acc, balance;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.ulotion.state(path)];
                    case 1:
                        state = _a.sent();
                        if (path === '') {
                            state_helper_1.StateHelper.mapAddressToEnum(state, "volume");
                            for (acc in state.accounts) {
                                if (state.accounts.hasOwnProperty(acc)) {
                                    for (balance in state.accounts[acc].balance) {
                                        state_helper_1.StateHelper.mapAddressToEnum(state.accounts[acc], "balance");
                                    }
                                }
                            }
                        }
                        else if (path === "volume") {
                            state_helper_1.StateHelper.mapAddressToEnum(state);
                        }
                        else if (path === "accounts") {
                            for (acc in state) {
                                if (state.hasOwnProperty(acc)) {
                                    for (balance in state[acc].balance) {
                                        state_helper_1.StateHelper.mapAddressToEnum(state[acc], "balance");
                                    }
                                }
                            }
                        }
                        if (typeof (state) === "string") {
                            state = JSON.parse(state);
                        }
                        return [2 /*return*/, state];
                }
            });
        });
    };
    /**
     * Send transaction to node
     * @param data
     * @returns {Promise<any>}
     */
    LightClient.prototype.send = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.ulotion.send(data)];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    /**
     * Deposit token
     * @param {TOKENS} token
     * @param {number} amount
     * @returns {Promise<any>}
     */
    LightClient.prototype.deposit = function (token, amount) {
        return __awaiter(this, void 0, void 0, function () {
            var tokenContract, approvedResult, result, nonce;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.authenticate(this.privKey);
                        tokenContract = altcoin_ethereum_wallet_1.TokenFactory.GetToken(token, this.eng);
                        return [4 /*yield*/, tokenContract.approve(this.ethConfig.contractAddress, amount)];
                    case 1:
                        approvedResult = _a.sent();
                        return [4 /*yield*/, tokenContract.DepositToken(amount)];
                    case 2:
                        result = _a.sent();
                        return [4 /*yield*/, tokenContract.currentDepositNonce()];
                    case 3:
                        nonce = _a.sent();
                        return [4 /*yield*/, this.send({ action: "deposit", payload: { nonce: nonce } })];
                    case 4: 
                    // Notify side chain about it
                    return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Make order
     * @param {TOKENS} sellToken
     * @param {TOKENS} buyToken
     * @param {number} sellAmount
     * @param {number} buyAmount
     * @returns {Promise<any>}
     */
    LightClient.prototype.make = function (sellToken, buyToken, sellAmount, buyAmount) {
        return __awaiter(this, void 0, void 0, function () {
            var buyTokenObj, sellTokenObj, nonceState, nonce, order, signedOrder;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.authenticate(this.privKey);
                        buyTokenObj = altcoin_ethereum_wallet_1.TokenFactory.GetToken(buyToken, this.eng);
                        sellTokenObj = altcoin_ethereum_wallet_1.TokenFactory.GetToken(sellToken, this.eng);
                        return [4 /*yield*/, this.refreshState()];
                    case 1:
                        nonceState = _a.sent();
                        nonce = null;
                        try {
                            nonce = nonceState.nonce[sellTokenObj.contractAddress.toLowerCase()][this.acc.address.toLowerCase()];
                        }
                        catch (_b) {
                            nonce = 1;
                        }
                        order = {
                            "action": "make",
                            "payload": {
                                "sellToken": sellTokenObj.contractAddress,
                                "buyToken": buyTokenObj.contractAddress,
                                "sellAmount": sellAmount,
                                "buyAmount": buyAmount,
                                "nonce": nonce,
                                "sender": this.acc.address,
                            }
                        };
                        signedOrder = this.recoverAccountAndSignOrder(this.privKey, order);
                        return [2 /*return*/, this.send(signedOrder)];
                }
            });
        });
    };
    /**
     * Get active orders for this account
     * @returns {Promise<any>}
     */
    LightClient.prototype.getActiveOrders = function (all, sellToken, buyToken) {
        if (all === void 0) { all = false; }
        return __awaiter(this, void 0, void 0, function () {
            var address, result, path;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.authenticate(this.privKey);
                        address = this.acc.address.toLowerCase();
                        result = null;
                        path = "orders['" + address + "']";
                        if (all) {
                            path = "$..orders..";
                        }
                        if (!(!sellToken && !buyToken)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.refreshState(path)];
                    case 1:
                        result = _a.sent();
                        if (result && result.length > 0) {
                            result = result[0];
                        }
                        return [3 /*break*/, 8];
                    case 2:
                        if (!(buyToken && sellToken)) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.refreshState(path + "[?(@.buyToken=='" + exports.TokenMappingReverse()[buyToken] + "' %26%26 @.sellToken=='" + exports.TokenMappingReverse()[sellToken] + "')]")];
                    case 3:
                        // OMG Need to escape this at raw format O.o
                        result = _a.sent();
                        return [3 /*break*/, 8];
                    case 4:
                        if (!sellToken) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.refreshState(path + "[?(@.sellToken=='" + exports.TokenMappingReverse()[sellToken] + "')]")];
                    case 5:
                        result = _a.sent();
                        return [3 /*break*/, 8];
                    case 6:
                        if (!buyToken) return [3 /*break*/, 8];
                        return [4 /*yield*/, this.refreshState(path + "[?(@.buyToken=='" + exports.TokenMappingReverse()[buyToken] + "')]")];
                    case 7:
                        result = _a.sent();
                        _a.label = 8;
                    case 8: return [2 /*return*/, result];
                }
            });
        });
    };
    /**
     * Withdraw token
     * @param {TOKENS} withdrawToken
     * @param amount
     * @returns {Promise<void>}
     */
    LightClient.prototype.withdraw = function (withdrawToken, amount) {
        return __awaiter(this, void 0, void 0, function () {
            var tokenContract, withdrawRequest, wRes, withdrawConfirmation;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.authenticate(this.privKey);
                        tokenContract = altcoin_ethereum_wallet_1.TokenFactory.GetToken(withdrawToken, this.eng);
                        withdrawRequest = this.recoverAccountAndSignWithdraw(this.privKey, tokenContract.contractAddress, amount);
                        return [4 /*yield*/, this.refreshState("accounts['" + this.acc.address.toLowerCase() + "'].lastSignedWithdraw")];
                    case 1:
                        wRes = _a.sent();
                        if (wRes && wRes.length > 0) {
                            wRes = wRes[0];
                        }
                        return [4 /*yield*/, tokenContract.withdraw(parseFloat(wRes.amount), wRes.nonce, wRes.v, wRes.r, wRes.s)];
                    case 2:
                        withdrawConfirmation = _a.sent();
                        console.log("Confirmation", withdrawConfirmation);
                        return [2 /*return*/, withdrawConfirmation];
                }
            });
        });
    };
    return LightClient;
}());
exports.LightClient = LightClient;
var _a;
//# sourceMappingURL=main.js.map