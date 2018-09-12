"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var ModelNames_1 = require("server/constants/ModelNames");
var Schema = mongoose_1.default.Schema;
var UserSchema = new Schema({
    nickName: String,
    password: String,
    games: {
        total: Number,
        won: Number,
        draw: Number,
        lost: Number,
    },
    points: Number,
}, { timestamps: { createdAt: 'created_at' } });
UserSchema.methods.getWinningPersentage = function () {
    return (this.games.won / this.games.total).toFixed(2);
};
exports.UserModel = mongoose_1.default.model(ModelNames_1.USER, UserSchema);
//# sourceMappingURL=user.js.map