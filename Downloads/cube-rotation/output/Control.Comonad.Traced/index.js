// Generated by purs version 0.14.1
"use strict";
var Control_Comonad_Traced_Class = require("../Control.Comonad.Traced.Class/index.js");
var Control_Comonad_Traced_Trans = require("../Control.Comonad.Traced.Trans/index.js");
var Data_Identity = require("../Data.Identity/index.js");
var Data_Newtype = require("../Data.Newtype/index.js");
var traced = function ($2) {
    return Control_Comonad_Traced_Trans.TracedT(Data_Identity.Identity($2));
};
var runTraced = function (v) {
    return Data_Newtype.unwrap()(v);
};
module.exports = {
    runTraced: runTraced,
    traced: traced,
    ComonadTraced: Control_Comonad_Traced_Class.ComonadTraced,
    censor: Control_Comonad_Traced_Class.censor,
    listen: Control_Comonad_Traced_Class.listen,
    listens: Control_Comonad_Traced_Class.listens,
    track: Control_Comonad_Traced_Class.track,
    tracks: Control_Comonad_Traced_Class.tracks,
    TracedT: Control_Comonad_Traced_Trans.TracedT,
    runTracedT: Control_Comonad_Traced_Trans.runTracedT
};
