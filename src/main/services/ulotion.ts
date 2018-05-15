const axios = require('axios');
const vstruct = require('varstruct');
const stableStringify = require('json-stable-stringify');

const TxStruct = vstruct([
  { name: 'data', type: vstruct.VarString(vstruct.UInt32BE) },
  { name: 'nonce', type: vstruct.UInt32BE },
]);

export class uLotion {

  private nodes = [];
  private static base64Prefix = ':base64:';

  constructor(GCI, options) {
    this.nodes = options.nodes;
    if (this.nodes === undefined || this.nodes.length === 0) {
      throw Error('Nodes not set');
    }
  }

  /**
   * Stringify obj
   * @param obj
   * @returns {any}
   */
  private static stringify(obj) {
    let convertedObj = uLotion.deepClone(obj, uLotion.bufferToBase64Replacer);
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
    return `${this.base64Prefix}${value.toString('base64')}`
  }

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
   * Encode transaction
   * @param txData
   * @param nonce
   * @returns {any}
   */
  private static encode(txData, nonce) {
      let data = uLotion.stringify(txData);
      let bytes = TxStruct.encode({ nonce, data });
      return bytes;
  }

  public async state(path = '') {
    const rpcAddr = this.nodes[0].replace('http:', 'ws:');
    const queryResponse = await axios.get(`${rpcAddr}/abci_query?path="${path}"`);

    let resp = queryResponse.data.result.response;
    resp.height = Number(resp.height);

    let value = null;
    try {
      value = JSON.parse(Buffer.from(resp.value, 'base64').toString());
    } catch (e) {
      throw new Error('invalid json in query response')
    }

    return value;
  }

  public async send(tx) {

      let nonce = Math.floor(Math.random() * (2 << 12));
      let txBytes = '0x' + uLotion.encode(tx, nonce).toString('hex');

      const result = await axios.get(`${this.nodes[0].replace(
            'ws:',
            'http:'
          )}/broadcast_tx_commit`,
          {
            params: {
              tx: txBytes
            }
          }
        );

      return result.data.result;
  }
}