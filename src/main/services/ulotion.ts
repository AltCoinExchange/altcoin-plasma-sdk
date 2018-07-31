import {ulotionHelper} from "./ulotion-helper";
let axios = require('axios');
import * as tendermint from'tendermint';


export class uLotion {

  private nodes = [];
  private eventRpc;

  constructor(private GCI, private options) {
    this.nodes = options.nodes;
    if (!GCI) {
      if (this.nodes === undefined || this.nodes.length === 0) {
        throw Error('Nodes not set');
      }
    }
  }

  /**
   * Get genesis active peer
   * @returns {Promise<string>}
   */
  public async getGenesisActivePeer(): Promise<string> {
    let rpcAddr;
    if (this.GCI) {
      // rpcAddr = this.nodes[0];
      const genesis = await ulotionHelper.fetchGenesis(this.GCI);
      rpcAddr = `http://${genesis.peer.host}:${this.options.tendermintPort}`;
    } else {
      rpcAddr = this.nodes[0]; //.replace('http:', 'ws:');
    }
    return rpcAddr;
  }

  /**
   * Get state from tendermint client
   * @param {string} path
   * @returns {Promise<any>}
   */
  public async state(path = '') {

    const rpcAddr = await this.getGenesisActivePeer();
    const queryResponse = await axios.get(`${rpcAddr}/abci_query?path="${path}"`);

    if (queryResponse.data.error && !queryResponse.data.result) {
      throw new Error(JSON.stringify(queryResponse.data.error));
    }

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

  /**
   * Send transaction
   * @param tx
   * @returns {Promise<any>}
   */
  public async send(tx) {

      const rpcAddr = await this.getGenesisActivePeer();
      // TODO: Remove after examination
      // let nonce = Math.floor(Math.random() * (2 << 12));
      // let txBytes = '0x' + ulotionHelper.encode(tx, nonce).toString('hex');
      let txBytes = '0x' + Buffer.from(JSON.stringify(tx)).toString('hex');

      const result = await axios.get(`${rpcAddr.replace(
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

  /**
   * Subscribe to transaction event
   * @param func
   * @returns {Promise<void>}
   */
  public async subscribeTx(func) {

    const rpcAddr = (await this.getGenesisActivePeer()).replace('http:', 'ws:');
    console.log(rpcAddr);

    // TODO: Enable once tendermint package is properly packed
    // let rpc = tendermint.RpcClient(rpcAddr);
    // this.eventRpc = rpc;
    //
    // rpc.on('close', e => {
    //   console.log(e);
    // });
    //
    // // console.log(rpc);
    // rpc.on('error', e => {
    //   console.log('RPC Error: ', e);
    // });
    //
    // rpc.subscribe({query: "tm.event='Tx'"}, func);
  }
}