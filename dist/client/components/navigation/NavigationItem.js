"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_router_dom_1 = require("react-router-dom");
require("./navigation.css");
var NavigationItem = /** @class */ (function (_super) {
    __extends(NavigationItem, _super);
    function NavigationItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NavigationItem.prototype.render = function () {
        var _a = this.props.options, name = _a.name, route = _a.route;
        return (React.createElement("div", { className: "navigation-item" },
            React.createElement(react_router_dom_1.Link, { to: route }, name)));
    };
    return NavigationItem;
}(React.Component));
exports.default = NavigationItem;
//# sourceMappingURL=NavigationItem.js.map