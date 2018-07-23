# altcoin-plasma-sdk

## Info
Documentation coming soon! Preview is at the: https://altcoinexchange.github.io/altcoin-plasma-sdk/ Feel free to contact support@altcoin.io with any questions.

Launch your own decentralized exchange. Please view this page here for details: https://altcoin.io/sdk.html

## API Examples

### LightClient initiate

Instantiate light client:

    const lightClient = new LightClient(null, {
      lite: true,
      liteTimeout: 10000,
      tendermintPort: 46657,
      nodes: ["https://staging-plasma.altcoin.io:46666"], // Altcoin Node
      genesis: {
        "genesis_time":"0001-01-01T00:00:00Z",
        "chain_id":"test-chain-MOamgH",
        "validators":
          [
            {"address":"E26BBB8EFEAD2738EEC642F1BC0C60D750B30608", "pub_key": {"type":"AC26791624DE60","value":"M7C9qN0VmfELcqhjS0vpOe7Xb2VzVAF58rzrwWnW5qg="}, "power":10,"name":""}
          ],
        "app_hash":""
      }}, "your_private_key");

### LightClient deposit
Deposit token to the side chain

    const deposit = await lightClient.deposit(TOKENS.AUGUR, 100);


### LightClient getActiveOrders
Get all active orders for exchange

    const orders = await lightClient.getActiveOrders(true);

Returns array of the users with their orders:

     "0x27eac94d9c17c642ac29fec7b71aff6abd9f4ba4":[  
        {  
           "sellToken":"0x9a8a7c6e621210930fc9141664fc26c1f9763cd9",
           "buyToken":"0x58d20e5da51b8705343f56bca258d14725c55d2c",
           "sellAmount":2,
           "buyAmount":1,
           "nonce":2,
           "sender":"0x27eac94d9c17c642ac29fec7b71aff6abd9f4ba4",
           "v":"0x1c",
           "r":"0x9e84204de79205f969a4ce68ca3ae290bb3e5a719511f6274cd7d55cec4ec112",
           "s":"0x29df31ddce5aea7949bf62b8aba1a2bb4999ad50352f29b274c272b9a779f05f",
           "signature":"0x9e84204de79205f969a4ce68ca3ae290bb3e5a719511f6274cd7d55cec4ec11229df31ddce5aea7949bf62b8aba1a2bb4999ad50352f29b274c272b9a779f05f1c",
           "messageHash":"0x7dd7105dbe1246ad8b82a2d6b1c92090585e3ce9dc2d6fc6fd6ae311358e942a"
        }
     ]

Get all my orders:

    const orders = await lightClient.getActiveOrders();

Get all selling orders for Augur token:

    const orders = await lightClient.getActiveOrders(false, TOKENS.AUGUR);

### Make order
Create new order on the sidechain selling 2 Golems for one ETH:

    const result = await lightClient.make(TOKENS.GOLEM, TOKENS.WETH, 2, 1);

### Withdraw tokens
Withdraw tokens to previously authenticated account:

    const result = await lightClient.withdraw(TOKENS.AUGUR, 1);
    
