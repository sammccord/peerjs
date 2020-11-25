import{pack as e,unpack as t}from"peerjs-js-binarypack";import n from"webrtc-adapter";import{EventEmitter as o}from"eventemitter3";const i=new class{constructor(){this.isIOS=["iPad","iPhone","iPod"].includes(navigator.platform),this.supportedBrowsers=["firefox","chrome","safari"],this.minFirefoxVersion=59,this.minChromeVersion=72,this.minSafariVersion=605}isWebRTCSupported(){return"undefined"!=typeof RTCPeerConnection}isBrowserSupported(){const e=this.getBrowser(),t=this.getVersion();return!!this.supportedBrowsers.includes(e)&&("chrome"===e?t>=this.minChromeVersion:"firefox"===e?t>=this.minFirefoxVersion:"safari"===e&&!this.isIOS&&t>=this.minSafariVersion)}getBrowser(){return n.browserDetails.browser}getVersion(){return n.browserDetails.version||0}isUnifiedPlanSupported(){const e=this.getBrowser(),t=n.browserDetails.version||0;if("chrome"===e&&t<72)return!1;if("firefox"===e&&t>=59)return!0;if(!window.RTCRtpTransceiver||!("currentDirection"in RTCRtpTransceiver.prototype))return!1;let o,i=!1;try{o=new RTCPeerConnection,o.addTransceiver("audio"),i=!0}catch(e){}finally{o&&o.close()}return i}toString(){return`Supports: \n    browser:${this.getBrowser()} \n    version:${this.getVersion()} \n    isIOS:${this.isIOS} \n    isWebRTCSupported:${this.isWebRTCSupported()} \n    isBrowserSupported:${this.isBrowserSupported()} \n    isUnifiedPlanSupported:${this.isUnifiedPlanSupported()}`}},s={iceServers:[{urls:"stun:stun.l.google.com:19302"},{urls:"turn:0.peerjs.com:3478",username:"peerjs",credential:"peerjsp"}],sdpSemantics:"unified-plan"},r=new class{constructor(){this.CLOUD_HOST="0.peerjs.com",this.CLOUD_PORT=443,this.chunkedBrowsers={Chrome:1,chrome:1},this.chunkedMTU=16300,this.defaultConfig=s,this.browser=i.getBrowser(),this.browserVersion=i.getVersion(),this.supports=function(){const e={browser:i.isBrowserSupported(),webRTC:i.isWebRTCSupported(),audioVideo:!1,data:!1,binaryBlob:!1,reliable:!1};if(!e.webRTC)return e;let t;try{let n;t=new RTCPeerConnection(s),e.audioVideo=!0;try{n=t.createDataChannel("_PEERJSTEST",{ordered:!0}),e.data=!0,e.reliable=!!n.ordered;try{n.binaryType="blob",e.binaryBlob=!i.isIOS}catch(e){}}catch(e){}finally{n&&n.close()}}catch(e){}finally{t&&t.close()}return e}(),this.pack=e,this.unpack=t,this._dataCount=1}noop(){}validateId(e){return!e||/^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$/.test(e)}chunk(e){const t=[],n=e.size,o=Math.ceil(n/r.chunkedMTU);let i=0,s=0;for(;s<n;){const a=Math.min(n,s+r.chunkedMTU),c=e.slice(s,a);t.push({__peerData:this._dataCount,n:i,data:c,total:o}),s=a,i++}return this._dataCount++,t}blobToArrayBuffer(e,t){const n=new FileReader;return n.onload=function(e){e.target&&t(e.target.result)},n.readAsArrayBuffer(e),n}binaryStringToArrayBuffer(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=255&e.charCodeAt(n);return t.buffer}randomToken(){return Math.random().toString(36).substr(2)}isSecure(){return"https:"===location.protocol}};function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}var c;!function(e){e[e.Disabled=0]="Disabled",e[e.Errors=1]="Errors",e[e.Warnings=2]="Warnings",e[e.All=3]="All"}(c||(c={}));var h,d,l,p,u,_,f,g=new class{constructor(){this._logLevel=c.Disabled}get logLevel(){return this._logLevel}set logLevel(e){this._logLevel=e}log(...e){this._logLevel>=c.All&&this._print(c.All,...e)}warn(...e){this._logLevel>=c.Warnings&&this._print(c.Warnings,...e)}error(...e){this._logLevel>=c.Errors&&this._print(c.Errors,...e)}setLogFunction(e){this._print=e}_print(e,...t){const n=["PeerJS: ",...t];for(let e in n)n[e]instanceof Error&&(n[e]="("+n[e].name+") "+n[e].message);e>=c.All?console.log(...n):e>=c.Warnings?console.warn("WARNING",...n):e>=c.Errors&&console.error("ERROR",...n)}};!function(e){e.Open="open",e.Stream="stream",e.Data="data",e.Close="close",e.Error="error",e.IceStateChanged="iceStateChanged"}(h||(h={})),function(e){e.Data="data",e.Media="media"}(d||(d={})),function(e){e.Open="open",e.Close="close",e.Connection="connection",e.Call="call",e.Disconnected="disconnected",e.Error="error"}(l||(l={})),function(e){e.BrowserIncompatible="browser-incompatible",e.Disconnected="disconnected",e.InvalidID="invalid-id",e.InvalidKey="invalid-key",e.Network="network",e.PeerUnavailable="peer-unavailable",e.SslUnavailable="ssl-unavailable",e.ServerError="server-error",e.SocketError="socket-error",e.SocketClosed="socket-closed",e.UnavailableID="unavailable-id",e.WebRTC="webrtc"}(p||(p={})),function(e){e.Binary="binary",e.BinaryUTF8="binary-utf8",e.JSON="json"}(u||(u={})),function(e){e.Message="message",e.Disconnected="disconnected",e.Error="error",e.Close="close"}(_||(_={})),function(e){e.Heartbeat="HEARTBEAT",e.Candidate="CANDIDATE",e.Offer="OFFER",e.Answer="ANSWER",e.Open="OPEN",e.Error="ERROR",e.IdTaken="ID-TAKEN",e.InvalidKey="INVALID-KEY",e.Leave="LEAVE",e.Expire="EXPIRE"}(f||(f={}));class m extends o{constructor(e,t,n,o,i,s=5e3){super(),this.pingInterval=s,this._disconnected=!0,this._messagesQueue=[],this._baseUrl=(e?"wss://":"ws://")+t+":"+n+o+"peerjs?key="+i}start(e,t){this._id=e,!this._socket&&this._disconnected&&(this._socket=new WebSocket(`${this._baseUrl}&id=${e}&token=${t}`),this._disconnected=!1,this._socket.onmessage=e=>{let t;try{t=JSON.parse(e.data),g.log("Server message received:",t)}catch(t){return void g.log("Invalid server message",e.data)}this.emit(_.Message,t)},this._socket.onclose=e=>{this._disconnected||(g.log("Socket closed.",e),this._cleanup(),this._disconnected=!0,this.emit(_.Disconnected))},this._socket.onopen=()=>{this._disconnected||(this._sendQueuedMessages(),g.log("Socket open"),this._scheduleHeartbeat())})}_scheduleHeartbeat(){this._wsPingTimer=setTimeout(()=>{this._sendHeartbeat()},this.pingInterval)}_sendHeartbeat(){if(!this._wsOpen())return void g.log("Cannot send heartbeat, because socket closed");const e=JSON.stringify({type:f.Heartbeat});this._socket.send(e),this._scheduleHeartbeat()}_wsOpen(){return!!this._socket&&1===this._socket.readyState}_sendQueuedMessages(){const e=[...this._messagesQueue];this._messagesQueue=[];for(const t of e)this.send(t)}send(e){if(this._disconnected)return;if(!this._id)return void this._messagesQueue.push(e);if(!e.type)return void this.emit(_.Error,"Invalid message");if(!this._wsOpen())return;const t=JSON.stringify(e);this._socket.send(t)}close(){this._disconnected||(this._cleanup(),this._disconnected=!0)}_cleanup(){this._socket&&(this._socket.onopen=this._socket.onmessage=this._socket.onclose=null,this._socket.close(),this._socket=void 0),clearTimeout(this._wsPingTimer)}}class b{constructor(e){this.connection=e}startConnection(e){const t=this._startPeerConnection();if(this.connection.peerConnection=t,this.connection.type===d.Media&&e._stream&&this._addTracksToConnection(e._stream,t),e.originator){if(this.connection.type===d.Data){const n=this.connection,o=t.createDataChannel(n.label,{ordered:!!e.reliable});n.initialize(o)}this._makeOffer()}else this.handleSDP("OFFER",e.sdp)}_startPeerConnection(){g.log("Creating RTCPeerConnection.");const e=new RTCPeerConnection(this.connection.provider.options.config);return this._setupListeners(e),e}_setupListeners(e){const t=this.connection.peer,n=this.connection.connectionId,o=this.connection.type,i=this.connection.provider;g.log("Listening for ICE candidates."),e.onicecandidate=e=>{e.candidate&&e.candidate.candidate&&(g.log(`Received ICE candidates for ${t}:`,e.candidate),i.socket.send({type:f.Candidate,payload:{candidate:e.candidate,type:o,connectionId:n},dst:t}))},e.oniceconnectionstatechange=()=>{switch(e.iceConnectionState){case"failed":g.log("iceConnectionState is failed, closing connections to "+t),this.connection.emit(h.Error,new Error("Negotiation of connection to "+t+" failed.")),this.connection.close();break;case"closed":g.log("iceConnectionState is closed, closing connections to "+t),this.connection.emit(h.Error,new Error("Connection to "+t+" closed.")),this.connection.close();break;case"disconnected":g.log("iceConnectionState changed to disconnected on the connection with "+t);break;case"completed":e.onicecandidate=r.noop}this.connection.emit(h.IceStateChanged,e.iceConnectionState)},g.log("Listening for data channel"),e.ondatachannel=e=>{g.log("Received data channel");const o=e.channel;i.getConnection(t,n).initialize(o)},g.log("Listening for remote stream"),e.ontrack=e=>{g.log("Received remote stream");const o=e.streams[0],s=i.getConnection(t,n);s.type===d.Media&&this._addStreamToMediaConnection(o,s)}}cleanup(){g.log("Cleaning up PeerConnection to "+this.connection.peer);const e=this.connection.peerConnection;if(!e)return;this.connection.peerConnection=null,e.onicecandidate=e.oniceconnectionstatechange=e.ondatachannel=e.ontrack=()=>{};let t=!1;if(this.connection.type===d.Data){const e=this.connection.dataChannel;e&&(t=!!e.readyState&&"closed"!==e.readyState)}("closed"!==e.signalingState||t)&&e.close()}async _makeOffer(){const e=this.connection.peerConnection,t=this.connection.provider;try{const n=await e.createOffer(this.connection.options.constraints);g.log("Created offer."),this.connection.options.sdpTransform&&"function"==typeof this.connection.options.sdpTransform&&(n.sdp=this.connection.options.sdpTransform(n.sdp)||n.sdp);try{await e.setLocalDescription(n),g.log("Set localDescription:",n,"for:"+this.connection.peer);let o={sdp:n,type:this.connection.type,connectionId:this.connection.connectionId,metadata:this.connection.metadata,browser:r.browser};if(this.connection.type===d.Data){const e=this.connection;o=a({},o,{label:e.label,reliable:e.reliable,serialization:e.serialization})}t.socket.send({type:f.Offer,payload:o,dst:this.connection.peer})}catch(e){"OperationError: Failed to set local offer sdp: Called in wrong state: kHaveRemoteOffer"!=e&&(t.emitError(p.WebRTC,e),g.log("Failed to setLocalDescription, ",e))}}catch(e){t.emitError(p.WebRTC,e),g.log("Failed to createOffer, ",e)}}async _makeAnswer(){const e=this.connection.peerConnection,t=this.connection.provider;try{const n=await e.createAnswer();g.log("Created answer."),this.connection.options.sdpTransform&&"function"==typeof this.connection.options.sdpTransform&&(n.sdp=this.connection.options.sdpTransform(n.sdp)||n.sdp);try{await e.setLocalDescription(n),g.log("Set localDescription:",n,"for:"+this.connection.peer),t.socket.send({type:f.Answer,payload:{sdp:n,type:this.connection.type,connectionId:this.connection.connectionId,browser:r.browser},dst:this.connection.peer})}catch(e){t.emitError(p.WebRTC,e),g.log("Failed to setLocalDescription, ",e)}}catch(e){t.emitError(p.WebRTC,e),g.log("Failed to create answer, ",e)}}async handleSDP(e,t){t=new RTCSessionDescription(t);const n=this.connection.peerConnection,o=this.connection.provider;g.log("Setting remote description",t);const i=this;try{await n.setRemoteDescription(t),g.log(`Set remoteDescription:${e} for:${this.connection.peer}`),"OFFER"===e&&await i._makeAnswer()}catch(e){o.emitError(p.WebRTC,e),g.log("Failed to setRemoteDescription, ",e)}}async handleCandidate(e){g.log("handleCandidate:",e);const t=e.candidate,n=e.sdpMLineIndex,o=e.sdpMid,i=this.connection.peerConnection,s=this.connection.provider;try{await i.addIceCandidate(new RTCIceCandidate({sdpMid:o,sdpMLineIndex:n,candidate:t})),g.log("Added ICE candidate for:"+this.connection.peer)}catch(e){s.emitError(p.WebRTC,e),g.log("Failed to handleCandidate, ",e)}}_addTracksToConnection(e,t){if(g.log(`add tracks from stream ${e.id} to peer connection`),!t.addTrack)return g.error("Your browser does't support RTCPeerConnection#addTrack. Ignored.");e.getTracks().forEach(n=>{t.addTrack(n,e)})}_addStreamToMediaConnection(e,t){g.log(`add stream ${e.id} to media connection ${t.connectionId}`),t.addStream(e)}}class y extends o{constructor(e,t,n){super(),this.peer=e,this.provider=t,this.options=n,this._open=!1,this.metadata=n.metadata}get open(){return this._open}}class C extends y{constructor(e,t,n){super(e,t,n),this._localStream=this.options._stream,this.connectionId=this.options.connectionId||C.ID_PREFIX+r.randomToken(),this._negotiator=new b(this),this._localStream&&this._negotiator.startConnection({_stream:this._localStream,originator:!0})}get type(){return d.Media}get localStream(){return this._localStream}get remoteStream(){return this._remoteStream}addStream(e){g.log("Receiving stream",e),this._remoteStream=e,super.emit(h.Stream,e)}handleMessage(e){const t=e.type,n=e.payload;switch(e.type){case f.Answer:this._negotiator.handleSDP(t,n.sdp),this._open=!0;break;case f.Candidate:this._negotiator.handleCandidate(n.candidate);break;default:g.warn(`Unrecognized message type:${t} from peer:${this.peer}`)}}answer(e,t={}){if(this._localStream)return void g.warn("Local stream already exists on this MediaConnection. Are you answering a call twice?");this._localStream=e,t&&t.sdpTransform&&(this.options.sdpTransform=t.sdpTransform),this._negotiator.startConnection(a({},this.options._payload,{_stream:e}));const n=this.provider._getMessages(this.connectionId);for(let e of n)this.handleMessage(e);this._open=!0}close(){this._negotiator&&(this._negotiator.cleanup(),this._negotiator=null),this._localStream=null,this._remoteStream=null,this.provider&&(this.provider._removeConnection(this),this.provider=null),this.options&&this.options._stream&&(this.options._stream=null),this.open&&(this._open=!1,super.emit(h.Close))}}C.ID_PREFIX="mc_";class w extends o{constructor(){super(),this.fileReader=new FileReader,this._queue=[],this._processing=!1,this.fileReader.onload=e=>{this._processing=!1,e.target&&this.emit("done",e.target.result),this.doNextTask()},this.fileReader.onerror=e=>{g.error("EncodingQueue error:",e),this._processing=!1,this.destroy(),this.emit("error",e)}}get queue(){return this._queue}get size(){return this.queue.length}get processing(){return this._processing}enque(e){this.queue.push(e),this.processing||this.doNextTask()}destroy(){this.fileReader.abort(),this._queue=[]}doNextTask(){0!==this.size&&(this.processing||(this._processing=!0,this.fileReader.readAsArrayBuffer(this.queue.shift())))}}class v extends y{constructor(e,t,n){super(e,t,n),this.stringify=JSON.stringify,this.parse=JSON.parse,this._buffer=[],this._bufferSize=0,this._buffering=!1,this._chunkedData={},this._encodingQueue=new w,this.connectionId=this.options.connectionId||v.ID_PREFIX+r.randomToken(),this.label=this.options.label||this.connectionId,this.serialization=this.options.serialization||u.Binary,this.reliable=!!this.options.reliable,this._encodingQueue.on("done",e=>{this._bufferedSend(e)}),this._encodingQueue.on("error",()=>{g.error(`DC#${this.connectionId}: Error occured in encoding from blob to arraybuffer, close DC`),this.close()}),this._negotiator=new b(this),this._negotiator.startConnection(this.options._payload||{originator:!0})}get type(){return d.Data}get dataChannel(){return this._dc}get bufferSize(){return this._bufferSize}initialize(e){this._dc=e,this._configureDataChannel()}_configureDataChannel(){r.supports.binaryBlob&&!r.supports.reliable||(this.dataChannel.binaryType="arraybuffer"),this.dataChannel.onopen=()=>{g.log(`DC#${this.connectionId} dc connection success`),this._open=!0,this.emit(h.Open)},this.dataChannel.onmessage=e=>{g.log(`DC#${this.connectionId} dc onmessage:`,e.data),this._handleDataMessage(e)},this.dataChannel.onclose=()=>{g.log(`DC#${this.connectionId} dc closed for:`,this.peer),this.close()}}_handleDataMessage({data:e}){const t=e.constructor;let n=e;if(this.serialization===u.Binary||this.serialization===u.BinaryUTF8){if(t===Blob)return void r.blobToArrayBuffer(e,e=>{const t=r.unpack(e);this.emit(h.Data,t)});if(t===ArrayBuffer)n=r.unpack(e);else if(t===String){const t=r.binaryStringToArrayBuffer(e);n=r.unpack(t)}}else this.serialization===u.JSON&&(n=this.parse(e));n.__peerData?this._handleChunk(n):super.emit(h.Data,n)}_handleChunk(e){const t=e.__peerData,n=this._chunkedData[t]||{data:[],count:0,total:e.total};if(n.data[e.n]=e.data,n.count++,this._chunkedData[t]=n,n.total===n.count){delete this._chunkedData[t];const e=new Blob(n.data);this._handleDataMessage({data:e})}}close(){this._buffer=[],this._bufferSize=0,this._chunkedData={},this._negotiator&&(this._negotiator.cleanup(),this._negotiator=null),this.provider&&(this.provider._removeConnection(this),this.provider=null),this.dataChannel&&(this.dataChannel.onopen=null,this.dataChannel.onmessage=null,this.dataChannel.onclose=null,this._dc=null),this._encodingQueue&&(this._encodingQueue.destroy(),this._encodingQueue.removeAllListeners(),this._encodingQueue=null),this.open&&(this._open=!1,super.emit(h.Close))}send(e,t){if(this.open)if(this.serialization===u.JSON)this._bufferedSend(this.stringify(e));else if(this.serialization===u.Binary||this.serialization===u.BinaryUTF8){const n=r.pack(e);if(!t&&n.size>r.chunkedMTU)return void this._sendChunks(n);r.supports.binaryBlob?this._bufferedSend(n):this._encodingQueue.enque(n)}else this._bufferedSend(e);else super.emit(h.Error,new Error("Connection is not open. You should listen for the `open` event before sending messages."))}_bufferedSend(e){!this._buffering&&this._trySend(e)||(this._buffer.push(e),this._bufferSize=this._buffer.length)}_trySend(e){if(!this.open)return!1;if(this.dataChannel.bufferedAmount>v.MAX_BUFFERED_AMOUNT)return this._buffering=!0,setTimeout(()=>{this._buffering=!1,this._tryBuffer()},50),!1;try{this.dataChannel.send(e)}catch(e){return g.error(`DC#:${this.connectionId} Error when sending:`,e),this._buffering=!0,this.close(),!1}return!0}_tryBuffer(){this.open&&0!==this._buffer.length&&this._trySend(this._buffer[0])&&(this._buffer.shift(),this._bufferSize=this._buffer.length,this._tryBuffer())}_sendChunks(e){const t=r.chunk(e);g.log(`DC#${this.connectionId} Try to send ${t.length} chunks...`);for(let e of t)this.send(e,!0)}handleMessage(e){const t=e.payload;switch(e.type){case f.Answer:this._negotiator.handleSDP(e.type,t.sdp);break;case f.Candidate:this._negotiator.handleCandidate(t.candidate);break;default:g.warn("Unrecognized message type:",e.type,"from peer:",this.peer)}}}v.ID_PREFIX="dc_",v.MAX_BUFFERED_AMOUNT=8388608;class S{constructor(e){this._options=e}_buildUrl(e){let t=(this._options.secure?"https://":"http://")+this._options.host+":"+this._options.port+this._options.path+this._options.key+"/"+e;return t+="?ts="+(new Date).getTime()+Math.random(),t}async retrieveId(){const e=this._buildUrl("id");try{const t=await fetch(e);if(200!==t.status)throw new Error("Error. Status:"+t.status);return t.text()}catch(e){g.error("Error retrieving ID",e);let t="";throw"/"===this._options.path&&this._options.host!==r.CLOUD_HOST&&(t=" If you passed in a `path` to your self-hosted PeerServer, you'll also need to pass in that same path when creating a new Peer."),new Error("Could not get an ID from the server."+t)}}async listAllPeers(){const e=this._buildUrl("peers");try{const t=await fetch(e);if(200!==t.status){if(401===t.status){let e="";throw e=this._options.host===r.CLOUD_HOST?"It looks like you're using the cloud server. You can email team@peerjs.com to enable peer listing for your API key.":"You need to enable `allow_discovery` on your self-hosted PeerServer to use this feature.",new Error("It doesn't look like you have permission to list peers IDs. "+e)}throw new Error("Error. Status:"+t.status)}return t.json()}catch(e){throw g.error("Error retrieving list peers",e),new Error("Could not get list peers from the server."+e)}}}class k extends o{constructor(e,t){let n;super(),this._id=null,this._lastServerId=null,this._destroyed=!1,this._disconnected=!1,this._open=!1,this._connections=new Map,this._lostMessages=new Map,e&&e.constructor==Object?t=e:e&&(n=e.toString()),t=a({debug:0,host:r.CLOUD_HOST,port:r.CLOUD_PORT,path:"/",key:k.DEFAULT_KEY,token:r.randomToken(),config:r.defaultConfig},t),this._options=t,"/"===this._options.host&&(this._options.host=window.location.hostname),this._options.path&&("/"!==this._options.path[0]&&(this._options.path="/"+this._options.path),"/"!==this._options.path[this._options.path.length-1]&&(this._options.path+="/")),void 0===this._options.secure&&this._options.host!==r.CLOUD_HOST?this._options.secure=r.isSecure():this._options.host==r.CLOUD_HOST&&(this._options.secure=!0),this._options.logFunction&&g.setLogFunction(this._options.logFunction),g.logLevel=this._options.debug||0,this._api=new S(t),this._socket=this._createServerConnection(),r.supports.audioVideo||r.supports.data?!n||r.validateId(n)?n?this._initialize(n):this._api.retrieveId().then(e=>this._initialize(e)).catch(e=>this._abort(p.ServerError,e)):this._delayedAbort(p.InvalidID,`ID "${n}" is invalid`):this._delayedAbort(p.BrowserIncompatible,"The current browser does not support WebRTC")}get id(){return this._id}get options(){return this._options}get open(){return this._open}get socket(){return this._socket}get connections(){const e=Object.create(null);for(let[t,n]of this._connections)e[t]=n;return e}get destroyed(){return this._destroyed}get disconnected(){return this._disconnected}_createServerConnection(){const e=new m(this._options.secure,this._options.host,this._options.port,this._options.path,this._options.key,this._options.pingInterval);return e.on(_.Message,e=>{this._handleMessage(e)}),e.on(_.Error,e=>{this._abort(p.SocketError,e)}),e.on(_.Disconnected,()=>{this.disconnected||(this.emitError(p.Network,"Lost connection to server."),this.disconnect())}),e.on(_.Close,()=>{this.disconnected||this._abort(p.SocketClosed,"Underlying socket is already closed.")}),e}_initialize(e){this._id=e,this.socket.start(e,this._options.token)}_handleMessage(e){const t=e.type,n=e.payload,o=e.src;switch(t){case f.Open:this._lastServerId=this.id,this._open=!0,this.emit(l.Open,this.id);break;case f.Error:this._abort(p.ServerError,n.msg);break;case f.IdTaken:this._abort(p.UnavailableID,`ID "${this.id}" is taken`);break;case f.InvalidKey:this._abort(p.InvalidKey,`API KEY "${this._options.key}" is invalid`);break;case f.Leave:g.log("Received leave message from "+o),this._cleanupPeer(o),this._connections.delete(o);break;case f.Expire:this.emitError(p.PeerUnavailable,"Could not connect to peer "+o);break;case f.Offer:{const e=n.connectionId;let t=this.getConnection(o,e);if(t&&(t.close(),g.warn("Offer received for existing Connection ID:"+e)),n.type===d.Media)t=new C(o,this,{connectionId:e,_payload:n,metadata:n.metadata}),this._addConnection(o,t),this.emit(l.Call,t);else{if(n.type!==d.Data)return void g.warn("Received malformed connection type:"+n.type);t=new v(o,this,{connectionId:e,_payload:n,metadata:n.metadata,label:n.label,serialization:n.serialization,reliable:n.reliable}),this._addConnection(o,t),this.emit(l.Connection,t)}const i=this._getMessages(e);for(let e of i)t.handleMessage(e);break}default:{if(!n)return void g.warn(`You received a malformed message from ${o} of type ${t}`);const i=n.connectionId,s=this.getConnection(o,i);s&&s.peerConnection?s.handleMessage(e):i?this._storeMessage(i,e):g.warn("You received an unrecognized message:",e);break}}}_storeMessage(e,t){this._lostMessages.has(e)||this._lostMessages.set(e,[]),this._lostMessages.get(e).push(t)}_getMessages(e){const t=this._lostMessages.get(e);return t?(this._lostMessages.delete(e),t):[]}connect(e,t={}){if(this.disconnected)return g.warn("You cannot connect to a new Peer because you called .disconnect() on this Peer and ended your connection with the server. You can create a new Peer to reconnect, or call reconnect on this peer if you believe its ID to still be available."),void this.emitError(p.Disconnected,"Cannot connect to new Peer after disconnecting from server.");const n=new v(e,this,t);return this._addConnection(e,n),n}call(e,t,n={}){if(this.disconnected)return g.warn("You cannot connect to a new Peer because you called .disconnect() on this Peer and ended your connection with the server. You can create a new Peer to reconnect."),void this.emitError(p.Disconnected,"Cannot connect to new Peer after disconnecting from server.");if(!t)return void g.error("To call a peer, you must provide a stream from your browser's `getUserMedia`.");n._stream=t;const o=new C(e,this,n);return this._addConnection(e,o),o}_addConnection(e,t){g.log(`add connection ${t.type}:${t.connectionId} to peerId:${e}`),this._connections.has(e)||this._connections.set(e,[]),this._connections.get(e).push(t)}_removeConnection(e){const t=this._connections.get(e.peer);if(t){const n=t.indexOf(e);-1!==n&&t.splice(n,1)}this._lostMessages.delete(e.connectionId)}getConnection(e,t){const n=this._connections.get(e);if(!n)return null;for(let e of n)if(e.connectionId===t)return e;return null}_delayedAbort(e,t){setTimeout(()=>{this._abort(e,t)},0)}_abort(e,t){g.error("Aborting!"),this.emitError(e,t),this._lastServerId?this.disconnect():this.destroy()}emitError(e,t){let n;g.error("Error:",t),n="string"==typeof t?new Error(t):t,n.type=e,this.emit(l.Error,n)}destroy(){this.destroyed||(g.log("Destroy peer with ID:"+this.id),this.disconnect(),this._cleanup(),this._destroyed=!0,this.emit(l.Close))}_cleanup(){for(let e of this._connections.keys())this._cleanupPeer(e),this._connections.delete(e);this.socket.removeAllListeners()}_cleanupPeer(e){const t=this._connections.get(e);if(t)for(let e of t)e.close()}disconnect(){if(this.disconnected)return;const e=this.id;g.log("Disconnect peer with ID:"+e),this._disconnected=!0,this._open=!1,this.socket.close(),this._lastServerId=e,this._id=null,this.emit(l.Disconnected,e)}reconnect(){if(this.disconnected&&!this.destroyed)g.log("Attempting reconnection to server with ID "+this._lastServerId),this._disconnected=!1,this._initialize(this._lastServerId);else{if(this.destroyed)throw new Error("This peer cannot reconnect to the server. It has already been destroyed.");if(this.disconnected||this.open)throw new Error(`Peer ${this.id} cannot reconnect because it is not disconnected from the server!`);g.error("In a hurry? We're still trying to make the initial connection!")}}listAllPeers(e=(e=>{})){this._api.listAllPeers().then(t=>e(t)).catch(e=>this._abort(p.ServerError,e))}}k.DEFAULT_KEY="peerjs";const I={Peer:k,util:r};window.peerjs=I,window.Peer=k;export default k;export{I as peerjs};
//# sourceMappingURL=peerjs.modern.js.map
