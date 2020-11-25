import { EventEmitter } from "eventemitter3";
import { LogLevel } from "./logger";
import { Socket } from "./socket";
import { MediaConnection } from "./mediaconnection";
import { DataConnection } from "./dataconnection";
import { PeerErrorType } from "./enums";
import { BaseConnection } from "./baseconnection";
import { ServerMessage } from "./servermessage";
import { PeerConnectOption, PeerJSOption } from "..";
declare class PeerOptions implements PeerJSOption {
    debug?: LogLevel;
    host?: string;
    port?: number;
    path?: string;
    key?: string;
    token?: string;
    config?: any;
    secure?: boolean;
    pingInterval?: number;
    logFunction?: (logLevel: LogLevel, ...rest: any[]) => void;
}
/**
 * A peer who can initiate connections with other peers.
 */
export declare class Peer extends EventEmitter {
    private static readonly DEFAULT_KEY;
    private readonly _options;
    private readonly _api;
    private readonly _socket;
    private _id;
    private _lastServerId;
    private _destroyed;
    private _disconnected;
    private _open;
    private readonly _connections;
    private readonly _lostMessages;
    get id(): string;
    get options(): PeerOptions;
    get open(): boolean;
    get socket(): Socket;
    /**
     * @deprecated
     * Return type will change from Object to Map<string,[]>
     */
    get connections(): Object;
    get destroyed(): boolean;
    get disconnected(): boolean;
    constructor(id?: string | PeerOptions, options?: PeerOptions);
    private _createServerConnection;
    /** Initialize a connection with the server. */
    private _initialize;
    /** Handles messages from the server. */
    private _handleMessage;
    /** Stores messages without a set up connection, to be claimed later. */
    private _storeMessage;
    /** Retrieve messages from lost message store */
    _getMessages(connectionId: string): ServerMessage[];
    /**
     * Returns a DataConnection to the specified peer. See documentation for a
     * complete list of options.
     */
    connect(peer: string, options?: PeerConnectOption): DataConnection;
    /**
     * Returns a MediaConnection to the specified peer. See documentation for a
     * complete list of options.
     */
    call(peer: string, stream: MediaStream, options?: any): MediaConnection;
    /** Add a data/media connection to this peer. */
    private _addConnection;
    _removeConnection(connection: BaseConnection): void;
    /** Retrieve a data/media connection for this peer. */
    getConnection(peerId: string, connectionId: string): null | BaseConnection;
    private _delayedAbort;
    /**
     * Emits an error message and destroys the Peer.
     * The Peer is not destroyed if it's in a disconnected state, in which case
     * it retains its disconnected state and its existing connections.
     */
    private _abort;
    /** Emits a typed error message. */
    emitError(type: PeerErrorType, err: string | Error): void;
    /**
     * Destroys the Peer: closes all active connections as well as the connection
     *  to the server.
     * Warning: The peer can no longer create or accept connections after being
     *  destroyed.
     */
    destroy(): void;
    /** Disconnects every connection on this peer. */
    private _cleanup;
    /** Closes all connections to this peer. */
    private _cleanupPeer;
    /**
     * Disconnects the Peer's connection to the PeerServer. Does not close any
     *  active connections.
     * Warning: The peer can no longer create or accept connections after being
     *  disconnected. It also cannot reconnect to the server.
     */
    disconnect(): void;
    /** Attempts to reconnect with the same ID. */
    reconnect(): void;
    /**
     * Get a list of available peer IDs. If you're running your own server, you'll
     * want to set allow_discovery: true in the PeerServer options. If you're using
     * the cloud server, email team@peerjs.com to get the functionality enabled for
     * your key.
     */
    listAllPeers(cb?: (_: any[]) => void): void;
}
export {};
