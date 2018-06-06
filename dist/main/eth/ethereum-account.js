"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Account = require("eth-lib/lib/account");
var Hash = require("eth-lib/lib/hash");
var Web3Utils = require("web3-utils");
var HDKey = require("hdkey");
var EthereumAccount = /** @class */ (function () {
    function EthereumAccount(account) {
        this.account = account;
    }
    Object.defineProperty(EthereumAccount.prototype, "privateKey", {
        get: function () {
            return this.account.privateKey;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EthereumAccount.prototype, "address", {
        get: function () {
            return this.account.address;
        },
        enumerable: true,
        configurable: true
    });
    EthereumAccount.recoverAccountFromSeed = function (seed) {
        var hdkey = new HDKey.fromMasterSeed(seed);
        var hdnode = hdkey.derive("m/44'/60'/0'/0/0");
        var privateKey = hdnode._privateKey.toString("hex");
        var accounts = Account.accounts;
        var acc = accounts.privateKeyToAccount("0x" + privateKey);
        return acc;
    };
    EthereumAccount.recoverAccount = function (pk) {
        return new EthereumAccount(Account.fromPrivate("0x" + pk));
    };
    EthereumAccount.prototype.signReceiptTendermint = function (sender, sellToken, buyToken, sellAmount, buyAmount, nonce) {
        var data = sender + sellToken + buyToken + this.hexValue(sellAmount) + this.hexValue(buyAmount) + this.hexValue(nonce);
        var hash = this.hashMessage(data);
        return this.signHash(data, hash);
    };
    EthereumAccount.prototype.signWithdrawTendermint = function (sender, token, amount) {
        var data = sender + token + this.hexValue(amount);
        var hash = this.hashMessage(data);
        return this.signHash(data, hash);
    };
    EthereumAccount.prototype.signReceipt = function (contractAddress, value, ticketNumber) {
        if (typeof value !== "string") {
            throw new Error("value must be string");
        }
        var data = contractAddress + this.hexValue(value) + this.hexValue(ticketNumber);
        return this.sign(data);
    };
    EthereumAccount.prototype.hexValue = function (val) {
        return Web3Utils.asciiToHex(val).replace("0x", "");
    };
    EthereumAccount.prototype.signHash = function (data, hash) {
        var signature = Account.sign(hash, this.privateKey);
        var vrs = Account.decodeSignature(signature);
        return {
            message: data,
            messageHash: hash,
            v: vrs[0],
            r: vrs[1],
            s: vrs[2],
            signature: signature
        };
    };
    ;
    EthereumAccount.prototype.sign = function (data) {
        var hash = this.hashMessage(data);
        var signature = Account.sign(hash, this.privateKey);
        var vrs = Account.decodeSignature(signature);
        return {
            message: data,
            messageHash: hash,
            v: vrs[0],
            r: vrs[1],
            s: vrs[2],
            signature: signature
        };
    };
    ;
    EthereumAccount.prototype.hashMessage = function (data) {
        return Hash.keccak256s(data);
    };
    ;
    return EthereumAccount;
}());
exports.EthereumAccount = EthereumAccount;
//# sourceMappingURL=ethereum-account.js.map