import { ConnectionType } from "./enums";
import { Peer } from "./peer";
import { BaseConnection } from "./baseconnection";
import { ServerMessage } from "./servermessage";
import { AnswerOption } from "..";
/**
 * Wraps the streaming interface between two Peers.
 */
export declare class MediaConnection extends BaseConnection {
    private static readonly ID_PREFIX;
    private _negotiator;
    private _localStream;
    private _remoteStream;
    get type(): ConnectionType;
    get localStream(): MediaStream;
    get remoteStream(): MediaStream;
    constructor(peerId: string, provider: Peer, options: any);
    addStream(remoteStream: any): void;
    handleMessage(message: ServerMessage): void;
    answer(stream: MediaStream, options?: AnswerOption): void;
    /**
     * Exposed functionality for users.
     */
    /** Allows user to close connection. */
    close(): void;
}
