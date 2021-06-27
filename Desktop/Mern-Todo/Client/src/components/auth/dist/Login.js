"use strict";
exports.__esModule = true;
var react_1 = require("react");
var axios_1 = require("axios");
var Login = function (_a) {
    var renderSignup = _a.renderSignup;
    var _b = react_1["default"].useState(""), username = _b[0], setUsername = _b[1];
    var _c = react_1["default"].useState(""), password = _c[0], setPassword = _c[1];
    var onSubmit = function () {
        axios_1["default"].post('https://mern-todo-api-nodejs.herokuapp.com/login', {
            username: username,
            password: password
        }).then(function (res) {
            // sucessful, save the token
            if (res.status === 200) {
                var token = res.data.token;
                localStorage.setItem('token', token);
                window.location.href = '/dashboard';
            }
            else {
                // do some validation, logging
            }
        })["catch"](function (err) {
            alert('Error');
        });
    };
    return (react_1["default"].createElement("div", { style: { height: '300px' } },
        react_1["default"].createElement("h1", { className: "text-center text-green-400 font-bold" }, "login"),
        react_1["default"].createElement("div", { className: "mb-4" },
            react_1["default"].createElement("label", null, "username"),
            react_1["default"].createElement("input", { onChange: function (e) { return setUsername(e.target.value); }, className: "w-full px-3 py-2 border border-gray-400 rounded-md", type: "text", placeholder: "username" })),
        react_1["default"].createElement("div", { className: "mb-4" },
            react_1["default"].createElement("label", null, "password"),
            react_1["default"].createElement("input", { onChange: function (e) { return setPassword(e.target.value); }, className: "w-full px-3 py-2 border border-gray-400 rounded-md", type: "password", placeholder: "password" })),
        react_1["default"].createElement("div", { className: "flex justify-between items-center" },
            react_1["default"].createElement("div", null,
                react_1["default"].createElement("p", null,
                    "No account? ",
                    react_1["default"].createElement("span", { className: "text-green-400 cursor-pointer", onClick: renderSignup }, "Signup"))),
            react_1["default"].createElement("button", { className: "rounded-lg px-6 py-3 font-bold bg-green-400 text-white", onClick: function () { return onSubmit(); } }, "Login"))));
};
exports["default"] = Login;
