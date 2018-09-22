import { Router } from 'express';
import * as userController from 'server/controllers/userController';

export const createRoutes = (router: Router) => {
    router.get('/', userController.index);
};
