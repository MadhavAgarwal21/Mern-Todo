// Generated by purs version 0.14.1
"use strict";
var Data_CommutativeRing = require("../Data.CommutativeRing/index.js");
var Data_DivisionRing = require("../Data.DivisionRing/index.js");
var Data_EuclideanRing = require("../Data.EuclideanRing/index.js");
var Data_Ring = require("../Data.Ring/index.js");
var Data_Semiring = require("../Data.Semiring/index.js");
var Field = function (DivisionRing1, EuclideanRing0) {
    this.DivisionRing1 = DivisionRing1;
    this.EuclideanRing0 = EuclideanRing0;
};
var field = function (dictEuclideanRing) {
    return function (dictDivisionRing) {
        return new Field(function () {
            return dictDivisionRing;
        }, function () {
            return dictEuclideanRing;
        });
    };
};
module.exports = {
    Field: Field,
    field: field,
    CommutativeRing: Data_CommutativeRing.CommutativeRing,
    DivisionRing: Data_DivisionRing.DivisionRing,
    recip: Data_DivisionRing.recip,
    EuclideanRing: Data_EuclideanRing.EuclideanRing,
    degree: Data_EuclideanRing.degree,
    div: Data_EuclideanRing.div,
    gcd: Data_EuclideanRing.gcd,
    lcm: Data_EuclideanRing.lcm,
    mod: Data_EuclideanRing.mod,
    Ring: Data_Ring.Ring,
    negate: Data_Ring.negate,
    sub: Data_Ring.sub,
    Semiring: Data_Semiring.Semiring,
    add: Data_Semiring.add,
    mul: Data_Semiring.mul,
    one: Data_Semiring.one,
    zero: Data_Semiring.zero
};
