import {TokenMapping} from "../main";

export class StateHelper {

  /**
   * Map address to enum
   * @param obj
   * @param prop
   */
  public static mapAddressToEnum(obj, prop?) {
    if (prop) {
      for (const i in obj[prop]) {
        if (obj[prop].hasOwnProperty(i)) {
          obj[prop][TokenMapping[i.toLowerCase()]] = obj[prop][i];
          delete obj[prop][i];
        }
      }
    } else {
      for (const arr in obj) {
        if (obj.hasOwnProperty(arr)) {
          for (const i in obj[arr]) {
            if (obj[arr].hasOwnProperty(i)) {
              obj[arr][TokenMapping[i.toLowerCase()]] = obj[arr][i];
              delete obj[arr][i];
            }
          }
        }
      }
    }
  }
}