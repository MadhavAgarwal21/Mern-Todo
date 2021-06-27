"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_dom_1 = require("react-dom");
require("./index.css");
var Landing_1 = require("./pages/Landing");
var reportWebVitals_1 = require("./reportWebVitals");
var react_router_dom_1 = require("react-router-dom");
var react_router_1 = require("react-router");
var RequireAuth_1 = require("./components/auth/RequireAuth");
var Dashboard_1 = require("./pages/Dashboard");
react_dom_1["default"].render(react_1["default"].createElement(react_1["default"].StrictMode, null,
    react_1["default"].createElement(react_router_dom_1.BrowserRouter, null,
        react_1["default"].createElement(react_router_1.Route, { path: "/", component: Landing_1["default"], exact: true }),
        react_1["default"].createElement(react_router_1.Route, { path: "/dashboard", component: RequireAuth_1["default"](Dashboard_1["default"]) }))), document.getElementById('root'));
reportWebVitals_1["default"]();
