import { Router } from "express";
import GalleriesController from "../controllers/galleries.controller";

const GalleriesRouter: Router = Router();

GalleriesRouter.get("/", GalleriesController.list);
GalleriesRouter.post("/", GalleriesController.create);
GalleriesRouter.get("/:id", GalleriesController.read);
GalleriesRouter.put("/:id", GalleriesController.update);
GalleriesRouter.delete("/:id", GalleriesController.delete);

export default GalleriesRouter;
