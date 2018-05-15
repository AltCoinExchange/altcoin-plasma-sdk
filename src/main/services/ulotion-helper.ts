import { createHash } from "crypto-browserify";
const stableStringify = require('json-stable-stringify');
// const discoveryChannel = require('discovery-channel');
// let net = require('net');
// const defaults = require('dat-swarm-defaults')();
const vstruct = require('varstruct');

let TxStruct = vstruct([
  { name: 'data', type: vstruct.VarString(vstruct.UInt32BE) },
  { name: 'nonce', type: vstruct.UInt32BE },
]);

const base64Prefix = ':base64:';

export class ulotionHelper {

  private static convertBase64ToBuffers(obj) {
    return ulotionHelper.replace(obj, ulotionHelper.bufferToBase64Replacer);
  }

  private static base64ToBufferReplacer(value) {
    if (typeof value !== 'string') return value;
    if (!value.startsWith(base64Prefix)) return value;
    return Buffer.from(value.slice(base64Prefix.length), 'base64');
  }

  /**
   * Encode transaction
   * @param txData
   * @param nonce
   * @returns {any}
   */
  public static encode(txData, nonce) {
    let data = ulotionHelper.stringify(txData);
    let bytes = TxStruct.encode({ nonce, data });
    return bytes;
  }

  // public static fetchGenesis(GCI): Promise<any> {
  //   return new Promise(async (resolve, reject) => {
  //     let dc = discoveryChannel(defaults);
  //     dc.on('peer', (id, peer) => {
  //       let socket = net.connect(peer.port, peer.host)
  //       let data = '';
  //       socket.on('data', function(chunk) {
  //         data += chunk.toString()
  //       });
  //       socket.on('end', function() {
  //         // validate the data this peer told us about
  //         if (ulotionHelper.getGCIFromGenesis(data) === GCI) {
  //           resolve({ id, peer, data });
  //         }
  //       });
  //       socket.on('error', e => {
  //         socket.destroy();
  //       })
  //     });
  //
  //     dc.join(GCI)
  //   })
  // }
  //
  // private static parse(json) {
  //   let obj = JSON.parse(json);
  //   return ulotionHelper.convertBase64ToBuffers(obj);
  // }
  //
  // private static getGCIFromGenesis(genesis) {
  //   let hash = createHash('sha256');
  //   // TODO: Check for genesisTime if needs to be hashed to get correct GCI
  //   let genesisJson: any = ulotionHelper.parse(genesis);
  //   genesisJson.genesis_time = "";
  //   let genesisStr = ulotionHelper.stringify(genesisJson);
  //   return hash.update(genesisStr, 'utf8').digest().toString('hex')
  // }

  /**
   * Clones an object
   * @param obj
   * @param replacer
   * @returns {{}}
   */
  private static deepClone(obj, replacer) {
    let newObj = Array.isArray(obj) ? [] : {};
    Object.assign(newObj, obj);
    for (let key in newObj) {
      newObj[key] = replacer(newObj[key]);
      if (typeof newObj[key] === 'object') {
        newObj[key] = this.deepClone(newObj[key], replacer);
      }
    }
    return newObj;
  }

  /**
   * Replaces values in an object without cloning
   * @param obj
   * @param replacer
   * @returns {any}
   */
  private static replace(obj, replacer) {
    for (let key in obj) {
      obj[key] = replacer(obj[key])
      if (typeof obj[key] === 'object' && !Buffer.isBuffer(obj[key])) {
        // recursively replace props of objects (unless it's a Buffer)
        ulotionHelper.replace(obj[key], replacer)
      }
    }
    return obj
  }


  /**
   * Stringify obj
   * @param obj
   * @returns {any}
   */
  private static stringify(obj) {
    let convertedObj = ulotionHelper.deepClone(obj, ulotionHelper.bufferToBase64Replacer);
    return stableStringify(convertedObj)
  }

  /**
   * Replace buffer to base64
   * @param value
   * @returns {any}
   */
  private static bufferToBase64Replacer(value) {
    if (
      typeof value === 'object' &&
      value != null &&
      value.type === 'Buffer' &&
      Array.isArray(value.data)
    ) {
      value = Buffer.from(value)
    }
    if (!Buffer.isBuffer(value)) return value;
    return `${base64Prefix}${value.toString('base64')}`
  }
}