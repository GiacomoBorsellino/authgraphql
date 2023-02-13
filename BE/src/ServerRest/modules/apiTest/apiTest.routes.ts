import * as controller from "./apiTest.controller";
import express from "express"
import { middleware } from "../../middleware/middleware";

const router = express.Router();

router.use(express.json());
router.use(express.urlencoded({
    extended: false
}));

router.get("/1/apiTest", [middleware.checkToken], controller.apiTest)

export { router }