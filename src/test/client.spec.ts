import { expect } from 'chai';
import {LightClient} from "../main/main";
import {EthEngine, TOKENS} from "altcoin-ethereum-wallet";
import {App} from "../main/config/main.config";

describe('client test', function() {
  it('connect', async function() {

    this.timeout(160000);
    const peer2 = "b37095b01e624caef9b253eeb3f1f7dc80885c9fd4d31ea20586f2dd911b51ae";
    const peer1 = "0fc067498cdbb1d8f102035cc4160469fb098c7c7fdfd0801fc6e681a982257b";

    // Pass null to disable discovery
    const lightClient = new LightClient(null, {
      lite: true,
      liteTimeout: 10000,
      tendermintPort: 46657,
      nodes: ["http://localhost:46657"],
      genesis: {
        "genesis_time":"0001-01-01T00:00:00Z",
        "chain_id":"test-chain-MOamgH",
        "validators":
          [
            {"address":"E26BBB8EFEAD2738EEC642F1BC0C60D750B30608", "pub_key": {"type":"AC26791624DE60","value":"M7C9qN0VmfELcqhjS0vpOe7Xb2VzVAF58rzrwWnW5qg="}, "power":10,"name":""}
          ],
        "app_hash":""
      }},"2b529f5b279ce59fd20f1c46908266b664939bc51f2d9a6e6f5cdcbf02ae17cd");
    const state = await lightClient.refreshState();
    console.log(state);

    // Test deposit
    const result = await lightClient.deposit(TOKENS.AUGUR, 1000);
    // lightClient.authenticate("f55a297b6dd11a95726c57c2cf180c705c2b2097f7933682eddc957df7ed5c6b");

    const state2 = await lightClient.refreshState('volume');
    console.log(state2);
    expect(true).to.be.true;
  });
});
