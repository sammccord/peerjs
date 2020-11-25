import { ConnectionType, SerializationType } from "./enums";
import { Peer } from "./peer";
import { BaseConnection } from "./baseconnection";
import { ServerMessage } from "./servermessage";
import { DataConnection as IDataConnection } from '../index';
/**
 * Wraps a DataChannel between two Peers.
 */
export declare class DataConnection extends BaseConnection implements IDataConnection {
    private static readonly ID_PREFIX;
    private static readonly MAX_BUFFERED_AMOUNT;
    private _negotiator;
    readonly label: string;
    readonly serialization: SerializationType;
    readonly reliable: boolean;
    stringify: (data: any) => string;
    parse: (data: string) => any;
    get type(): ConnectionType;
    private _buffer;
    private _bufferSize;
    private _buffering;
    private _chunkedData;
    private _dc;
    private _encodingQueue;
    get dataChannel(): RTCDataChannel;
    get bufferSize(): number;
    constructor(peerId: string, provider: Peer, options: any);
    /** Called by the Negotiator when the DataChannel is ready. */
    initialize(dc: RTCDataChannel): void;
    private _configureDataChannel;
    private _handleDataMessage;
    private _handleChunk;
    /**
     * Exposed functionality for users.
     */
    /** Allows user to close connection. */
    close(): void;
    /** Allows user to send data. */
    send(data: any, chunked?: boolean): void;
    private _bufferedSend;
    private _trySend;
    private _tryBuffer;
    private _sendChunks;
    handleMessage(message: ServerMessage): void;
}
