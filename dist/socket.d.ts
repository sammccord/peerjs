import { EventEmitter } from "eventemitter3";
/**
 * An abstraction on top of WebSockets to provide fastest
 * possible connection for peers.
 */
export declare class Socket extends EventEmitter {
    private readonly pingInterval;
    private _disconnected;
    private _id?;
    private _messagesQueue;
    private _socket?;
    private _wsPingTimer?;
    private readonly _baseUrl;
    constructor(secure: any, host: string, port: number, path: string, key: string, pingInterval?: number);
    start(id: string, token: string): void;
    private _scheduleHeartbeat;
    private _sendHeartbeat;
    /** Is the websocket currently open? */
    private _wsOpen;
    /** Send queued messages. */
    private _sendQueuedMessages;
    /** Exposed send for DC & Peer. */
    send(data: any): void;
    close(): void;
    private _cleanup;
}
