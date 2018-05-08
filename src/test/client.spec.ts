import { expect } from 'chai';
import {LightClient} from "../main/main";

describe('client test', function() {
  it('connect', async function() {

    this.timeout(10000);
    const peer2 = "b37095b01e624caef9b253eeb3f1f7dc80885c9fd4d31ea20586f2dd911b51ae";
    const peer1 = "0fc067498cdbb1d8f102035cc4160469fb098c7c7fdfd0801fc6e681a982257b";
    const lightClient = new LightClient(peer2, {
      lite: true,
      liteTimeout: 10000,
      nodes: ["http://localhost:46657"],
      genesis: {
        "genesis_time":"0001-01-01T00:00:00Z",
        "chain_id":"test-chain-MOamgH",
        "validators":
          [
            {"address":"E26BBB8EFEAD2738EEC642F1BC0C60D750B30608", "pub_key": {"type":"AC26791624DE60","value":"M7C9qN0VmfELcqhjS0vpOe7Xb2VzVAF58rzrwWnW5qg="}, "power":10,"name":""}
          ],
        "app_hash":""
      }});
    const state = await lightClient.refreshState();
    console.log(state);
    const state2 = await lightClient.refreshState('volume');
    console.log(state2);
    expect(true).to.be.true;
  });
});
