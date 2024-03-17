import { Router } from "express";
import HelloController from "../controllers/hello.controller";

const HelloRouter: Router = Router();

HelloRouter.get("/", HelloController.hello);

export default HelloRouter;
