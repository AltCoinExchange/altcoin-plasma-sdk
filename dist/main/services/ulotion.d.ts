export declare class uLotion {
    private GCI;
    private options;
    private nodes;
    constructor(GCI: any, options: any);
    /**
     * Get genesis active peer
     * @returns {Promise<string>}
     */
    getGenesisActivePeer(): Promise<string>;
    /**
     * Get state from tendermint client
     * @param {string} path
     * @returns {Promise<any>}
     */
    state(path?: string): Promise<any>;
    /**
     * Send transaction
     * @param tx
     * @returns {Promise<any>}
     */
    send(tx: any): Promise<any>;
}
