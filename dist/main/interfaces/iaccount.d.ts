import { IBalance } from "./ibalance";
import { IOrder } from "./iorder";
export interface IAccount {
    [address: string]: {
        balance: IBalance;
        filledOrders: Array<IOrder>;
    };
}
