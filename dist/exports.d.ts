import { Peer } from "./peer";
export declare const peerjs: {
    Peer: typeof Peer;
    util: {
        noop(): void;
        readonly CLOUD_HOST: "0.peerjs.com";
        readonly CLOUD_PORT: 443;
        readonly chunkedBrowsers: {
            Chrome: number;
            chrome: number;
        };
        readonly chunkedMTU: 16300;
        readonly defaultConfig: {
            iceServers: ({
                urls: string;
                username?: undefined;
                credential?: undefined;
            } | {
                urls: string;
                username: string;
                credential: string;
            })[];
            sdpSemantics: string;
        };
        readonly browser: string;
        readonly browserVersion: number;
        readonly supports: import("..").UtilSupportsObj;
        validateId(id: string): boolean;
        pack: typeof import("peerjs-js-binarypack").pack;
        unpack: typeof import("peerjs-js-binarypack").unpack;
        _dataCount: number;
        chunk(blob: Blob): {
            __peerData: number;
            n: number;
            total: number;
            data: Blob;
        }[];
        blobToArrayBuffer(blob: Blob, cb: (arg: ArrayBuffer) => void): FileReader;
        binaryStringToArrayBuffer(binary: string): ArrayBuffer | SharedArrayBuffer;
        randomToken(): string;
        isSecure(): boolean;
    };
};
export default Peer;
