// Generated by purs version 0.14.1
"use strict";
var POST = (function () {
    function POST() {

    };
    POST.value = new POST();
    return POST;
})();
var GET = (function () {
    function GET() {

    };
    GET.value = new GET();
    return GET;
})();
var renderFormMethod = function (v) {
    if (v instanceof POST) {
        return "post";
    };
    if (v instanceof GET) {
        return "get";
    };
    throw new Error("Failed pattern match at DOM.HTML.Indexed.FormMethod (line 8, column 20 - line 10, column 15): " + [ v.constructor.name ]);
};
module.exports = {
    POST: POST,
    GET: GET,
    renderFormMethod: renderFormMethod
};
