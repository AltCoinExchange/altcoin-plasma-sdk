export interface INonce {
  [token: string]: {
    [address: string]: number
  }
}