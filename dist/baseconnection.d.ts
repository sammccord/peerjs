import { EventEmitter } from "eventemitter3";
import { Peer } from "./peer";
import { ServerMessage } from "./servermessage";
import { ConnectionType } from "./enums";
export declare abstract class BaseConnection extends EventEmitter {
    readonly peer: string;
    provider: Peer;
    readonly options: any;
    protected _open: boolean;
    readonly metadata: any;
    connectionId: string;
    peerConnection: RTCPeerConnection;
    abstract get type(): ConnectionType;
    get open(): boolean;
    constructor(peer: string, provider: Peer, options: any);
    abstract close(): void;
    abstract handleMessage(message: ServerMessage): void;
}
