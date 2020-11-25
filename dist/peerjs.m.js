import{pack as e,unpack as t}from"peerjs-js-binarypack";import n from"webrtc-adapter";import{EventEmitter as o}from"eventemitter3";var i=new(function(){function e(){this.isIOS=["iPad","iPhone","iPod"].includes(navigator.platform),this.supportedBrowsers=["firefox","chrome","safari"],this.minFirefoxVersion=59,this.minChromeVersion=72,this.minSafariVersion=605}var t=e.prototype;return t.isWebRTCSupported=function(){return"undefined"!=typeof RTCPeerConnection},t.isBrowserSupported=function(){var e=this.getBrowser(),t=this.getVersion();return!!this.supportedBrowsers.includes(e)&&("chrome"===e?t>=this.minChromeVersion:"firefox"===e?t>=this.minFirefoxVersion:"safari"===e&&!this.isIOS&&t>=this.minSafariVersion)},t.getBrowser=function(){return n.browserDetails.browser},t.getVersion=function(){return n.browserDetails.version||0},t.isUnifiedPlanSupported=function(){var e,t=this.getBrowser(),o=n.browserDetails.version||0;if("chrome"===t&&o<72)return!1;if("firefox"===t&&o>=59)return!0;if(!window.RTCRtpTransceiver||!("currentDirection"in RTCRtpTransceiver.prototype))return!1;var i=!1;try{(e=new RTCPeerConnection).addTransceiver("audio"),i=!0}catch(e){}finally{e&&e.close()}return i},t.toString=function(){return"Supports: \n    browser:"+this.getBrowser()+" \n    version:"+this.getVersion()+" \n    isIOS:"+this.isIOS+" \n    isWebRTCSupported:"+this.isWebRTCSupported()+" \n    isBrowserSupported:"+this.isBrowserSupported()+" \n    isUnifiedPlanSupported:"+this.isUnifiedPlanSupported()},e}()),r={iceServers:[{urls:"stun:stun.l.google.com:19302"},{urls:"turn:0.peerjs.com:3478",username:"peerjs",credential:"peerjsp"}],sdpSemantics:"unified-plan"},s=new(function(){function n(){this.CLOUD_HOST="0.peerjs.com",this.CLOUD_PORT=443,this.chunkedBrowsers={Chrome:1,chrome:1},this.chunkedMTU=16300,this.defaultConfig=r,this.browser=i.getBrowser(),this.browserVersion=i.getVersion(),this.supports=function(){var e,t={browser:i.isBrowserSupported(),webRTC:i.isWebRTCSupported(),audioVideo:!1,data:!1,binaryBlob:!1,reliable:!1};if(!t.webRTC)return t;try{var n;e=new RTCPeerConnection(r),t.audioVideo=!0;try{n=e.createDataChannel("_PEERJSTEST",{ordered:!0}),t.data=!0,t.reliable=!!n.ordered;try{n.binaryType="blob",t.binaryBlob=!i.isIOS}catch(e){}}catch(e){}finally{n&&n.close()}}catch(e){}finally{e&&e.close()}return t}(),this.pack=e,this.unpack=t,this._dataCount=1}var o=n.prototype;return o.noop=function(){},o.validateId=function(e){return!e||/^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$/.test(e)},o.chunk=function(e){for(var t=[],n=e.size,o=Math.ceil(n/s.chunkedMTU),i=0,r=0;r<n;){var a=Math.min(n,r+s.chunkedMTU),c=e.slice(r,a);t.push({__peerData:this._dataCount,n:i,data:c,total:o}),r=a,i++}return this._dataCount++,t},o.blobToArrayBuffer=function(e,t){var n=new FileReader;return n.onload=function(e){e.target&&t(e.target.result)},n.readAsArrayBuffer(e),n},o.binaryStringToArrayBuffer=function(e){for(var t=new Uint8Array(e.length),n=0;n<e.length;n++)t[n]=255&e.charCodeAt(n);return t.buffer},o.randomToken=function(){return Math.random().toString(36).substr(2)},o.isSecure=function(){return"https:"===location.protocol},n}());function a(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function c(e,t,n){return t&&a(e.prototype,t),n&&a(e,n),e}function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function l(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}function u(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var h,f="PeerJS: ";!function(e){e[e.Disabled=0]="Disabled",e[e.Errors=1]="Errors",e[e.Warnings=2]="Warnings",e[e.All=3]="All"}(h||(h={}));var p,_,g,v,y,m,b,C=new(function(){function e(){this._logLevel=h.Disabled}var t=e.prototype;return t.log=function(){this._logLevel>=h.All&&this._print.apply(this,[h.All].concat([].slice.call(arguments)))},t.warn=function(){this._logLevel>=h.Warnings&&this._print.apply(this,[h.Warnings].concat([].slice.call(arguments)))},t.error=function(){this._logLevel>=h.Errors&&this._print.apply(this,[h.Errors].concat([].slice.call(arguments)))},t.setLogFunction=function(e){this._print=e},t._print=function(e){var t,n=[f].concat([].slice.call(arguments,1));for(var o in n)n[o]instanceof Error&&(n[o]="("+n[o].name+") "+n[o].message);if(e>=h.All)(t=console).log.apply(t,n);else if(e>=h.Warnings){var i;(i=console).warn.apply(i,["WARNING"].concat(n))}else if(e>=h.Errors){var r;(r=console).error.apply(r,["ERROR"].concat(n))}},c(e,[{key:"logLevel",get:function(){return this._logLevel},set:function(e){this._logLevel=e}}]),e}());!function(e){e.Open="open",e.Stream="stream",e.Data="data",e.Close="close",e.Error="error",e.IceStateChanged="iceStateChanged"}(p||(p={})),function(e){e.Data="data",e.Media="media"}(_||(_={})),function(e){e.Open="open",e.Close="close",e.Connection="connection",e.Call="call",e.Disconnected="disconnected",e.Error="error"}(g||(g={})),function(e){e.BrowserIncompatible="browser-incompatible",e.Disconnected="disconnected",e.InvalidID="invalid-id",e.InvalidKey="invalid-key",e.Network="network",e.PeerUnavailable="peer-unavailable",e.SslUnavailable="ssl-unavailable",e.ServerError="server-error",e.SocketError="socket-error",e.SocketClosed="socket-closed",e.UnavailableID="unavailable-id",e.WebRTC="webrtc"}(v||(v={})),function(e){e.Binary="binary",e.BinaryUTF8="binary-utf8",e.JSON="json"}(y||(y={})),function(e){e.Message="message",e.Disconnected="disconnected",e.Error="error",e.Close="close"}(m||(m={})),function(e){e.Heartbeat="HEARTBEAT",e.Candidate="CANDIDATE",e.Offer="OFFER",e.Answer="ANSWER",e.Open="OPEN",e.Error="ERROR",e.IdTaken="ID-TAKEN",e.InvalidKey="INVALID-KEY",e.Leave="LEAVE",e.Expire="EXPIRE"}(b||(b={}));var k=function(e){function t(t,n,o,i,r,s){var a;return void 0===s&&(s=5e3),(a=e.call(this)||this).pingInterval=s,a._disconnected=!0,a._messagesQueue=[],a._baseUrl=(t?"wss://":"ws://")+n+":"+o+i+"peerjs?key="+r,a}l(t,e);var n=t.prototype;return n.start=function(e,t){var n=this;this._id=e,!this._socket&&this._disconnected&&(this._socket=new WebSocket(this._baseUrl+"&id="+e+"&token="+t),this._disconnected=!1,this._socket.onmessage=function(e){var t;try{t=JSON.parse(e.data),C.log("Server message received:",t)}catch(t){return void C.log("Invalid server message",e.data)}n.emit(m.Message,t)},this._socket.onclose=function(e){n._disconnected||(C.log("Socket closed.",e),n._cleanup(),n._disconnected=!0,n.emit(m.Disconnected))},this._socket.onopen=function(){n._disconnected||(n._sendQueuedMessages(),C.log("Socket open"),n._scheduleHeartbeat())})},n._scheduleHeartbeat=function(){var e=this;this._wsPingTimer=setTimeout(function(){e._sendHeartbeat()},this.pingInterval)},n._sendHeartbeat=function(){if(this._wsOpen()){var e=JSON.stringify({type:b.Heartbeat});this._socket.send(e),this._scheduleHeartbeat()}else C.log("Cannot send heartbeat, because socket closed")},n._wsOpen=function(){return!!this._socket&&1===this._socket.readyState},n._sendQueuedMessages=function(){var e=[].concat(this._messagesQueue);this._messagesQueue=[];var t=e,n=Array.isArray(t),o=0;for(t=n?t:t[Symbol.iterator]();;){var i;if(n){if(o>=t.length)break;i=t[o++]}else{if((o=t.next()).done)break;i=o.value}this.send(i)}},n.send=function(e){if(!this._disconnected)if(this._id)if(e.type){if(this._wsOpen()){var t=JSON.stringify(e);this._socket.send(t)}}else this.emit(m.Error,"Invalid message");else this._messagesQueue.push(e)},n.close=function(){this._disconnected||(this._cleanup(),this._disconnected=!0)},n._cleanup=function(){this._socket&&(this._socket.onopen=this._socket.onmessage=this._socket.onclose=null,this._socket.close(),this._socket=void 0),clearTimeout(this._wsPingTimer)},t}(o);function w(e,t){try{var n=e()}catch(e){return t(e)}return n&&n.then?n.then(void 0,t):n}var S=function(){function e(e){this.connection=e}var t=e.prototype;return t.startConnection=function(e){var t=this._startPeerConnection();if(this.connection.peerConnection=t,this.connection.type===_.Media&&e._stream&&this._addTracksToConnection(e._stream,t),e.originator){if(this.connection.type===_.Data){var n=this.connection,o=t.createDataChannel(n.label,{ordered:!!e.reliable});n.initialize(o)}this._makeOffer()}else this.handleSDP("OFFER",e.sdp)},t._startPeerConnection=function(){C.log("Creating RTCPeerConnection.");var e=new RTCPeerConnection(this.connection.provider.options.config);return this._setupListeners(e),e},t._setupListeners=function(e){var t=this,n=this.connection.peer,o=this.connection.connectionId,i=this.connection.type,r=this.connection.provider;C.log("Listening for ICE candidates."),e.onicecandidate=function(e){e.candidate&&e.candidate.candidate&&(C.log("Received ICE candidates for "+n+":",e.candidate),r.socket.send({type:b.Candidate,payload:{candidate:e.candidate,type:i,connectionId:o},dst:n}))},e.oniceconnectionstatechange=function(){switch(e.iceConnectionState){case"failed":C.log("iceConnectionState is failed, closing connections to "+n),t.connection.emit(p.Error,new Error("Negotiation of connection to "+n+" failed.")),t.connection.close();break;case"closed":C.log("iceConnectionState is closed, closing connections to "+n),t.connection.emit(p.Error,new Error("Connection to "+n+" closed.")),t.connection.close();break;case"disconnected":C.log("iceConnectionState changed to disconnected on the connection with "+n);break;case"completed":e.onicecandidate=s.noop}t.connection.emit(p.IceStateChanged,e.iceConnectionState)},C.log("Listening for data channel"),e.ondatachannel=function(e){C.log("Received data channel");var t=e.channel;r.getConnection(n,o).initialize(t)},C.log("Listening for remote stream"),e.ontrack=function(e){C.log("Received remote stream");var i=e.streams[0],s=r.getConnection(n,o);s.type===_.Media&&t._addStreamToMediaConnection(i,s)}},t.cleanup=function(){C.log("Cleaning up PeerConnection to "+this.connection.peer);var e=this.connection.peerConnection;if(e){this.connection.peerConnection=null,e.onicecandidate=e.oniceconnectionstatechange=e.ondatachannel=e.ontrack=function(){};var t=!1;if(this.connection.type===_.Data){var n=this.connection.dataChannel;n&&(t=!!n.readyState&&"closed"!==n.readyState)}("closed"!==e.signalingState||t)&&e.close()}},t._makeOffer=function(){try{var e=this,t=e.connection.peerConnection,n=e.connection.provider,o=w(function(){return Promise.resolve(t.createOffer(e.connection.options.constraints)).then(function(o){C.log("Created offer."),e.connection.options.sdpTransform&&"function"==typeof e.connection.options.sdpTransform&&(o.sdp=e.connection.options.sdpTransform(o.sdp)||o.sdp);var i=w(function(){return Promise.resolve(t.setLocalDescription(o)).then(function(){C.log("Set localDescription:",o,"for:"+e.connection.peer);var t={sdp:o,type:e.connection.type,connectionId:e.connection.connectionId,metadata:e.connection.metadata,browser:s.browser};if(e.connection.type===_.Data){var i=e.connection;t=d({},t,{label:i.label,reliable:i.reliable,serialization:i.serialization})}n.socket.send({type:b.Offer,payload:t,dst:e.connection.peer})})},function(e){"OperationError: Failed to set local offer sdp: Called in wrong state: kHaveRemoteOffer"!=e&&(n.emitError(v.WebRTC,e),C.log("Failed to setLocalDescription, ",e))});if(i&&i.then)return i.then(function(){})})},function(e){n.emitError(v.WebRTC,e),C.log("Failed to createOffer, ",e)});return Promise.resolve(o&&o.then?o.then(function(){}):void 0)}catch(e){return Promise.reject(e)}},t._makeAnswer=function(){try{var e=this,t=e.connection.peerConnection,n=e.connection.provider,o=w(function(){return Promise.resolve(t.createAnswer()).then(function(o){C.log("Created answer."),e.connection.options.sdpTransform&&"function"==typeof e.connection.options.sdpTransform&&(o.sdp=e.connection.options.sdpTransform(o.sdp)||o.sdp);var i=w(function(){return Promise.resolve(t.setLocalDescription(o)).then(function(){C.log("Set localDescription:",o,"for:"+e.connection.peer),n.socket.send({type:b.Answer,payload:{sdp:o,type:e.connection.type,connectionId:e.connection.connectionId,browser:s.browser},dst:e.connection.peer})})},function(e){n.emitError(v.WebRTC,e),C.log("Failed to setLocalDescription, ",e)});if(i&&i.then)return i.then(function(){})})},function(e){n.emitError(v.WebRTC,e),C.log("Failed to create answer, ",e)});return Promise.resolve(o&&o.then?o.then(function(){}):void 0)}catch(e){return Promise.reject(e)}},t.handleSDP=function(e,t){try{var n=this;t=new RTCSessionDescription(t);var o=n.connection.peerConnection,i=n.connection.provider;C.log("Setting remote description",t);var r=n,s=w(function(){return Promise.resolve(o.setRemoteDescription(t)).then(function(){C.log("Set remoteDescription:"+e+" for:"+n.connection.peer);var t=function(){if("OFFER"===e)return Promise.resolve(r._makeAnswer()).then(function(){})}();if(t&&t.then)return t.then(function(){})})},function(e){i.emitError(v.WebRTC,e),C.log("Failed to setRemoteDescription, ",e)});return Promise.resolve(s&&s.then?s.then(function(){}):void 0)}catch(e){return Promise.reject(e)}},t.handleCandidate=function(e){try{var t=this;C.log("handleCandidate:",e);var n=e.candidate,o=e.sdpMLineIndex,i=e.sdpMid,r=t.connection.peerConnection,s=t.connection.provider,a=w(function(){return Promise.resolve(r.addIceCandidate(new RTCIceCandidate({sdpMid:i,sdpMLineIndex:o,candidate:n}))).then(function(){C.log("Added ICE candidate for:"+t.connection.peer)})},function(e){s.emitError(v.WebRTC,e),C.log("Failed to handleCandidate, ",e)});return Promise.resolve(a&&a.then?a.then(function(){}):void 0)}catch(e){return Promise.reject(e)}},t._addTracksToConnection=function(e,t){if(C.log("add tracks from stream "+e.id+" to peer connection"),!t.addTrack)return C.error("Your browser does't support RTCPeerConnection#addTrack. Ignored.");e.getTracks().forEach(function(n){t.addTrack(n,e)})},t._addStreamToMediaConnection=function(e,t){C.log("add stream "+e.id+" to media connection "+t.connectionId),t.addStream(e)},e}(),I=function(e){function t(t,n,o){var i;return(i=e.call(this)||this).peer=t,i.provider=n,i.options=o,i._open=!1,i.metadata=o.metadata,i}return l(t,e),c(t,[{key:"open",get:function(){return this._open}}]),t}(o),D=function(e){function t(n,o,i){var r;return(r=e.call(this,n,o,i)||this)._localStream=r.options._stream,r.connectionId=r.options.connectionId||t.ID_PREFIX+s.randomToken(),r._negotiator=new S(u(r)),r._localStream&&r._negotiator.startConnection({_stream:r._localStream,originator:!0}),r}l(t,e);var n=t.prototype;return n.addStream=function(t){C.log("Receiving stream",t),this._remoteStream=t,e.prototype.emit.call(this,p.Stream,t)},n.handleMessage=function(e){var t=e.type,n=e.payload;switch(e.type){case b.Answer:this._negotiator.handleSDP(t,n.sdp),this._open=!0;break;case b.Candidate:this._negotiator.handleCandidate(n.candidate);break;default:C.warn("Unrecognized message type:"+t+" from peer:"+this.peer)}},n.answer=function(e,t){if(void 0===t&&(t={}),this._localStream)C.warn("Local stream already exists on this MediaConnection. Are you answering a call twice?");else{this._localStream=e,t&&t.sdpTransform&&(this.options.sdpTransform=t.sdpTransform),this._negotiator.startConnection(d({},this.options._payload,{_stream:e}));var n=this.provider._getMessages(this.connectionId),o=Array.isArray(n),i=0;for(n=o?n:n[Symbol.iterator]();;){var r;if(o){if(i>=n.length)break;r=n[i++]}else{if((i=n.next()).done)break;r=i.value}this.handleMessage(r)}this._open=!0}},n.close=function(){this._negotiator&&(this._negotiator.cleanup(),this._negotiator=null),this._localStream=null,this._remoteStream=null,this.provider&&(this.provider._removeConnection(this),this.provider=null),this.options&&this.options._stream&&(this.options._stream=null),this.open&&(this._open=!1,e.prototype.emit.call(this,p.Close))},c(t,[{key:"type",get:function(){return _.Media}},{key:"localStream",get:function(){return this._localStream}},{key:"remoteStream",get:function(){return this._remoteStream}}]),t}(I);D.ID_PREFIX="mc_";var T=function(e){function t(){var t;return(t=e.call(this)||this).fileReader=new FileReader,t._queue=[],t._processing=!1,t.fileReader.onload=function(e){t._processing=!1,e.target&&t.emit("done",e.target.result),t.doNextTask()},t.fileReader.onerror=function(e){C.error("EncodingQueue error:",e),t._processing=!1,t.destroy(),t.emit("error",e)},t}l(t,e);var n=t.prototype;return n.enque=function(e){this.queue.push(e),this.processing||this.doNextTask()},n.destroy=function(){this.fileReader.abort(),this._queue=[]},n.doNextTask=function(){0!==this.size&&(this.processing||(this._processing=!0,this.fileReader.readAsArrayBuffer(this.queue.shift())))},c(t,[{key:"queue",get:function(){return this._queue}},{key:"size",get:function(){return this.queue.length}},{key:"processing",get:function(){return this._processing}}]),t}(o),E=function(e){function t(n,o,i){var r;return(r=e.call(this,n,o,i)||this).stringify=JSON.stringify,r.parse=JSON.parse,r._buffer=[],r._bufferSize=0,r._buffering=!1,r._chunkedData={},r._encodingQueue=new T,r.connectionId=r.options.connectionId||t.ID_PREFIX+s.randomToken(),r.label=r.options.label||r.connectionId,r.serialization=r.options.serialization||y.Binary,r.reliable=!!r.options.reliable,r._encodingQueue.on("done",function(e){r._bufferedSend(e)}),r._encodingQueue.on("error",function(){C.error("DC#"+r.connectionId+": Error occured in encoding from blob to arraybuffer, close DC"),r.close()}),r._negotiator=new S(u(r)),r._negotiator.startConnection(r.options._payload||{originator:!0}),r}l(t,e);var n=t.prototype;return n.initialize=function(e){this._dc=e,this._configureDataChannel()},n._configureDataChannel=function(){var e=this;s.supports.binaryBlob&&!s.supports.reliable||(this.dataChannel.binaryType="arraybuffer"),this.dataChannel.onopen=function(){C.log("DC#"+e.connectionId+" dc connection success"),e._open=!0,e.emit(p.Open)},this.dataChannel.onmessage=function(t){C.log("DC#"+e.connectionId+" dc onmessage:",t.data),e._handleDataMessage(t)},this.dataChannel.onclose=function(){C.log("DC#"+e.connectionId+" dc closed for:",e.peer),e.close()}},n._handleDataMessage=function(t){var n=this,o=t.data,i=o.constructor,r=o;if(this.serialization===y.Binary||this.serialization===y.BinaryUTF8){if(i===Blob)return void s.blobToArrayBuffer(o,function(e){var t=s.unpack(e);n.emit(p.Data,t)});if(i===ArrayBuffer)r=s.unpack(o);else if(i===String){var a=s.binaryStringToArrayBuffer(o);r=s.unpack(a)}}else this.serialization===y.JSON&&(r=this.parse(o));r.__peerData?this._handleChunk(r):e.prototype.emit.call(this,p.Data,r)},n._handleChunk=function(e){var t=e.__peerData,n=this._chunkedData[t]||{data:[],count:0,total:e.total};if(n.data[e.n]=e.data,n.count++,this._chunkedData[t]=n,n.total===n.count){delete this._chunkedData[t];var o=new Blob(n.data);this._handleDataMessage({data:o})}},n.close=function(){this._buffer=[],this._bufferSize=0,this._chunkedData={},this._negotiator&&(this._negotiator.cleanup(),this._negotiator=null),this.provider&&(this.provider._removeConnection(this),this.provider=null),this.dataChannel&&(this.dataChannel.onopen=null,this.dataChannel.onmessage=null,this.dataChannel.onclose=null,this._dc=null),this._encodingQueue&&(this._encodingQueue.destroy(),this._encodingQueue.removeAllListeners(),this._encodingQueue=null),this.open&&(this._open=!1,e.prototype.emit.call(this,p.Close))},n.send=function(t,n){if(this.open)if(this.serialization===y.JSON)this._bufferedSend(this.stringify(t));else if(this.serialization===y.Binary||this.serialization===y.BinaryUTF8){var o=s.pack(t);if(!n&&o.size>s.chunkedMTU)return void this._sendChunks(o);s.supports.binaryBlob?this._bufferedSend(o):this._encodingQueue.enque(o)}else this._bufferedSend(t);else e.prototype.emit.call(this,p.Error,new Error("Connection is not open. You should listen for the `open` event before sending messages."))},n._bufferedSend=function(e){!this._buffering&&this._trySend(e)||(this._buffer.push(e),this._bufferSize=this._buffer.length)},n._trySend=function(e){var n=this;if(!this.open)return!1;if(this.dataChannel.bufferedAmount>t.MAX_BUFFERED_AMOUNT)return this._buffering=!0,setTimeout(function(){n._buffering=!1,n._tryBuffer()},50),!1;try{this.dataChannel.send(e)}catch(e){return C.error("DC#:"+this.connectionId+" Error when sending:",e),this._buffering=!0,this.close(),!1}return!0},n._tryBuffer=function(){this.open&&0!==this._buffer.length&&this._trySend(this._buffer[0])&&(this._buffer.shift(),this._bufferSize=this._buffer.length,this._tryBuffer())},n._sendChunks=function(e){var t=s.chunk(e);C.log("DC#"+this.connectionId+" Try to send "+t.length+" chunks...");var n=t,o=Array.isArray(n),i=0;for(n=o?n:n[Symbol.iterator]();;){var r;if(o){if(i>=n.length)break;r=n[i++]}else{if((i=n.next()).done)break;r=i.value}this.send(r,!0)}},n.handleMessage=function(e){var t=e.payload;switch(e.type){case b.Answer:this._negotiator.handleSDP(e.type,t.sdp);break;case b.Candidate:this._negotiator.handleCandidate(t.candidate);break;default:C.warn("Unrecognized message type:",e.type,"from peer:",this.peer)}},c(t,[{key:"type",get:function(){return _.Data}},{key:"dataChannel",get:function(){return this._dc}},{key:"bufferSize",get:function(){return this._bufferSize}}]),t}(I);function P(e,t){try{var n=e()}catch(e){return t(e)}return n&&n.then?n.then(void 0,t):n}E.ID_PREFIX="dc_",E.MAX_BUFFERED_AMOUNT=8388608;var A=function(){function e(e){this._options=e}var t=e.prototype;return t._buildUrl=function(e){return(this._options.secure?"https://":"http://")+this._options.host+":"+this._options.port+this._options.path+this._options.key+"/"+e+"?ts="+(new Date).getTime()+Math.random()},t.retrieveId=function(){try{var e=this,t=e._buildUrl("id");return Promise.resolve(P(function(){return Promise.resolve(fetch(t)).then(function(e){if(200!==e.status)throw new Error("Error. Status:"+e.status);return e.text()})},function(t){C.error("Error retrieving ID",t);var n="";throw"/"===e._options.path&&e._options.host!==s.CLOUD_HOST&&(n=" If you passed in a `path` to your self-hosted PeerServer, you'll also need to pass in that same path when creating a new Peer."),new Error("Could not get an ID from the server."+n)}))}catch(e){return Promise.reject(e)}},t.listAllPeers=function(){try{var e=this,t=e._buildUrl("peers");return Promise.resolve(P(function(){return Promise.resolve(fetch(t)).then(function(t){if(200!==t.status){if(401===t.status)throw new Error("It doesn't look like you have permission to list peers IDs. "+(e._options.host===s.CLOUD_HOST?"It looks like you're using the cloud server. You can email team@peerjs.com to enable peer listing for your API key.":"You need to enable `allow_discovery` on your self-hosted PeerServer to use this feature."));throw new Error("Error. Status:"+t.status)}return t.json()})},function(e){throw C.error("Error retrieving list peers",e),new Error("Could not get list peers from the server."+e)}))}catch(e){return Promise.reject(e)}},e}(),R=function(e){function t(n,o){var i,r;return(i=e.call(this)||this)._id=null,i._lastServerId=null,i._destroyed=!1,i._disconnected=!1,i._open=!1,i._connections=new Map,i._lostMessages=new Map,n&&n.constructor==Object?o=n:n&&(r=n.toString()),o=d({debug:0,host:s.CLOUD_HOST,port:s.CLOUD_PORT,path:"/",key:t.DEFAULT_KEY,token:s.randomToken(),config:s.defaultConfig},o),i._options=o,"/"===i._options.host&&(i._options.host=window.location.hostname),i._options.path&&("/"!==i._options.path[0]&&(i._options.path="/"+i._options.path),"/"!==i._options.path[i._options.path.length-1]&&(i._options.path+="/")),void 0===i._options.secure&&i._options.host!==s.CLOUD_HOST?i._options.secure=s.isSecure():i._options.host==s.CLOUD_HOST&&(i._options.secure=!0),i._options.logFunction&&C.setLogFunction(i._options.logFunction),C.logLevel=i._options.debug||0,i._api=new A(o),i._socket=i._createServerConnection(),s.supports.audioVideo||s.supports.data?r&&!s.validateId(r)?(i._delayedAbort(v.InvalidID,'ID "'+r+'" is invalid'),u(i)):(r?i._initialize(r):i._api.retrieveId().then(function(e){return i._initialize(e)}).catch(function(e){return i._abort(v.ServerError,e)}),i):(i._delayedAbort(v.BrowserIncompatible,"The current browser does not support WebRTC"),u(i))}l(t,e);var n=t.prototype;return n._createServerConnection=function(){var e=this,t=new k(this._options.secure,this._options.host,this._options.port,this._options.path,this._options.key,this._options.pingInterval);return t.on(m.Message,function(t){e._handleMessage(t)}),t.on(m.Error,function(t){e._abort(v.SocketError,t)}),t.on(m.Disconnected,function(){e.disconnected||(e.emitError(v.Network,"Lost connection to server."),e.disconnect())}),t.on(m.Close,function(){e.disconnected||e._abort(v.SocketClosed,"Underlying socket is already closed.")}),t},n._initialize=function(e){this._id=e,this.socket.start(e,this._options.token)},n._handleMessage=function(e){var t=e.type,n=e.payload,o=e.src;switch(t){case b.Open:this._lastServerId=this.id,this._open=!0,this.emit(g.Open,this.id);break;case b.Error:this._abort(v.ServerError,n.msg);break;case b.IdTaken:this._abort(v.UnavailableID,'ID "'+this.id+'" is taken');break;case b.InvalidKey:this._abort(v.InvalidKey,'API KEY "'+this._options.key+'" is invalid');break;case b.Leave:C.log("Received leave message from "+o),this._cleanupPeer(o),this._connections.delete(o);break;case b.Expire:this.emitError(v.PeerUnavailable,"Could not connect to peer "+o);break;case b.Offer:var i=n.connectionId,r=this.getConnection(o,i);if(r&&(r.close(),C.warn("Offer received for existing Connection ID:"+i)),n.type===_.Media)r=new D(o,this,{connectionId:i,_payload:n,metadata:n.metadata}),this._addConnection(o,r),this.emit(g.Call,r);else{if(n.type!==_.Data)return void C.warn("Received malformed connection type:"+n.type);r=new E(o,this,{connectionId:i,_payload:n,metadata:n.metadata,label:n.label,serialization:n.serialization,reliable:n.reliable}),this._addConnection(o,r),this.emit(g.Connection,r)}var s=this._getMessages(i),a=Array.isArray(s),c=0;for(s=a?s:s[Symbol.iterator]();;){var d;if(a){if(c>=s.length)break;d=s[c++]}else{if((c=s.next()).done)break;d=c.value}r.handleMessage(d)}break;default:if(!n)return void C.warn("You received a malformed message from "+o+" of type "+t);var l=n.connectionId,u=this.getConnection(o,l);u&&u.peerConnection?u.handleMessage(e):l?this._storeMessage(l,e):C.warn("You received an unrecognized message:",e)}},n._storeMessage=function(e,t){this._lostMessages.has(e)||this._lostMessages.set(e,[]),this._lostMessages.get(e).push(t)},n._getMessages=function(e){var t=this._lostMessages.get(e);return t?(this._lostMessages.delete(e),t):[]},n.connect=function(e,t){if(void 0===t&&(t={}),this.disconnected)return C.warn("You cannot connect to a new Peer because you called .disconnect() on this Peer and ended your connection with the server. You can create a new Peer to reconnect, or call reconnect on this peer if you believe its ID to still be available."),void this.emitError(v.Disconnected,"Cannot connect to new Peer after disconnecting from server.");var n=new E(e,this,t);return this._addConnection(e,n),n},n.call=function(e,t,n){if(void 0===n&&(n={}),this.disconnected)return C.warn("You cannot connect to a new Peer because you called .disconnect() on this Peer and ended your connection with the server. You can create a new Peer to reconnect."),void this.emitError(v.Disconnected,"Cannot connect to new Peer after disconnecting from server.");if(t){n._stream=t;var o=new D(e,this,n);return this._addConnection(e,o),o}C.error("To call a peer, you must provide a stream from your browser's `getUserMedia`.")},n._addConnection=function(e,t){C.log("add connection "+t.type+":"+t.connectionId+" to peerId:"+e),this._connections.has(e)||this._connections.set(e,[]),this._connections.get(e).push(t)},n._removeConnection=function(e){var t=this._connections.get(e.peer);if(t){var n=t.indexOf(e);-1!==n&&t.splice(n,1)}this._lostMessages.delete(e.connectionId)},n.getConnection=function(e,t){var n=this._connections.get(e);if(!n)return null;var o=n,i=Array.isArray(o),r=0;for(o=i?o:o[Symbol.iterator]();;){var s;if(i){if(r>=o.length)break;s=o[r++]}else{if((r=o.next()).done)break;s=r.value}if(s.connectionId===t)return s}return null},n._delayedAbort=function(e,t){var n=this;setTimeout(function(){n._abort(e,t)},0)},n._abort=function(e,t){C.error("Aborting!"),this.emitError(e,t),this._lastServerId?this.disconnect():this.destroy()},n.emitError=function(e,t){var n;C.error("Error:",t),(n="string"==typeof t?new Error(t):t).type=e,this.emit(g.Error,n)},n.destroy=function(){this.destroyed||(C.log("Destroy peer with ID:"+this.id),this.disconnect(),this._cleanup(),this._destroyed=!0,this.emit(g.Close))},n._cleanup=function(){var e=this._connections.keys(),t=Array.isArray(e),n=0;for(e=t?e:e[Symbol.iterator]();;){var o;if(t){if(n>=e.length)break;o=e[n++]}else{if((n=e.next()).done)break;o=n.value}var i=o;this._cleanupPeer(i),this._connections.delete(i)}this.socket.removeAllListeners()},n._cleanupPeer=function(e){var t=this._connections.get(e);if(t){var n=t,o=Array.isArray(n),i=0;for(n=o?n:n[Symbol.iterator]();;){var r;if(o){if(i>=n.length)break;r=n[i++]}else{if((i=n.next()).done)break;r=i.value}r.close()}}},n.disconnect=function(){if(!this.disconnected){var e=this.id;C.log("Disconnect peer with ID:"+e),this._disconnected=!0,this._open=!1,this.socket.close(),this._lastServerId=e,this._id=null,this.emit(g.Disconnected,e)}},n.reconnect=function(){if(this.disconnected&&!this.destroyed)C.log("Attempting reconnection to server with ID "+this._lastServerId),this._disconnected=!1,this._initialize(this._lastServerId);else{if(this.destroyed)throw new Error("This peer cannot reconnect to the server. It has already been destroyed.");if(this.disconnected||this.open)throw new Error("Peer "+this.id+" cannot reconnect because it is not disconnected from the server!");C.error("In a hurry? We're still trying to make the initial connection!")}},n.listAllPeers=function(e){var t=this;void 0===e&&(e=function(e){}),this._api.listAllPeers().then(function(t){return e(t)}).catch(function(e){return t._abort(v.ServerError,e)})},c(t,[{key:"id",get:function(){return this._id}},{key:"options",get:function(){return this._options}},{key:"open",get:function(){return this._open}},{key:"socket",get:function(){return this._socket}},{key:"connections",get:function(){var e=Object.create(null),t=this._connections,n=Array.isArray(t),o=0;for(t=n?t:t[Symbol.iterator]();;){var i;if(n){if(o>=t.length)break;i=t[o++]}else{if((o=t.next()).done)break;i=o.value}e[i[0]]=i[1]}return e}},{key:"destroyed",get:function(){return this._destroyed}},{key:"disconnected",get:function(){return this._disconnected}}]),t}(o);R.DEFAULT_KEY="peerjs";var O={Peer:R,util:s};window.peerjs=O,window.Peer=R;export default R;export{O as peerjs};
//# sourceMappingURL=peerjs.m.js.map
