// Generated by purs version 0.14.1
"use strict";
var $foreign = require("./foreign.js");
var Unsafe_Coerce = require("../Unsafe.Coerce/index.js");
var Web_Internal_FFI = require("../Web.Internal.FFI/index.js");
var toParentNode = Unsafe_Coerce.unsafeCoerce;
var toNonDocumentTypeChildNode = Unsafe_Coerce.unsafeCoerce;
var toNode = Unsafe_Coerce.unsafeCoerce;
var toHTMLMediaElement = Unsafe_Coerce.unsafeCoerce;
var toHTMLElement = Unsafe_Coerce.unsafeCoerce;
var toEventTarget = Unsafe_Coerce.unsafeCoerce;
var toElement = Unsafe_Coerce.unsafeCoerce;
var toChildNode = Unsafe_Coerce.unsafeCoerce;
var fromParentNode = Web_Internal_FFI.unsafeReadProtoTagged("HTMLVideoElement");
var fromNonDocumentTypeChildNode = Web_Internal_FFI.unsafeReadProtoTagged("HTMLVideoElement");
var fromNode = Web_Internal_FFI.unsafeReadProtoTagged("HTMLVideoElement");
var fromHTMLMediaElement = Web_Internal_FFI.unsafeReadProtoTagged("HTMLVideoElement");
var fromHTMLElement = Web_Internal_FFI.unsafeReadProtoTagged("HTMLVideoElement");
var fromEventTarget = Web_Internal_FFI.unsafeReadProtoTagged("HTMLVideoElement");
var fromElement = Web_Internal_FFI.unsafeReadProtoTagged("HTMLVideoElement");
var fromChildNode = Web_Internal_FFI.unsafeReadProtoTagged("HTMLVideoElement");
module.exports = {
    fromHTMLMediaElement: fromHTMLMediaElement,
    fromHTMLElement: fromHTMLElement,
    fromElement: fromElement,
    fromNode: fromNode,
    fromChildNode: fromChildNode,
    fromNonDocumentTypeChildNode: fromNonDocumentTypeChildNode,
    fromParentNode: fromParentNode,
    fromEventTarget: fromEventTarget,
    toHTMLMediaElement: toHTMLMediaElement,
    toHTMLElement: toHTMLElement,
    toElement: toElement,
    toNode: toNode,
    toChildNode: toChildNode,
    toNonDocumentTypeChildNode: toNonDocumentTypeChildNode,
    toParentNode: toParentNode,
    toEventTarget: toEventTarget,
    width: $foreign.width,
    setWidth: $foreign.setWidth,
    height: $foreign.height,
    setHeight: $foreign.setHeight,
    videoWidth: $foreign.videoWidth,
    videoHeight: $foreign.videoHeight,
    poster: $foreign.poster,
    setPoster: $foreign.setPoster
};
