import {IBalance} from "./ibalance";
import {IOrder} from "./iorder";
import {INonce} from "./inonce";
import {OrderDto} from "../dto/order.dto";
import { IAccount } from "./iaccount";

export interface IBlockchainState {
  volume: IBalance,
  accounts: IAccount,
  orders: Object,
  nonce: INonce,
  depositNonce: number,
  withdrawNonce: number
}