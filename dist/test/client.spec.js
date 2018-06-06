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
var chai_1 = require("chai");
var main_1 = require("../main/main");
var altcoin_ethereum_wallet_1 = require("altcoin-ethereum-wallet");
describe('client test', function () {
    it('connect', function () {
        return __awaiter(this, void 0, void 0, function () {
            var peer2, peer1, lightClient, state, result, state2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.timeout(160000);
                        peer2 = "b37095b01e624caef9b253eeb3f1f7dc80885c9fd4d31ea20586f2dd911b51ae";
                        peer1 = "0fc067498cdbb1d8f102035cc4160469fb098c7c7fdfd0801fc6e681a982257b";
                        lightClient = new main_1.LightClient(null, {
                            lite: true,
                            liteTimeout: 10000,
                            tendermintPort: 46657,
                            nodes: ["http://localhost:46657"],
                            genesis: {
                                "genesis_time": "0001-01-01T00:00:00Z",
                                "chain_id": "test-chain-MOamgH",
                                "validators": [
                                    { "address": "E26BBB8EFEAD2738EEC642F1BC0C60D750B30608", "pub_key": { "type": "AC26791624DE60", "value": "M7C9qN0VmfELcqhjS0vpOe7Xb2VzVAF58rzrwWnW5qg=" }, "power": 10, "name": "" }
                                ],
                                "app_hash": ""
                            }
                        }, "3be65d9ccb1850ee6bbb90adfa3fcb9f3cffb590c81859f550ab83b66b4b7aa2");
                        return [4 /*yield*/, lightClient.refreshState()];
                    case 1:
                        state = _a.sent();
                        console.log(JSON.stringify(state));
                        return [4 /*yield*/, lightClient.make(altcoin_ethereum_wallet_1.TOKENS.AUGUR, altcoin_ethereum_wallet_1.TOKENS.GOLEM, 1, 1)];
                    case 2:
                        result = _a.sent();
                        return [4 /*yield*/, lightClient.refreshState()];
                    case 3:
                        state2 = _a.sent();
                        console.log(state2);
                        chai_1.expect(true).to.be.true;
                        return [2 /*return*/];
                }
            });
        });
    });
    it('connect to peer1', function () {
        return __awaiter(this, void 0, void 0, function () {
            var peer2, peer1, lightClient, state, state2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.timeout(160000);
                        peer2 = "b37095b01e624caef9b253eeb3f1f7dc80885c9fd4d31ea20586f2dd911b51ae";
                        peer1 = "0fc067498cdbb1d8f102035cc4160469fb098c7c7fdfd0801fc6e681a982257b";
                        lightClient = new main_1.LightClient(null, {
                            lite: true,
                            liteTimeout: 10000,
                            tendermintPort: 36657,
                            nodes: ["http://localhost:36657"],
                            genesis: {
                                "genesis_time": "0001-01-01T00:00:00Z",
                                "chain_id": "test-chain-RGUYTp",
                                "validators": [{ "pub_key": { "type": "AC26791624DE60", "value": "Vk16+GsTAhIjMWkqGk4PzdBplBLrLQrFIj8Q4ipDZow=" }, "power": 10, "name": "" }], "app_hash": ""
                            }
                        }, "2b529f5b279ce59fd20f1c46908266b664939bc51f2d9a6e6f5cdcbf02ae17cd");
                        return [4 /*yield*/, lightClient.refreshState()];
                    case 1:
                        state = _a.sent();
                        console.log(JSON.stringify(state));
                        return [4 /*yield*/, lightClient.refreshState('volume')];
                    case 2:
                        state2 = _a.sent();
                        console.log(state2);
                        chai_1.expect(true).to.be.true;
                        return [2 /*return*/];
                }
            });
        });
    });
});
//# sourceMappingURL=client.spec.js.map