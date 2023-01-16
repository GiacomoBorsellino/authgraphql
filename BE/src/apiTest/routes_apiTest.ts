import express from 'express';
import { Request, Response } from 'express';
import controller_apiTest from './controller_apiTest';

class apiTest {
    public routes(server: express.Application) {
        server.get('/1/apiTest', (req: Request, res: Response) => {
            return controller_apiTest.select(req, res);
        });

    }
}

export default new apiTest;