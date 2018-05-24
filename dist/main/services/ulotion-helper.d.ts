export declare class ulotionHelper {
    private static convertBase64ToBuffers(obj);
    private static base64ToBufferReplacer(value);
    /**
     * Encode transaction
     * @param txData
     * @param nonce
     * @returns {any}
     */
    static encode(txData: any, nonce: any): any;
    static fetchGenesis(GCI: any): Promise<any>;
    /**
     * Parse string
     * @param json
     */
    private static parse(json);
    /**
     * Get hash data from genesis
     * @param genesis
     */
    private static getGCIFromGenesis(genesis);
    /**
     * Clones an object
     * @param obj
     * @param replacer
     * @returns {{}}
     */
    private static deepClone(obj, replacer);
    /**
     * Replaces values in an object without cloning
     * @param obj
     * @param replacer
     * @returns {any}
     */
    private static replace(obj, replacer);
    /**
     * Stringify obj
     * @param obj
     * @returns {any}
     */
    private static stringify(obj);
    /**
     * Replace buffer to base64
     * @param value
     * @returns {any}
     */
    private static bufferToBase64Replacer(value);
}
