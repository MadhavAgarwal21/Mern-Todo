// Generated by purs version 0.14.1
"use strict";
var Control_Applicative = require("../Control.Applicative/index.js");
var Data_Bifunctor = require("../Data.Bifunctor/index.js");
var Data_Coyoneda = require("../Data.Coyoneda/index.js");
var Data_Foldable = require("../Data.Foldable/index.js");
var Data_Function = require("../Data.Function/index.js");
var Data_Functor = require("../Data.Functor/index.js");
var Data_Maybe = require("../Data.Maybe/index.js");
var Data_Unit = require("../Data.Unit/index.js");
var Halogen_Data_Slot = require("../Halogen.Data.Slot/index.js");
var Halogen_HTML_Core = require("../Halogen.HTML.Core/index.js");
var Halogen_Query_HalogenM = require("../Halogen.Query.HalogenM/index.js");
var Halogen_Query_HalogenQ = require("../Halogen.Query.HalogenQ/index.js");
var Halogen_VDom_Thunk = require("../Halogen.VDom.Thunk/index.js");
var Unsafe_Coerce = require("../Unsafe.Coerce/index.js");
var ComponentSlot = (function () {
    function ComponentSlot(value0) {
        this.value0 = value0;
    };
    ComponentSlot.create = function (value0) {
        return new ComponentSlot(value0);
    };
    return ComponentSlot;
})();
var ThunkSlot = (function () {
    function ThunkSlot(value0) {
        this.value0 = value0;
    };
    ThunkSlot.create = function (value0) {
        return new ThunkSlot(value0);
    };
    return ThunkSlot;
})();
var unComponentSlot = Unsafe_Coerce.unsafeCoerce;
var unComponent = Unsafe_Coerce.unsafeCoerce;
var mkEval = function (args) {
    return function (v) {
        if (v instanceof Halogen_Query_HalogenQ.Initialize) {
            return Data_Functor.voidLeft(Halogen_Query_HalogenM.functorHalogenM)(Data_Foldable.traverse_(Halogen_Query_HalogenM.applicativeHalogenM)(Data_Foldable.foldableMaybe)(args.handleAction)(args.initialize))(v.value0);
        };
        if (v instanceof Halogen_Query_HalogenQ.Finalize) {
            return Data_Functor.voidLeft(Halogen_Query_HalogenM.functorHalogenM)(Data_Foldable.traverse_(Halogen_Query_HalogenM.applicativeHalogenM)(Data_Foldable.foldableMaybe)(args.handleAction)(args.finalize))(v.value0);
        };
        if (v instanceof Halogen_Query_HalogenQ.Receive) {
            return Data_Functor.voidLeft(Halogen_Query_HalogenM.functorHalogenM)(Data_Foldable.traverse_(Halogen_Query_HalogenM.applicativeHalogenM)(Data_Foldable.foldableMaybe)(args.handleAction)(args.receive(v.value0)))(v.value1);
        };
        if (v instanceof Halogen_Query_HalogenQ.Action) {
            return Data_Functor.voidLeft(Halogen_Query_HalogenM.functorHalogenM)(args.handleAction(v.value0))(v.value1);
        };
        if (v instanceof Halogen_Query_HalogenQ.Query) {
            return Data_Coyoneda.unCoyoneda(function (g) {
                var $25 = Data_Functor.map(Halogen_Query_HalogenM.functorHalogenM)(Data_Maybe.maybe(v.value1(Data_Unit.unit))(g));
                return function ($26) {
                    return $25(args.handleQuery($26));
                };
            })(v.value0);
        };
        throw new Error("Failed pattern match at Halogen.Component (line 182, column 15 - line 192, column 70): " + [ v.constructor.name ]);
    };
};
var mkComponentSlot = Unsafe_Coerce.unsafeCoerce;
var mkComponent = Unsafe_Coerce.unsafeCoerce;
var hoistSlot = function (dictFunctor) {
    return function (nat) {
        return function (v) {
            if (v instanceof ComponentSlot) {
                return unComponentSlot(function (slot) {
                    return ComponentSlot.create(mkComponentSlot({
                        get: slot.get,
                        pop: slot.pop,
                        set: slot.set,
                        component: hoist(dictFunctor)(nat)(slot.component),
                        input: slot.input,
                        output: slot.output
                    }));
                })(v.value0);
            };
            if (v instanceof ThunkSlot) {
                return ThunkSlot.create(Halogen_VDom_Thunk.hoist(Data_Bifunctor.lmap(Halogen_HTML_Core.bifunctorHTML)(hoistSlot(dictFunctor)(nat)))(v.value0));
            };
            throw new Error("Failed pattern match at Halogen.Component (line 279, column 17 - line 284, column 53): " + [ v.constructor.name ]);
        };
    };
};
var hoist = function (dictFunctor) {
    return function (nat) {
        return unComponent(function (c) {
            return mkComponent({
                initialState: c.initialState,
                render: (function () {
                    var $27 = Data_Bifunctor.lmap(Halogen_HTML_Core.bifunctorHTML)(hoistSlot(dictFunctor)(nat));
                    return function ($28) {
                        return $27(c.render($28));
                    };
                })(),
                "eval": (function () {
                    var $29 = Halogen_Query_HalogenM.hoist(dictFunctor)(nat);
                    return function ($30) {
                        return $29(c["eval"]($30));
                    };
                })()
            });
        });
    };
};
var functorComponentSlotBox = new Data_Functor.Functor(function (f) {
    return unComponentSlot(function (slot) {
        return mkComponentSlot({
            get: slot.get,
            pop: slot.pop,
            set: slot.set,
            component: slot.component,
            input: slot.input,
            output: Data_Functor.map(Data_Functor.functorFn)(Data_Functor.map(Data_Maybe.functorMaybe)(f))(slot.output)
        });
    });
});
var functorComponentSlot = new Data_Functor.Functor(function (f) {
    return function (v) {
        if (v instanceof ComponentSlot) {
            return new ComponentSlot(Data_Functor.map(functorComponentSlotBox)(f)(v.value0));
        };
        if (v instanceof ThunkSlot) {
            return new ThunkSlot(Halogen_VDom_Thunk.mapThunk(Data_Bifunctor.bimap(Halogen_HTML_Core.bifunctorHTML)(Data_Functor.map(functorComponentSlot)(f))(f))(v.value0));
        };
        throw new Error("Failed pattern match at Halogen.Component (line 209, column 11 - line 211, column 74): " + [ v.constructor.name ]);
    };
});
var defaultEval = {
    handleAction: Data_Function["const"](Control_Applicative.pure(Halogen_Query_HalogenM.applicativeHalogenM)(Data_Unit.unit)),
    handleQuery: Data_Function["const"](Control_Applicative.pure(Halogen_Query_HalogenM.applicativeHalogenM)(Data_Maybe.Nothing.value)),
    receive: Data_Function["const"](Data_Maybe.Nothing.value),
    initialize: Data_Maybe.Nothing.value,
    finalize: Data_Maybe.Nothing.value
};
var componentSlot = function (dictCons) {
    return function (dictIsSymbol) {
        return function (dictOrd) {
            return function (label) {
                return function (p) {
                    return function (comp) {
                        return function (input) {
                            return function (output) {
                                return mkComponentSlot({
                                    get: Halogen_Data_Slot.lookup()(dictIsSymbol)(dictOrd)(label)(p),
                                    pop: Halogen_Data_Slot.pop()(dictIsSymbol)(dictOrd)(label)(p),
                                    set: Halogen_Data_Slot.insert()(dictIsSymbol)(dictOrd)(label)(p),
                                    component: comp,
                                    input: input,
                                    output: output
                                });
                            };
                        };
                    };
                };
            };
        };
    };
};
module.exports = {
    mkComponent: mkComponent,
    unComponent: unComponent,
    hoist: hoist,
    mkEval: mkEval,
    defaultEval: defaultEval,
    ComponentSlot: ComponentSlot,
    ThunkSlot: ThunkSlot,
    componentSlot: componentSlot,
    mkComponentSlot: mkComponentSlot,
    unComponentSlot: unComponentSlot,
    hoistSlot: hoistSlot,
    functorComponentSlotBox: functorComponentSlotBox,
    functorComponentSlot: functorComponentSlot
};