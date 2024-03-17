import { Router } from "express";
import UsersController from "../controllers/users.controller";

const UsersRouter: Router = Router();

UsersRouter.get("/", UsersController.read);
UsersRouter.put("/:id", UsersController.update);

export default UsersRouter;
