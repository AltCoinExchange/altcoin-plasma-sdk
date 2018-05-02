import { IBalance } from "./ibalance";
import {IOrder} from "./iorder";

export interface IAccount {
  [address: string]: {
      // signature: ISignature;
      balance: IBalance;
      filledOrders: Array<IOrder>;
  };
}