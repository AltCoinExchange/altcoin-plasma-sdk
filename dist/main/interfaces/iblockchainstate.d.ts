import { IBalance } from "./ibalance";
import { INonce } from "./inonce";
import { IAccount } from "./iaccount";
export interface IBlockchainState {
    volume: IBalance;
    accounts: IAccount;
    orders: Object;
    nonce: INonce;
    depositNonce: number;
    withdrawNonce: number;
}
