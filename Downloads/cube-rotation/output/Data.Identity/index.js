// Generated by purs version 0.14.1
"use strict";
var Control_Alt = require("../Control.Alt/index.js");
var Control_Applicative = require("../Control.Applicative/index.js");
var Control_Apply = require("../Control.Apply/index.js");
var Control_Bind = require("../Control.Bind/index.js");
var Control_Comonad = require("../Control.Comonad/index.js");
var Control_Extend = require("../Control.Extend/index.js");
var Control_Monad = require("../Control.Monad/index.js");
var Data_Eq = require("../Data.Eq/index.js");
var Data_Functor = require("../Data.Functor/index.js");
var Data_Functor_Invariant = require("../Data.Functor.Invariant/index.js");
var Data_Newtype = require("../Data.Newtype/index.js");
var Data_Ord = require("../Data.Ord/index.js");
var Data_Show = require("../Data.Show/index.js");
var Identity = function (x) {
    return x;
};
var showIdentity = function (dictShow) {
    return new Data_Show.Show(function (v) {
        return "(Identity " + (Data_Show.show(dictShow)(v) + ")");
    });
};
var semiringIdentity = function (dictSemiring) {
    return dictSemiring;
};
var semigroupIdenity = function (dictSemigroup) {
    return dictSemigroup;
};
var ringIdentity = function (dictRing) {
    return dictRing;
};
var ordIdentity = function (dictOrd) {
    return dictOrd;
};
var newtypeIdentity = new Data_Newtype.Newtype(function () {
    return undefined;
});
var monoidIdentity = function (dictMonoid) {
    return dictMonoid;
};
var lazyIdentity = function (dictLazy) {
    return dictLazy;
};
var heytingAlgebraIdentity = function (dictHeytingAlgebra) {
    return dictHeytingAlgebra;
};
var functorIdentity = new Data_Functor.Functor(function (f) {
    return function (m) {
        return f(m);
    };
});
var invariantIdentity = new Data_Functor_Invariant.Invariant(Data_Functor_Invariant.imapF(functorIdentity));
var extendIdentity = new Control_Extend.Extend(function () {
    return functorIdentity;
}, function (f) {
    return function (m) {
        return f(m);
    };
});
var euclideanRingIdentity = function (dictEuclideanRing) {
    return dictEuclideanRing;
};
var eqIdentity = function (dictEq) {
    return dictEq;
};
var eq1Identity = new Data_Eq.Eq1(function (dictEq) {
    return Data_Eq.eq(eqIdentity(dictEq));
});
var ord1Identity = new Data_Ord.Ord1(function () {
    return eq1Identity;
}, function (dictOrd) {
    return Data_Ord.compare(ordIdentity(dictOrd));
});
var comonadIdentity = new Control_Comonad.Comonad(function () {
    return extendIdentity;
}, function (v) {
    return v;
});
var commutativeRingIdentity = function (dictCommutativeRing) {
    return dictCommutativeRing;
};
var boundedIdentity = function (dictBounded) {
    return dictBounded;
};
var booleanAlgebraIdentity = function (dictBooleanAlgebra) {
    return dictBooleanAlgebra;
};
var applyIdentity = new Control_Apply.Apply(function () {
    return functorIdentity;
}, function (v) {
    return function (v1) {
        return v(v1);
    };
});
var bindIdentity = new Control_Bind.Bind(function () {
    return applyIdentity;
}, function (v) {
    return function (f) {
        return f(v);
    };
});
var applicativeIdentity = new Control_Applicative.Applicative(function () {
    return applyIdentity;
}, Identity);
var monadIdentity = new Control_Monad.Monad(function () {
    return applicativeIdentity;
}, function () {
    return bindIdentity;
});
var altIdentity = new Control_Alt.Alt(function () {
    return functorIdentity;
}, function (x) {
    return function (v) {
        return x;
    };
});
module.exports = {
    Identity: Identity,
    newtypeIdentity: newtypeIdentity,
    eqIdentity: eqIdentity,
    ordIdentity: ordIdentity,
    boundedIdentity: boundedIdentity,
    heytingAlgebraIdentity: heytingAlgebraIdentity,
    booleanAlgebraIdentity: booleanAlgebraIdentity,
    semigroupIdenity: semigroupIdenity,
    monoidIdentity: monoidIdentity,
    semiringIdentity: semiringIdentity,
    euclideanRingIdentity: euclideanRingIdentity,
    ringIdentity: ringIdentity,
    commutativeRingIdentity: commutativeRingIdentity,
    lazyIdentity: lazyIdentity,
    showIdentity: showIdentity,
    eq1Identity: eq1Identity,
    ord1Identity: ord1Identity,
    functorIdentity: functorIdentity,
    invariantIdentity: invariantIdentity,
    altIdentity: altIdentity,
    applyIdentity: applyIdentity,
    applicativeIdentity: applicativeIdentity,
    bindIdentity: bindIdentity,
    monadIdentity: monadIdentity,
    extendIdentity: extendIdentity,
    comonadIdentity: comonadIdentity
};
