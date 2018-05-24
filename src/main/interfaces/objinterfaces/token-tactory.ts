import { EthEngine } from "./eth-engine";
import { GolemTokenMainnet } from "./golem";
export declare enum TOKENS {
  AUGUR = 1,
  GOLEM = 2,
  GNOSIS = 3,
  BAT = 4,
  ARAGON = 5,
  EOS = 6,
  SALT = 7,
  CIVIC = 8,
  OMISEGO = 9,
  DISTRICT0X = 10,
  STATUSNETWORK = 11,
  SUBSTRATUM = 12,
  TRON = 13,
  BYTOM = 14,
  DENT = 15,
  POPULOUS = 16,
  MAKER = 17,
  DIGIXDAO = 18,
  QASH = 19,
  ETHOS = 20,
  FUNFAIR = 21,
  REQUESTNETWORK = 22,
  BANCOR = 23,
  ICONOMI = 24,
  TENXPAY = 25,
  STORJ = 26,
  ENJINCOIN = 27,
  MONACO = 28,
  EDGELESS = 29,
  VECHAIN = 30,
  ICON = 31,
  ZEROX = 32,
}
export declare class TokenFactory {
  static GetToken(token: TOKENS, engine: EthEngine, testnet?: boolean): GolemTokenMainnet;
  static GetTokenMain(token: TOKENS, engine: EthEngine): GolemTokenMainnet;
}
