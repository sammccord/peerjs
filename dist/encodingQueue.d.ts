import { EventEmitter } from "eventemitter3";
export declare class EncodingQueue extends EventEmitter {
    readonly fileReader: FileReader;
    private _queue;
    private _processing;
    constructor();
    get queue(): Blob[];
    get size(): number;
    get processing(): boolean;
    enque(blob: Blob): void;
    destroy(): void;
    private doNextTask;
}
