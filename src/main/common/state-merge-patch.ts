import * as diff from "jsondiffpatch";
import {LightClient} from "../main";
import {DiffPatcher} from "jsondiffpatch";

export class StateMergePatch {

  private dp: DiffPatcher;
  private state;

  constructor(state, private path) {
    this.dp = new DiffPatcher();
    this.state = this.dp.clone(state);
  }

  /**
   * Diff two states
   * @param {LightClient} lc
   * @returns {Promise<any>}
   */
  public async diff(lc: LightClient) {
    const newState = await lc.refreshState(this.path);
    const currentState =  this.dp.diff(this.state, newState);
    this.state = newState;
    return StateMergePatch.patchToMergePatch(currentState);
  }

  /**
   * Check if key is numeric
   * @param n
   * @returns {boolean}
   */
  private static isNumeric(n) {
    if (n.toLowerCase().startsWith("0x")) {
      return false;
    }
    return !isNaN(parseFloat(n)) && isFinite(n);
  }

  /**
   * Check if it has child array
   * @param obj
   * @returns {boolean}
   */
  private static isChildArray(obj) {
    for (const i in obj) {
      return StateMergePatch.isNumeric(i);
    }
  }

  /**
   * Create new object
   * @param obj
   * @returns {{}}
   */
  private static toObjType(obj) {
    return StateMergePatch.isChildArray(obj) ? [] : {};
  }

  /**
   * Handle array value
   * @param val
   * @returns {any}
   */
  private static handleValue(val) {
    if (Array.isArray(val)) {
      if (val.length > 1) {
        return val[1];
      }
      return val[0];
    }
  }

  /**
   * Handle object
   * @param key
   * @param value
   * @param result
   */
  private static handleObj(key, value, result) {

    if (Array.isArray(value)) {
      result[key] = StateMergePatch.handleValue(value);
      return;
    }

    let obj = StateMergePatch.toObjType(value);

    if (Array.isArray(result)) {
      result.push(obj);
    } else {
      result[key] = obj;
    }
    StateMergePatch.patchToMergePatch(value, obj);
  }

  /**
   * Convert patch to merge patch
   * TODO: Refactor
   * @param patch
   * @param result
   * @returns {any}
   */
  public static patchToMergePatch(patch, result?) {

    for (const i in patch) {

      // Is array
      if (StateMergePatch.isNumeric(i)) {
        if (result === undefined) {
          result = [];
        }

        if (typeof patch[i] === "string") {
          result.push(patch[i]);
        } else if (typeof patch[i] == "object") {
          this.handleObj(i, patch[i], result);
        } else if (Array.isArray(patch[i])) {
          result.push(StateMergePatch.handleValue(patch[i]));
        }

      } else {
        if (result === undefined) {
          result = StateMergePatch.toObjType(patch[i]);
        }

        if (typeof patch[i] === "string") {
          result[i] = patch[i];
        } else if (typeof patch[i] == "object") {
          this.handleObj(i, patch[i], result);
        } else if (Array.isArray(patch[i])) {
          result[i] = StateMergePatch.handleValue(patch[i]);
        }
      }
    }

    return result;
  }
}