// Generated by purs version 0.14.1
"use strict";
var Control_Applicative = require("../Control.Applicative/index.js");
var Control_Apply = require("../Control.Apply/index.js");
var Control_Biapplicative = require("../Control.Biapplicative/index.js");
var Control_Biapply = require("../Control.Biapply/index.js");
var Control_Bind = require("../Control.Bind/index.js");
var Control_Monad = require("../Control.Monad/index.js");
var Data_Bifunctor = require("../Data.Bifunctor/index.js");
var Data_Either = require("../Data.Either/index.js");
var Data_Functor = require("../Data.Functor/index.js");
var Data_Newtype = require("../Data.Newtype/index.js");
var Data_Profunctor = require("../Data.Profunctor/index.js");
var Data_Profunctor_Choice = require("../Data.Profunctor.Choice/index.js");
var Data_Show = require("../Data.Show/index.js");
var Joker = function (x) {
    return x;
};
var showJoker = function (dictShow) {
    return new Data_Show.Show(function (v) {
        return "(Joker " + (Data_Show.show(dictShow)(v) + ")");
    });
};
var profunctorJoker = function (dictFunctor) {
    return new Data_Profunctor.Profunctor(function (f) {
        return function (g) {
            return function (v) {
                return Data_Functor.map(dictFunctor)(g)(v);
            };
        };
    });
};
var ordJoker = function (dictOrd) {
    return dictOrd;
};
var newtypeJoker = new Data_Newtype.Newtype(function () {
    return undefined;
});
var hoistJoker = function (f) {
    return function (v) {
        return f(v);
    };
};
var functorJoker = function (dictFunctor) {
    return new Data_Functor.Functor(function (f) {
        return function (v) {
            return Data_Functor.map(dictFunctor)(f)(v);
        };
    });
};
var eqJoker = function (dictEq) {
    return dictEq;
};
var choiceJoker = function (dictFunctor) {
    return new Data_Profunctor_Choice.Choice(function () {
        return profunctorJoker(dictFunctor);
    }, function (v) {
        return Joker(Data_Functor.map(dictFunctor)(Data_Either.Left.create)(v));
    }, function (v) {
        return Joker(Data_Functor.map(dictFunctor)(Data_Either.Right.create)(v));
    });
};
var bifunctorJoker = function (dictFunctor) {
    return new Data_Bifunctor.Bifunctor(function (v) {
        return function (g) {
            return function (v1) {
                return Data_Functor.map(dictFunctor)(g)(v1);
            };
        };
    });
};
var biapplyJoker = function (dictApply) {
    return new Control_Biapply.Biapply(function () {
        return bifunctorJoker(dictApply.Functor0());
    }, function (v) {
        return function (v1) {
            return Control_Apply.apply(dictApply)(v)(v1);
        };
    });
};
var biapplicativeJoker = function (dictApplicative) {
    return new Control_Biapplicative.Biapplicative(function () {
        return biapplyJoker(dictApplicative.Apply0());
    }, function (v) {
        return function (b) {
            return Control_Applicative.pure(dictApplicative)(b);
        };
    });
};
var applyJoker = function (dictApply) {
    return new Control_Apply.Apply(function () {
        return functorJoker(dictApply.Functor0());
    }, function (v) {
        return function (v1) {
            return Joker(Control_Apply.apply(dictApply)(v)(v1));
        };
    });
};
var bindJoker = function (dictBind) {
    return new Control_Bind.Bind(function () {
        return applyJoker(dictBind.Apply0());
    }, function (v) {
        return function (amb) {
            return Joker(Control_Bind.bind(dictBind)(v)((function () {
                var $46 = Data_Newtype.un()(Joker);
                return function ($47) {
                    return $46(amb($47));
                };
            })()));
        };
    });
};
var applicativeJoker = function (dictApplicative) {
    return new Control_Applicative.Applicative(function () {
        return applyJoker(dictApplicative.Apply0());
    }, (function () {
        var $48 = Control_Applicative.pure(dictApplicative);
        return function ($49) {
            return Joker($48($49));
        };
    })());
};
var monadJoker = function (dictMonad) {
    return new Control_Monad.Monad(function () {
        return applicativeJoker(dictMonad.Applicative0());
    }, function () {
        return bindJoker(dictMonad.Bind1());
    });
};
module.exports = {
    Joker: Joker,
    hoistJoker: hoistJoker,
    newtypeJoker: newtypeJoker,
    eqJoker: eqJoker,
    ordJoker: ordJoker,
    showJoker: showJoker,
    functorJoker: functorJoker,
    applyJoker: applyJoker,
    applicativeJoker: applicativeJoker,
    bindJoker: bindJoker,
    monadJoker: monadJoker,
    bifunctorJoker: bifunctorJoker,
    biapplyJoker: biapplyJoker,
    biapplicativeJoker: biapplicativeJoker,
    profunctorJoker: profunctorJoker,
    choiceJoker: choiceJoker
};
