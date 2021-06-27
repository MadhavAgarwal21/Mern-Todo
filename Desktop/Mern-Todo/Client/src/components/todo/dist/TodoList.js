"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var TodoList = function (_a) {
    var todos = _a.todos, setTodos = _a.setTodos;
    var markCompleted = function (todo) {
        axios_1["default"].put("https://mern-todo-api-nodejs.herokuapp.com/todo/" + todo._id, {}, { headers: { token: localStorage.getItem('token') } })
            .then(function (res) {
            if (res.status === 200) {
                var _todos = todos;
                setTodos(_todos.filter(function (todo) { return res.data.todo._id !== todo._id; }));
            }
        });
    };
    return (React.createElement(React.Fragment, null, todos === null || todos === void 0 ? void 0 : todos.filter(function (todo) { return !todo.isCompleted; }).map(function (todo) { return (React.createElement("div", { className: "border border-gray-400 p-4 rounded-md mb-4 flex justify-between items-center", key: todo._id },
        todo.title,
        React.createElement("input", { type: "button", className: "py-2 px-3 bg-green-400 text-white rounded-md cursor-pointer", value: "DONE", onClick: function () { return markCompleted(todo); } }))); })));
};
exports["default"] = TodoList;
