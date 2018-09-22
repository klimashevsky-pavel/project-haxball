import * as bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import express from 'express';
import errorHandler from 'errorhandler';

import { createRoutes } from 'server/utils/createRoutes';

class Server {
    public app: express.Application;

    public static bootstrap(): Server {
        return new Server();
    }

    public configServer(): void {
        const MONGODB_CONNECTION_URL: string =
            'mongodb://localhost:27017/project-game';

        this.app.use(bodyParser.json());

        this.app.use(
            bodyParser.urlencoded({
                extended: true
            })
        );

        this.app.use(cookieParser());

        (<any> mongoose).Promise = global.Promise;

        mongoose.connect(MONGODB_CONNECTION_URL);

        this.configRoutes();

        this.app.use(errorHandler());
    }

    public configRoutes(): void {
        const router: express.Router = express.Router();
        createRoutes(router);

        this.app.use(router);
    }

    constructor() {
        this.app = express();
        this.configServer();
    }
}

const { app } = Server.bootstrap();

app.listen(8080, () => {
    console.log('Server is running on port 8080');
});
