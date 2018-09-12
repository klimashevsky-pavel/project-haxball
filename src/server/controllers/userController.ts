import { Request, Response } from "express";
import { UserModel } from 'server/models/user';

export const index = (req: Request, res: Response) => {
    res.send('Hello, this is index controller');
};
