"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var react_1 = require("react");
var axios_1 = require("axios");
var TodoForm = function (_a) {
    var todos = _a.todos, setTodos = _a.setTodos;
    var _b = react_1["default"].useState(""), title = _b[0], setTitle = _b[1];
    var onSubmit = function () {
        if (title.length > 0) {
            axios_1["default"].post('https://mern-todo-api-nodejs.herokuapp.com/todo', { title: title }, { headers: { token: localStorage.getItem('token') } })
                .then(function (res) {
                if (res.status === 200) {
                    var todo = res.data.todo;
                    setTodos(__spreadArrays(todos, [todo]));
                    setTitle("");
                }
            });
        }
    };
    return (react_1["default"].createElement("div", { className: "flex justify-between mb-8" },
        react_1["default"].createElement("input", { className: "w-full px-3 py-2 border border-green-400 rounded-md mr-4", type: "text", onChange: function (e) { return setTitle(e.target.value); }, value: title }),
        react_1["default"].createElement("input", { type: "button", className: "py-2 px-5 bg-green-400 text-white rounded-md cursor-pointer", value: "Add", onClick: function () { return onSubmit(); } })));
};
exports["default"] = TodoForm;
