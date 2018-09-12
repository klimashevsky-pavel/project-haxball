"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var bodyParser = require("body-parser");
var mongoose_1 = require("mongoose");
var cookie_parser_1 = require("cookie-parser");
var express_1 = require("express");
var errorhandler_1 = require("errorhandler");
var createRoutes_1 = require("server/utils/createRoutes");
var Server = /** @class */ (function () {
    function Server() {
        this.app = express_1.default();
        this.configServer();
    }
    Server.bootstrap = function () {
        return new Server();
    };
    Server.prototype.configServer = function () {
        var MONGODB_CONNECTION_URL = 'mongodb://localhost:27017/project-game';
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({
            extended: true,
        }));
        this.app.use(cookie_parser_1.default());
        mongoose_1.default.Promise = global.Promise;
        mongoose_1.default.connect(MONGODB_CONNECTION_URL);
        this.configRoutes();
        this.app.use(errorhandler_1.default());
    };
    Server.prototype.configRoutes = function () {
        var router = express_1.default.Router();
        createRoutes_1.createRoutes(router);
        this.app.use(router);
    };
    return Server;
}());
var app = Server.bootstrap().app;
app.listen(8080, function () {
    console.log('Server is running on port 8080');
});
//# sourceMappingURL=app.js.map