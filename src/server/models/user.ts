import mongoose from 'mongoose';
import { IUserModel } from 'server/inerfaces/modelInterfaces/user';
import { USER } from 'server/constants/ModelNames';

const Schema = mongoose.Schema;
const UserSchema: mongoose.Schema = new Schema(
    {
        nickName: String,
        password: String,
        games: {
            total: Number,
            won: Number,
            draw: Number,
            lost: Number
        },
        points: Number
    },
    { timestamps: { createdAt: 'created_at' } }
);

UserSchema.methods.getWinningPersentage = function(): string {
    return (this.games.won / this.games.total).toFixed(2);
};

export const UserModel: mongoose.Model<IUserModel> = mongoose.model<IUserModel>(
    USER,
    UserSchema
);
