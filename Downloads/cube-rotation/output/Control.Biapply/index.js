// Generated by purs version 0.14.1
"use strict";
var Control_Category = require("../Control.Category/index.js");
var Data_Bifunctor = require("../Data.Bifunctor/index.js");
var Data_Function = require("../Data.Function/index.js");
var Data_Tuple = require("../Data.Tuple/index.js");
var Biapply = function (Bifunctor0, biapply) {
    this.Bifunctor0 = Bifunctor0;
    this.biapply = biapply;
};
var biapplyTuple = new Biapply(function () {
    return Data_Bifunctor.bifunctorTuple;
}, function (v) {
    return function (v1) {
        return new Data_Tuple.Tuple(v.value0(v1.value0), v.value1(v1.value1));
    };
});
var biapply = function (dict) {
    return dict.biapply;
};
var biapplyFirst = function (dictBiapply) {
    return function (a) {
        return function (b) {
            return biapply(dictBiapply)(Control_Category.identity(Control_Category.categoryFn)(Data_Bifunctor.bimap(dictBiapply.Bifunctor0())(Data_Function["const"](Control_Category.identity(Control_Category.categoryFn)))(Data_Function["const"](Control_Category.identity(Control_Category.categoryFn))))(a))(b);
        };
    };
};
var biapplySecond = function (dictBiapply) {
    return function (a) {
        return function (b) {
            return biapply(dictBiapply)(Control_Category.identity(Control_Category.categoryFn)(Data_Bifunctor.bimap(dictBiapply.Bifunctor0())(Data_Function["const"])(Data_Function["const"]))(a))(b);
        };
    };
};
var bilift2 = function (dictBiapply) {
    return function (f) {
        return function (g) {
            return function (a) {
                return function (b) {
                    return biapply(dictBiapply)(Control_Category.identity(Control_Category.categoryFn)(Data_Bifunctor.bimap(dictBiapply.Bifunctor0())(f)(g))(a))(b);
                };
            };
        };
    };
};
var bilift3 = function (dictBiapply) {
    return function (f) {
        return function (g) {
            return function (a) {
                return function (b) {
                    return function (c) {
                        return biapply(dictBiapply)(biapply(dictBiapply)(Control_Category.identity(Control_Category.categoryFn)(Data_Bifunctor.bimap(dictBiapply.Bifunctor0())(f)(g))(a))(b))(c);
                    };
                };
            };
        };
    };
};
module.exports = {
    biapply: biapply,
    Biapply: Biapply,
    biapplyFirst: biapplyFirst,
    biapplySecond: biapplySecond,
    bilift2: bilift2,
    bilift3: bilift3,
    biapplyTuple: biapplyTuple
};
