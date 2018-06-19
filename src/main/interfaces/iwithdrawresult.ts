import {IWithdraw} from "./iwithdraw";
import {ISignature} from "./isignature";

export interface IWithdrawResult extends IWithdraw, ISignature {
  nonce: number;
}
