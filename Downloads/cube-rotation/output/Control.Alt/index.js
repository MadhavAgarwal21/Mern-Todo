// Generated by purs version 0.14.1
"use strict";
var Data_Functor = require("../Data.Functor/index.js");
var Data_Semigroup = require("../Data.Semigroup/index.js");
var Alt = function (Functor0, alt) {
    this.Functor0 = Functor0;
    this.alt = alt;
};
var altArray = new Alt(function () {
    return Data_Functor.functorArray;
}, Data_Semigroup.append(Data_Semigroup.semigroupArray));
var alt = function (dict) {
    return dict.alt;
};
module.exports = {
    Alt: Alt,
    alt: alt,
    altArray: altArray,
    Functor: Data_Functor.Functor,
    map: Data_Functor.map,
    "void": Data_Functor["void"]
};