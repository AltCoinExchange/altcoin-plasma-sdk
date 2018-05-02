import {DepositDto} from "./dto/deposit.dto";
import {WithdrawDto} from "./dto/withdraw.dto";
import {OrderDto} from "./dto/order.dto";
const { connect } = require('lotion');

export class LightClient {

  private state: any;

  constructor(private GCI: string, private options) { }

  /**
   * Get lastest state from node
   * @returns {Promise<any>}
   */
  public async refreshState() {
    const { state, send } = await connect(this.GCI, this.options);
    const stateResult = await state();
    this.state = stateResult;
    return stateResult;
  }

  private async send(data: any) {
    const { state, send } = await connect(this.GCI, this.options);
    return await send(data);
  }

  /**
   * Notify deposit
   * @param {DepositDto} data
   * @returns {Promise<void>}
   */
  public async deposit(data: DepositDto) {
    return this.send(data);
  }

  /**
   * Make order
   * @param {OrderDto} data
   * @returns {Promise<void>}
   */
  public async make(data: OrderDto) {
    return this.send(data);
  }

  /**
   * Withdraw
   * @param {WithdrawDto} data
   * @returns {Promise<any>}
   */
  public async withdraw(data: WithdrawDto) {
    return this.send(data);
  }
}

