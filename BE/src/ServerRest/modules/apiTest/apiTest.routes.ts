import * as controller from "./apiTest.controller";
import express from "express";
import { middleware } from "../../middleware/middleware";

const router = express.Router();

router.use(express.json());
router.use(
  express.urlencoded({
    extended: false,
  })
);

router.get("/1/apiTestDb1", controller.apiTestDb1); // [middleware.checkToken],

router.get("/1/apiTestDb2", controller.apiTestDb2); // [middleware.checkToken],

export { router };
