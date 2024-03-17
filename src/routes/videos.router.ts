import { Router } from "express";
import VideosController from "../controllers/videos.controller";

const VideosRouter: Router = Router();

VideosRouter.get("/", VideosController.list);
VideosRouter.post("/", VideosController.create);
VideosRouter.get("/:id", VideosController.read);
VideosRouter.put("/:id", VideosController.update);
VideosRouter.delete("/:id", VideosController.delete);
VideosRouter.put("/views/:id", VideosController.incrementViews);
VideosRouter.put("/downloads/:id", VideosController.incrementDownloads);

export default VideosRouter;
