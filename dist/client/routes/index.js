"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var _ = require("lodash");
var React = require("react");
var react_router_dom_1 = require("react-router-dom");
var routesConfig_1 = require("client/routes/routesConfig");
var Header_1 = require("client/components/header/Header");
exports.default = (function () { return (React.createElement("div", null,
    React.createElement(react_router_dom_1.Route, { path: "/", component: Header_1.default }),
    React.createElement(react_router_dom_1.Switch, null,
        _.map(routesConfig_1.default, function (route) { return (React.createElement(react_router_dom_1.Route, { key: route.id, path: route.path, render: function (props) { return React.createElement(route.component, __assign({}, props, { routes: route.routes })); } })); }),
        React.createElement(react_router_dom_1.Redirect, { from: "/", to: "/home" })))); });
//# sourceMappingURL=index.js.map