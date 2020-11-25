export declare enum ConnectionEventType {
    Open = "open",
    Stream = "stream",
    Data = "data",
    Close = "close",
    Error = "error",
    IceStateChanged = "iceStateChanged"
}
export declare enum ConnectionType {
    Data = "data",
    Media = "media"
}
export declare enum PeerEventType {
    Open = "open",
    Close = "close",
    Connection = "connection",
    Call = "call",
    Disconnected = "disconnected",
    Error = "error"
}
export declare enum PeerErrorType {
    BrowserIncompatible = "browser-incompatible",
    Disconnected = "disconnected",
    InvalidID = "invalid-id",
    InvalidKey = "invalid-key",
    Network = "network",
    PeerUnavailable = "peer-unavailable",
    SslUnavailable = "ssl-unavailable",
    ServerError = "server-error",
    SocketError = "socket-error",
    SocketClosed = "socket-closed",
    UnavailableID = "unavailable-id",
    WebRTC = "webrtc"
}
export declare enum SerializationType {
    Binary = "binary",
    BinaryUTF8 = "binary-utf8",
    JSON = "json"
}
export declare enum SocketEventType {
    Message = "message",
    Disconnected = "disconnected",
    Error = "error",
    Close = "close"
}
export declare enum ServerMessageType {
    Heartbeat = "HEARTBEAT",
    Candidate = "CANDIDATE",
    Offer = "OFFER",
    Answer = "ANSWER",
    Open = "OPEN",
    Error = "ERROR",
    IdTaken = "ID-TAKEN",
    InvalidKey = "INVALID-KEY",
    Leave = "LEAVE",
    Expire = "EXPIRE"
}
