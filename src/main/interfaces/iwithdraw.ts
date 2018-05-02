import {IOrder} from "./iorder";

export interface IWithdraw {
  sender: string;
  token: string;
  amount: string;
}