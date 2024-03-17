import { Router } from "express";
import SocialsController from "../controllers/socials.controller";

const SocialsRouter: Router = Router();

SocialsRouter.get("/", SocialsController.read);
SocialsRouter.post("/", SocialsController.create);
SocialsRouter.put("/:id", SocialsController.update);

export default SocialsRouter;
