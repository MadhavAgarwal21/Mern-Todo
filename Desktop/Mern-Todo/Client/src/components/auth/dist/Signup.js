"use strict";
exports.__esModule = true;
var react_1 = require("react");
var axios_1 = require("axios");
var Signup = function (_a) {
    var renderLogin = _a.renderLogin;
    var _b = react_1["default"].useState(""), username = _b[0], setUsername = _b[1];
    var _c = react_1["default"].useState(""), password = _c[0], setPassword = _c[1];
    var _d = react_1["default"].useState(""), confirmPassword = _d[0], setConfirmPassword = _d[1];
    var _e = react_1["default"].useState(false), disabled = _e[0], setDisabled = _e[1];
    var onSubmit = function () {
        axios_1["default"].post('https://mern-todo-api-nodejs.herokuapp.com/signup', {
            username: username,
            password: password
        }).then(function (res) {
            window.location.href = '/';
        });
    };
    react_1["default"].useEffect(function () {
        if (password === confirmPassword)
            setDisabled(false);
        else
            setDisabled(true);
    }, [password, confirmPassword]);
    return (react_1["default"].createElement("div", { style: { height: '300px' } },
        react_1["default"].createElement("h1", { className: "text-center text-green-400 font-bold" }, "signup"),
        react_1["default"].createElement("div", { className: "mb-4" },
            react_1["default"].createElement("label", null, "username"),
            react_1["default"].createElement("input", { onChange: function (e) { return setUsername(e.target.value); }, className: "w-full px-3 py-2 border border-gray-400 rounded-md", type: "text", placeholder: "username" })),
        react_1["default"].createElement("div", { className: "mb-4" },
            react_1["default"].createElement("label", null, "password"),
            react_1["default"].createElement("input", { onChange: function (e) { return setPassword(e.target.value); }, className: "w-full px-3 py-2 border border-gray-400 rounded-md", type: "password", placeholder: "password" })),
        react_1["default"].createElement("div", { className: "mb-4" },
            react_1["default"].createElement("label", null, "confirm password"),
            react_1["default"].createElement("input", { onChange: function (e) { return setConfirmPassword(e.target.value); }, className: "w-full px-3 py-2 border border-gray-400 rounded-md", type: "password", placeholder: "password" })),
        react_1["default"].createElement("div", { className: "flex justify-between items-center" },
            react_1["default"].createElement("div", null,
                react_1["default"].createElement("p", null,
                    "Already a member? ",
                    react_1["default"].createElement("span", { className: "text-green-400 cursor-pointer", onClick: renderLogin }, "Login"))),
            react_1["default"].createElement("button", { className: "rounded-lg px-6 py-3 font-bold text-white " + (disabled ? "bg-gray-400" : "bg-green-400"), disabled: disabled, onClick: function () { return onSubmit(); } }, "Signup"))));
};
exports["default"] = Signup;
