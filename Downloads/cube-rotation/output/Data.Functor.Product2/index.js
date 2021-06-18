// Generated by purs version 0.14.1
"use strict";
var Control_Biapplicative = require("../Control.Biapplicative/index.js");
var Control_Biapply = require("../Control.Biapply/index.js");
var Data_Bifunctor = require("../Data.Bifunctor/index.js");
var Data_Eq = require("../Data.Eq/index.js");
var Data_Functor = require("../Data.Functor/index.js");
var Data_Ord = require("../Data.Ord/index.js");
var Data_Ordering = require("../Data.Ordering/index.js");
var Data_Profunctor = require("../Data.Profunctor/index.js");
var Data_Show = require("../Data.Show/index.js");
var Product2 = (function () {
    function Product2(value0, value1) {
        this.value0 = value0;
        this.value1 = value1;
    };
    Product2.create = function (value0) {
        return function (value1) {
            return new Product2(value0, value1);
        };
    };
    return Product2;
})();
var showProduct2 = function (dictShow) {
    return function (dictShow1) {
        return new Data_Show.Show(function (v) {
            return "(Product2 " + (Data_Show.show(dictShow)(v.value0) + (" " + (Data_Show.show(dictShow1)(v.value1) + ")")));
        });
    };
};
var profunctorProduct2 = function (dictProfunctor) {
    return function (dictProfunctor1) {
        return new Data_Profunctor.Profunctor(function (f) {
            return function (g) {
                return function (v) {
                    return new Product2(Data_Profunctor.dimap(dictProfunctor)(f)(g)(v.value0), Data_Profunctor.dimap(dictProfunctor1)(f)(g)(v.value1));
                };
            };
        });
    };
};
var functorProduct2 = function (dictFunctor) {
    return function (dictFunctor1) {
        return new Data_Functor.Functor(function (f) {
            return function (v) {
                return new Product2(Data_Functor.map(dictFunctor)(f)(v.value0), Data_Functor.map(dictFunctor1)(f)(v.value1));
            };
        });
    };
};
var eqProduct2 = function (dictEq) {
    return function (dictEq1) {
        return new Data_Eq.Eq(function (x) {
            return function (y) {
                return Data_Eq.eq(dictEq)(x.value0)(y.value0) && Data_Eq.eq(dictEq1)(x.value1)(y.value1);
            };
        });
    };
};
var ordProduct2 = function (dictOrd) {
    return function (dictOrd1) {
        return new Data_Ord.Ord(function () {
            return eqProduct2(dictOrd.Eq0())(dictOrd1.Eq0());
        }, function (x) {
            return function (y) {
                var v = Data_Ord.compare(dictOrd)(x.value0)(y.value0);
                if (v instanceof Data_Ordering.LT) {
                    return Data_Ordering.LT.value;
                };
                if (v instanceof Data_Ordering.GT) {
                    return Data_Ordering.GT.value;
                };
                return Data_Ord.compare(dictOrd1)(x.value1)(y.value1);
            };
        });
    };
};
var bifunctorProduct2 = function (dictBifunctor) {
    return function (dictBifunctor1) {
        return new Data_Bifunctor.Bifunctor(function (f) {
            return function (g) {
                return function (v) {
                    return new Product2(Data_Bifunctor.bimap(dictBifunctor)(f)(g)(v.value0), Data_Bifunctor.bimap(dictBifunctor1)(f)(g)(v.value1));
                };
            };
        });
    };
};
var biapplyProduct2 = function (dictBiapply) {
    return function (dictBiapply1) {
        return new Control_Biapply.Biapply(function () {
            return bifunctorProduct2(dictBiapply.Bifunctor0())(dictBiapply1.Bifunctor0());
        }, function (v) {
            return function (v1) {
                return new Product2(Control_Biapply.biapply(dictBiapply)(v.value0)(v1.value0), Control_Biapply.biapply(dictBiapply1)(v.value1)(v1.value1));
            };
        });
    };
};
var biapplicativeProduct2 = function (dictBiapplicative) {
    return function (dictBiapplicative1) {
        return new Control_Biapplicative.Biapplicative(function () {
            return biapplyProduct2(dictBiapplicative.Biapply0())(dictBiapplicative1.Biapply0());
        }, function (a) {
            return function (b) {
                return new Product2(Control_Biapplicative.bipure(dictBiapplicative)(a)(b), Control_Biapplicative.bipure(dictBiapplicative1)(a)(b));
            };
        });
    };
};
module.exports = {
    Product2: Product2,
    eqProduct2: eqProduct2,
    ordProduct2: ordProduct2,
    showProduct2: showProduct2,
    functorProduct2: functorProduct2,
    bifunctorProduct2: bifunctorProduct2,
    biapplyProduct2: biapplyProduct2,
    biapplicativeProduct2: biapplicativeProduct2,
    profunctorProduct2: profunctorProduct2
};
