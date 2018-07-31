export declare class ulotionHelper {
    private static convertBase64ToBuffers;
    private static base64ToBufferReplacer;
    /**
     * Encode transaction
     * @param txData
     * @param nonce
     * @returns {any}
     */
    static encode(txData: any, nonce: any): any;
    static fetchGenesis(GCI: any): Promise<any>;
    /**
     * Get hash of the object
     * @param obj
     * @returns {any}
     */
    static hash(obj: any): any;
    /**
     * Parse string
     * @param json
     */
    private static parse;
    /**
     * Get hash data from genesis
     * @param genesis
     */
    private static getGCIFromGenesis;
    /**
     * Clones an object
     * @param obj
     * @param replacer
     * @returns {{}}
     */
    private static deepClone;
    /**
     * Replaces values in an object without cloning
     * @param obj
     * @param replacer
     * @returns {any}
     */
    private static replace;
    /**
     * Stringify obj
     * @param obj
     * @returns {any}
     */
    private static stringify;
    /**
     * Replace buffer to base64
     * @param value
     * @returns {any}
     */
    private static bufferToBase64Replacer;
}
