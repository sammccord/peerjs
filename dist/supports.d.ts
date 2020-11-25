export declare const Supports: {
    readonly isIOS: boolean;
    readonly supportedBrowsers: string[];
    readonly minFirefoxVersion: 59;
    readonly minChromeVersion: 72;
    readonly minSafariVersion: 605;
    isWebRTCSupported(): boolean;
    isBrowserSupported(): boolean;
    getBrowser(): string;
    getVersion(): number;
    isUnifiedPlanSupported(): boolean;
    toString(): string;
};
