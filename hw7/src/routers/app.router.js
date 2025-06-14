import { Router } from "express";

import { getAppController, addAppController } from "../controllers/apps.controller.js";

const appsRouter = Router();

appsRouter.get("/", getAppController);

appsRouter.post("/", addAppController);

export default appsRouter;