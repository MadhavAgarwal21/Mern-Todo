// Generated by purs version 0.14.1
"use strict";
var Control_Alt = require("../Control.Alt/index.js");
var Control_Alternative = require("../Control.Alternative/index.js");
var Control_MonadZero = require("../Control.MonadZero/index.js");
var Control_Plus = require("../Control.Plus/index.js");
var Data_Maybe = require("../Data.Maybe/index.js");
var Data_Monoid = require("../Data.Monoid/index.js");
var Data_Newtype = require("../Data.Newtype/index.js");
var Data_Semigroup = require("../Data.Semigroup/index.js");
var Data_Show = require("../Data.Show/index.js");
var Last = function (x) {
    return x;
};
var showLast = function (dictShow) {
    return new Data_Show.Show(function (v) {
        return "(Last " + (Data_Show.show(Data_Maybe.showMaybe(dictShow))(v) + ")");
    });
};
var semigroupLast = new Data_Semigroup.Semigroup(function (v) {
    return function (v1) {
        if (v1 instanceof Data_Maybe.Just) {
            return v1;
        };
        if (v1 instanceof Data_Maybe.Nothing) {
            return v;
        };
        throw new Error("Failed pattern match at Data.Maybe.Last (line 52, column 1 - line 54, column 36): " + [ v.constructor.name, v1.constructor.name ]);
    };
});
var ordLast = function (dictOrd) {
    return Data_Maybe.ordMaybe(dictOrd);
};
var ord1Last = Data_Maybe.ord1Maybe;
var newtypeLast = new Data_Newtype.Newtype(function () {
    return undefined;
});
var monoidLast = new Data_Monoid.Monoid(function () {
    return semigroupLast;
}, Data_Maybe.Nothing.value);
var monadLast = Data_Maybe.monadMaybe;
var invariantLast = Data_Maybe.invariantMaybe;
var functorLast = Data_Maybe.functorMaybe;
var extendLast = Data_Maybe.extendMaybe;
var eqLast = function (dictEq) {
    return Data_Maybe.eqMaybe(dictEq);
};
var eq1Last = Data_Maybe.eq1Maybe;
var boundedLast = function (dictBounded) {
    return Data_Maybe.boundedMaybe(dictBounded);
};
var bindLast = Data_Maybe.bindMaybe;
var applyLast = Data_Maybe.applyMaybe;
var applicativeLast = Data_Maybe.applicativeMaybe;
var altLast = new Control_Alt.Alt(function () {
    return functorLast;
}, Data_Semigroup.append(semigroupLast));
var plusLast = new Control_Plus.Plus(function () {
    return altLast;
}, Data_Monoid.mempty(monoidLast));
var alternativeLast = new Control_Alternative.Alternative(function () {
    return applicativeLast;
}, function () {
    return plusLast;
});
var monadZeroLast = new Control_MonadZero.MonadZero(function () {
    return alternativeLast;
}, function () {
    return monadLast;
}, function () {
    return undefined;
});
module.exports = {
    Last: Last,
    newtypeLast: newtypeLast,
    eqLast: eqLast,
    eq1Last: eq1Last,
    ordLast: ordLast,
    ord1Last: ord1Last,
    boundedLast: boundedLast,
    functorLast: functorLast,
    invariantLast: invariantLast,
    applyLast: applyLast,
    applicativeLast: applicativeLast,
    bindLast: bindLast,
    monadLast: monadLast,
    extendLast: extendLast,
    showLast: showLast,
    semigroupLast: semigroupLast,
    monoidLast: monoidLast,
    altLast: altLast,
    plusLast: plusLast,
    alternativeLast: alternativeLast,
    monadZeroLast: monadZeroLast
};