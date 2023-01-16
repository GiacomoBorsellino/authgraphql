import express from 'express';
import { Request, Response } from 'express';
import * as jwt from "jsonwebtoken";
import model_apitest from './model_apiTest';

class ControllerApiTest {
    public async select(req: Request, res: Response) {
        try {
            let check = await model_apitest.select(req.query);
            return res.json(check).end();
        }
        catch (err) {
            return res.status(400).json({ 'messaggio': err.errore }).end();
        }
    }
}

export default new ControllerApiTest;