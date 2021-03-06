// Generated by purs version 0.14.1
"use strict";
var Type_Proxy = require("../Type.Proxy/index.js");
var Or = {};
var Not = {};
var IsBoolean = function (reflectBoolean) {
    this.reflectBoolean = reflectBoolean;
};
var If = {};
var BProxy = (function () {
    function BProxy() {

    };
    BProxy.value = new BProxy();
    return BProxy;
})();
var And = {};
var reflectBoolean = function (dict) {
    return dict.reflectBoolean;
};
var orTrue = Or;
var orFalse = Or;
var or = function (dictOr) {
    return function (v) {
        return function (v1) {
            return Type_Proxy["Proxy"].value;
        };
    };
};
var notTrue = Not;
var notFalse = Not;
var not = function (dictNot) {
    return function (v) {
        return Type_Proxy["Proxy"].value;
    };
};
var isBooleanTrue = new IsBoolean(function (v) {
    return true;
});
var isBooleanFalse = new IsBoolean(function (v) {
    return false;
});
var reifyBoolean = function (v) {
    return function (f) {
        if (v) {
            return f(isBooleanTrue)(Type_Proxy["Proxy"].value);
        };
        if (!v) {
            return f(isBooleanFalse)(Type_Proxy["Proxy"].value);
        };
        throw new Error("Failed pattern match at Type.Data.Boolean (line 34, column 1 - line 34, column 88): " + [ v.constructor.name, f.constructor.name ]);
    };
};
var if_ = function (dictIf) {
    return function (v) {
        return function (v1) {
            return function (v2) {
                return Type_Proxy["Proxy"].value;
            };
        };
    };
};
var ifTrue = If;
var ifFalse = If;
var andTrue = And;
var andFalse = And;
var and = function (dictAnd) {
    return function (v) {
        return function (v1) {
            return Type_Proxy["Proxy"].value;
        };
    };
};
module.exports = {
    BProxy: BProxy,
    IsBoolean: IsBoolean,
    reflectBoolean: reflectBoolean,
    reifyBoolean: reifyBoolean,
    And: And,
    and: and,
    Or: Or,
    or: or,
    Not: Not,
    not: not,
    If: If,
    if_: if_,
    isBooleanTrue: isBooleanTrue,
    isBooleanFalse: isBooleanFalse,
    andTrue: andTrue,
    andFalse: andFalse,
    orTrue: orTrue,
    orFalse: orFalse,
    notTrue: notTrue,
    notFalse: notFalse,
    ifTrue: ifTrue,
    ifFalse: ifFalse
};
