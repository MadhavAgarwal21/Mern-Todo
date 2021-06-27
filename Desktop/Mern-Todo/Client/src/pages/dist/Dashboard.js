"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Navbar_1 = require("../components/Navbar");
var TodoForm_1 = require("../components/todo/TodoForm");
var axios_1 = require("axios");
var TodoList_1 = require("../components/todo/TodoList");
var Dashboard = function () {
    var _a = react_1["default"].useState([]), todoList = _a[0], setTodoList = _a[1];
    react_1["default"].useEffect(function () {
        axios_1["default"].get('https://mern-todo-api-nodejs.herokuapp.com/todos', { headers: { token: localStorage.getItem('token') } })
            .then(function (res) {
            if (res.status === 200) {
                setTodoList(res.data.todos);
            }
        });
    }, []);
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(Navbar_1["default"], null),
        react_1["default"].createElement("div", { className: "max-w-md mx-auto pt-12" },
            react_1["default"].createElement("h1", { className: "font-bold text-green-400 text-center text-xl mb-12" }, "my todos dashboard"),
            react_1["default"].createElement(TodoForm_1["default"], { todos: todoList, setTodos: setTodoList }),
            react_1["default"].createElement(TodoList_1["default"], { todos: todoList, setTodos: setTodoList }))));
};
exports["default"] = Dashboard;
