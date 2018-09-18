import { expect } from 'chai';
import {LightClient} from "../main/main";
import {EthEngine, TOKENS} from "altcoin-ethereum-wallet";
import {App} from "../main/config/main.config";

const lightClientConfig =
  {
    lite: true,
    liteTimeout: 10000,
    tendermintPort: 46657,
    nodes: ["http://localhost:46657"],
    genesis: {
      "genesis_time": "0001-01-01T00:00:00Z",
      "chain_id": "test-chain-MOamgH",
      "validators":
        [
          {
            "address": "E26BBB8EFEAD2738EEC642F1BC0C60D750B30608",
            "pub_key": {"type": "AC26791624DE60", "value": "M7C9qN0VmfELcqhjS0vpOe7Xb2VzVAF58rzrwWnW5qg="},
            "power": 10,
            "name": ""
          }
        ],
      "app_hash": ""
    }
  };

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
      }},"3be65d9ccb1850ee6bbb90adfa3fcb9f3cffb590c81859f550ab83b66b4b7aa2");

    // 3be65d9ccb1850ee6bbb90adfa3fcb9f3cffb590c81859f550ab83b66b4b7aa2
    // bb99bb008b169586f392fa41e756cf8ccf9f20b48397c64bd4625b62265f8e2c

    // Test deposit
    const deposit = await lightClient.deposit(TOKENS.AUGUR, 100);
    // const result = await lightClient.make(TOKENS.AUGUR, TOKENS.WETH, 1, 0.00001);

    const state = await lightClient.refreshState();
    console.log(JSON.stringify(state));

    // const orders = await lightClient.getActiveOrders();
    // console.log(JSON.stringify(orders));

    const orders2 = await lightClient.getActiveOrders(true, TOKENS.WETH, TOKENS.AUGUR);
    // console.log(JSON.stringify(orders2));


    // Test withdraw
    const orders = await lightClient.withdraw(TOKENS.AUGUR, 1);

    // Test deposit
    // const deposit = await lightClient.deposit(TOKENS.GOLEM, 1000);

    // const result = await lightClient.make(TOKENS.GOLEM, TOKENS.WETH, 2, 1);
    // // lightClient.authenticate("f55a297b6dd11a95726c57c2cf180c705c2b2097f7933682eddc957df7ed5c6b");
    //
    // const state2 = await lightClient.refreshState();
    //
    // console.log(state2);
    expect(true).to.be.true;
  });

  it('connect to peer1', async function() {

    this.timeout(160000);
    const peer2 = "b37095b01e624caef9b253eeb3f1f7dc80885c9fd4d31ea20586f2dd911b51ae";
    const peer1 = "0fc067498cdbb1d8f102035cc4160469fb098c7c7fdfd0801fc6e681a982257b";

    // Pass null to disable discovery
    const lightClient = new LightClient(null, {
      lite: true,
      liteTimeout: 10000,
      tendermintPort: 36657,
      nodes: ["http://localhost:36657"],
      genesis: {
        "genesis_time":"0001-01-01T00:00:00Z",
        "chain_id":"test-chain-RGUYTp",
        "validators":[{"pub_key":{"type":"AC26791624DE60","value":"Vk16+GsTAhIjMWkqGk4PzdBplBLrLQrFIj8Q4ipDZow="},"power":10,"name":""}],"app_hash":""
      }},"2b529f5b279ce59fd20f1c46908266b664939bc51f2d9a6e6f5cdcbf02ae17cd");
    const state = await lightClient.refreshState();
    console.log(JSON.stringify(state));

    // Test deposit
    //const result = await lightClient.deposit(TOKENS.AUGUR, 1000);
    // lightClient.authenticate("f55a297b6dd11a95726c57c2cf180c705c2b2097f7933682eddc957df7ed5c6b");

    const state2 = await lightClient.refreshState('volume');
    console.log(state2);
    expect(true).to.be.true;
  });

  it('Test events', async function() {

    this.timeout(160000);
    const peer2 = "b37095b01e624caef9b253eeb3f1f7dc80885c9fd4d31ea20586f2dd911b51ae";
    const peer1 = "0fc067498cdbb1d8f102035cc4160469fb098c7c7fdfd0801fc6e681a982257b";

    // lightClientConfig.nodes[0] = "https://staging-plasma.altcoin.io:46666";
    // Pass null to disable discovery
    const lightClient = new LightClient(null, lightClientConfig,"3be65d9ccb1850ee6bbb90adfa3fcb9f3cffb590c81859f550ab83b66b4b7aa2");

    const state = await lightClient.refreshState();
    console.log(JSON.stringify(state));

    // await lightClient.subscribe("$..orders", (path, value) => {
    //   console.log(`Event: ${path}: ${JSON.stringify(value)}`);
    // });

    await lightClient.subscribeMulti(["$..orders", "$..accounts"], (path, value) => {
      console.log(`Event: ${path}: ${JSON.stringify(value)}`);
    });

    await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(true);
      }, 100000);
    });
    // console.log(JSON.stringify(result));

  });
});
