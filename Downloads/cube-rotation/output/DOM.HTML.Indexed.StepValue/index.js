// Generated by purs version 0.14.1
"use strict";
var Data_Show = require("../Data.Show/index.js");
var Any = (function () {
    function Any() {

    };
    Any.value = new Any();
    return Any;
})();
var Step = (function () {
    function Step(value0) {
        this.value0 = value0;
    };
    Step.create = function (value0) {
        return new Step(value0);
    };
    return Step;
})();
var renderStepValue = function (v) {
    if (v instanceof Any) {
        return "any";
    };
    if (v instanceof Step) {
        return Data_Show.show(Data_Show.showNumber)(v.value0);
    };
    throw new Error("Failed pattern match at DOM.HTML.Indexed.StepValue (line 10, column 19 - line 12, column 19): " + [ v.constructor.name ]);
};
module.exports = {
    Any: Any,
    Step: Step,
    renderStepValue: renderStepValue
};