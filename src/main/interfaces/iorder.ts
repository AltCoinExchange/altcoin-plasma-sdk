export interface IOrder {
  sellToken: string;
  buyToken: string;
  sellAmount: string;
  buyAmount: string;
  nonce: number;
  sender: string;
}