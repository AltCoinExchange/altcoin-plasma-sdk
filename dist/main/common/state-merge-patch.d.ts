import { LightClient } from "../main";
export declare class StateMergePatch {
    private path;
    private dp;
    private state;
    constructor(state: any, path: any);
    /**
     * Diff two states
     * @param {LightClient} lc
     * @returns {Promise<any>}
     */
    diff(lc: LightClient): Promise<any>;
    /**
     * Check if key is numeric
     * @param n
     * @returns {boolean}
     */
    private static isNumeric;
    /**
     * Check if it has child array
     * @param obj
     * @returns {boolean}
     */
    private static isChildArray;
    /**
     * Create new object
     * @param obj
     * @returns {{}}
     */
    private static toObjType;
    /**
     * Handle array value
     * @param val
     * @returns {any}
     */
    private static handleValue;
    /**
     * Handle object
     * @param key
     * @param value
     * @param result
     */
    private static handleObj;
    /**
     * Convert patch to merge patch
     * TODO: Refactor
     * @param patch
     * @param result
     * @returns {any}
     */
    static patchToMergePatch(patch: any, result?: any): any;
}
