import * as controller from "./apiTest.controller";
import express from "express"

const router = express.Router();

router.use(express.json());
router.use(express.urlencoded({
    extended: false
}));

router.get("/1/apiTest", controller.apiTest)

export { router }