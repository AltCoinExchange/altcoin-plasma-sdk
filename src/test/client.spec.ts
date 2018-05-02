import { expect } from 'chai';
import {LightClient} from "../main/main";

describe('client test', () => {
  it('connect', async () => {

    const lightClient = new LightClient("3d04c26e0f61f5752f1690207b421a62ed85ab81efd75156a850732e42ee43b3", { liteTimeout: 10000 });
    const state = await lightClient.refreshState();

    console.log(state);
    expect(true).to.be.true;
  });
});
