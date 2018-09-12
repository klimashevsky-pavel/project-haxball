import { Document } from "mongoose";

interface IUser {
    nickName: string;
    password: string;
    games: {
        total: number;
        won: number;
        draw: number;
        lost: number;
    };
    points: number;
}

export interface IUserModel extends IUser, Document {
    getWinningPersentage(): number;
}
