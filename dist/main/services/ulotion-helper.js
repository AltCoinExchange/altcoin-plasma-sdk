"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var crypto_browserify_1 = require("crypto-browserify");
var stableStringify = require('json-stable-stringify');
// const IPFS = require('ipfs');
// const OrbitDB = require('orbit-db');
// const discoveryChannel = require('discovery-channel');
// const net = require('net');
// const defaults = require('dat-swarm-defaults')();
var signalhub = require('signalhub');
var swarm = require('webrtc-swarm');
var vstruct = require('varstruct');
var TxStruct = vstruct([
    { name: 'data', type: vstruct.VarString(vstruct.UInt32BE) },
    { name: 'nonce', type: vstruct.UInt32BE },
]);
var base64Prefix = ':base64:';
var ulotionHelper = /** @class */ (function () {
    function ulotionHelper() {
    }
    ulotionHelper.convertBase64ToBuffers = function (obj) {
        return ulotionHelper.replace(obj, ulotionHelper.bufferToBase64Replacer);
    };
    ulotionHelper.base64ToBufferReplacer = function (value) {
        if (typeof value !== 'string')
            return value;
        if (!value.startsWith(base64Prefix))
            return value;
        return Buffer.from(value.slice(base64Prefix.length), 'base64');
    };
    /**
     * Encode transaction
     * @param txData
     * @param nonce
     * @returns {any}
     */
    ulotionHelper.encode = function (txData, nonce) {
        var data = ulotionHelper.stringify(txData);
        var bytes = TxStruct.encode({ nonce: nonce, data: data });
        return bytes;
    };
    ulotionHelper.fetchGenesis = function (GCI) {
        return new Promise(function (resolve, reject) {
            var hub = signalhub(GCI, ['https://swap.altcoin.io:9091']);
            var sw;
            // Check for environment
            if (typeof process === 'object' && process + '' === '[object process]') {
                sw = swarm(hub, { wrtc: require('wrtc') });
            }
            else {
                sw = swarm(hub, {});
            }
            sw.on('peer', function (peer, id) {
                peer.on('data', function (data) {
                    // full node writing to tell me what port to use for their tendermint rpc server
                    var port = Number(data.toString());
                    if (port > 100 && port < 65536) {
                        peer.destroy();
                        resolve({ peer: { host: peer.remoteAddress, port: port } });
                    }
                });
            });
        });
    };
    /**
     * Parse string
     * @param json
     */
    ulotionHelper.parse = function (json) {
        var obj = JSON.parse(json);
        return ulotionHelper.convertBase64ToBuffers(obj);
    };
    /**
     * Get hash data from genesis
     * @param genesis
     */
    ulotionHelper.getGCIFromGenesis = function (genesis) {
        var hash = crypto_browserify_1.createHash('sha256');
        // TODO: Check for genesisTime if needs to be hashed to get correct GCI
        var genesisJson = ulotionHelper.parse(genesis);
        genesisJson.genesis_time = "";
        var genesisStr = ulotionHelper.stringify(genesisJson);
        return hash.update(genesisStr, 'utf8').digest().toString('hex');
    };
    /**
     * Clones an object
     * @param obj
     * @param replacer
     * @returns {{}}
     */
    ulotionHelper.deepClone = function (obj, replacer) {
        var newObj = Array.isArray(obj) ? [] : {};
        Object.assign(newObj, obj);
        for (var key in newObj) {
            newObj[key] = replacer(newObj[key]);
            if (typeof newObj[key] === 'object') {
                newObj[key] = this.deepClone(newObj[key], replacer);
            }
        }
        return newObj;
    };
    /**
     * Replaces values in an object without cloning
     * @param obj
     * @param replacer
     * @returns {any}
     */
    ulotionHelper.replace = function (obj, replacer) {
        for (var key in obj) {
            obj[key] = replacer(obj[key]);
            if (typeof obj[key] === 'object' && !Buffer.isBuffer(obj[key])) {
                // recursively replace props of objects (unless it's a Buffer)
                ulotionHelper.replace(obj[key], replacer);
            }
        }
        return obj;
    };
    /**
     * Stringify obj
     * @param obj
     * @returns {any}
     */
    ulotionHelper.stringify = function (obj) {
        var convertedObj = ulotionHelper.deepClone(obj, ulotionHelper.bufferToBase64Replacer);
        return stableStringify(convertedObj);
    };
    /**
     * Replace buffer to base64
     * @param value
     * @returns {any}
     */
    ulotionHelper.bufferToBase64Replacer = function (value) {
        if (typeof value === 'object' &&
            value != null &&
            value.type === 'Buffer' &&
            Array.isArray(value.data)) {
            value = Buffer.from(value);
        }
        if (!Buffer.isBuffer(value))
            return value;
        return "" + base64Prefix + value.toString('base64');
    };
    return ulotionHelper;
}());
exports.ulotionHelper = ulotionHelper;
//# sourceMappingURL=ulotion-helper.js.map