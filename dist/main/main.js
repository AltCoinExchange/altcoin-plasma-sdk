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
// Export wallet
var altcoin_ethereum_wallet_2 = require("altcoin-ethereum-wallet");
exports.TOKENS = altcoin_ethereum_wallet_2.TOKENS;
exports.TokenFactory = altcoin_ethereum_wallet_2.TokenFactory;
exports.ERC20 = altcoin_ethereum_wallet_2.ERC20;
exports.EthEngine = altcoin_ethereum_wallet_2.EthEngine;
exports.EthereumWallet = altcoin_ethereum_wallet_2.EthereumWallet;
exports.generateMnemonic = altcoin_ethereum_wallet_2.generateMnemonic;
exports.AugurTokenTestnet = altcoin_ethereum_wallet_2.AugurTokenTestnet;
exports.AugurTokenMainnet = altcoin_ethereum_wallet_2.AugurTokenMainnet;
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
     * Recover account and sign message
     * @param pkey
     * @param order
     * @returns {any}
     */
    LightClient.prototype.recoverAccountAndSignMessage = function (pkey, order) {
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
     * Get lastest state from node
     * @returns {Promise<any>}
     */
    LightClient.prototype.refreshState = function (path) {
        if (path === void 0) { path = ''; }
        return __awaiter(this, void 0, void 0, function () {
            var state;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.ulotion.state(path)];
                    case 1:
                        state = _a.sent();
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
                    // TODO: Fix getting the nonce
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
            var buyTokenObj, sellTokenObj, order, signedOrder;
            return __generator(this, function (_a) {
                buyTokenObj = altcoin_ethereum_wallet_1.TokenFactory.GetToken(buyToken, this.eng);
                sellTokenObj = altcoin_ethereum_wallet_1.TokenFactory.GetToken(sellToken, this.eng);
                order = {
                    "action": "make",
                    "payload": {
                        "sellToken": sellTokenObj.contractAddress,
                        "buyToken": buyTokenObj.contractAddress,
                        "sellAmount": sellAmount,
                        "buyAmount": buyAmount,
                        "nonce": "1",
                        "sender": this.acc.address,
                    }
                };
                signedOrder = this.recoverAccountAndSignMessage(this.privKey, order);
                return [2 /*return*/, this.send(signedOrder)];
            });
        });
    };
    /**
     * Get active orders for this account
     * @returns {Promise<any>}
     */
    LightClient.prototype.getActiveOrders = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.refreshState("accounts[" + this.acc.address + "]")];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    /**
     * Withdraw
     * @param {WithdrawDto} data
     * @returns {Promise<any>}
     */
    LightClient.prototype.withdraw = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    return LightClient;
}());
exports.LightClient = LightClient;
//# sourceMappingURL=main.js.map