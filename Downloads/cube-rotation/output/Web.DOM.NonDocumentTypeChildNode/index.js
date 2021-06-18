// Generated by purs version 0.14.1
"use strict";
var $foreign = require("./foreign.js");
var Data_Functor = require("../Data.Functor/index.js");
var Data_Nullable = require("../Data.Nullable/index.js");
var Effect = require("../Effect/index.js");
var previousElementSibling = (function () {
    var $0 = Data_Functor.map(Effect.functorEffect)(Data_Nullable.toMaybe);
    return function ($1) {
        return $0($foreign["_previousElementSibling"]($1));
    };
})();
var nextElementSibling = (function () {
    var $2 = Data_Functor.map(Effect.functorEffect)(Data_Nullable.toMaybe);
    return function ($3) {
        return $2($foreign["_nextElementSibling"]($3));
    };
})();
module.exports = {
    previousElementSibling: previousElementSibling,
    nextElementSibling: nextElementSibling
};
