export declare class API {
    private readonly _options;
    constructor(_options: any);
    private _buildUrl;
    /** Get a unique ID from the server via XHR and initialize with it. */
    retrieveId(): Promise<string>;
    /** @deprecated */
    listAllPeers(): Promise<any[]>;
}
