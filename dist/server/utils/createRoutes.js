"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var userController = require("server/controllers/userController");
exports.createRoutes = function (router) {
    router.get('/', userController.index);
};
//# sourceMappingURL=createRoutes.js.map