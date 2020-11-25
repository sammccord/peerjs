import { BaseConnection } from "./baseconnection";
/**
 * Manages all negotiations between Peers.
 */
export declare class Negotiator {
    readonly connection: BaseConnection;
    constructor(connection: BaseConnection);
    /** Returns a PeerConnection object set up correctly (for data, media). */
    startConnection(options: any): void;
    /** Start a PC. */
    private _startPeerConnection;
    /** Set up various WebRTC listeners. */
    private _setupListeners;
    cleanup(): void;
    private _makeOffer;
    private _makeAnswer;
    /** Handle an SDP. */
    handleSDP(type: string, sdp: any): Promise<void>;
    /** Handle a candidate. */
    handleCandidate(ice: any): Promise<void>;
    private _addTracksToConnection;
    private _addStreamToMediaConnection;
}
