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
var altcoin_ethereum_wallet_1 = require("altcoin-ethereum-wallet");
var ethereum_account_1 = require("./eth/ethereum-account");
var main_config_1 = require("./config/main.config");
var connect = require('lotion').connect;
var LightClient = /** @class */ (function () {
    function LightClient(GCI, options, privKey) {
        this.GCI = GCI;
        this.options = options;
        this.privKey = privKey;
        this.authenticate(this.privKey);
    }
    /**
     * Authenticate user
     * @param {string} privKey
     */
    LightClient.prototype.authenticate = function (privKey) {
        this.privKey = privKey;
        this.acc = ethereum_account_1.EthereumAccount.recoverAccount(privKey);
        this.eng = new altcoin_ethereum_wallet_1.EthEngine(null, main_config_1.App.eth, null);
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
            var _a, state, send, stateResult;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, connect(this.GCI, this.options)];
                    case 1:
                        _a = _b.sent(), state = _a.state, send = _a.send;
                        return [4 /*yield*/, state[path]];
                    case 2:
                        stateResult = _b.sent();
                        this.state = stateResult;
                        return [2 /*return*/, stateResult];
                }
            });
        });
    };
    LightClient.prototype.send = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, state, send;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, connect(this.GCI, this.options)];
                    case 1:
                        _a = _b.sent(), state = _a.state, send = _a.send;
                        return [4 /*yield*/, send(data)];
                    case 2: return [2 /*return*/, _b.sent()];
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
            var tokenContract, approvedResult, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        tokenContract = altcoin_ethereum_wallet_1.TokenFactory.GetToken(token, this.eng);
                        return [4 /*yield*/, tokenContract.approve(main_config_1.App.eth.contractAddress, amount)];
                    case 1:
                        approvedResult = _a.sent();
                        return [4 /*yield*/, tokenContract.DepositToken(amount)];
                    case 2:
                        result = _a.sent();
                        return [4 /*yield*/, this.send({ action: "deposit", payload: { nonce: 2 } })];
                    case 3: 
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