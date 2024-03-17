import dotenv from "dotenv";
import express from "express";
import { errorHandler, notFound } from "./errorHandlers";
import { setCommonMiddleware } from "./middleware/global.middleware";
import GalleriesRouter from "./routes/galleries.router";
import UsersRouter from "./routes/users.router";
import VideosRouter from "./routes/videos.router";

dotenv.config();

// version 1
const v1Router = express();
v1Router.use("/users", UsersRouter);
v1Router.use("/galleries", GalleriesRouter);
v1Router.use("/videos", VideosRouter);

// app definition
export const app = express();
setCommonMiddleware(app);
app.use("/api/v1", v1Router);
app.use(notFound);
app.use(errorHandler);
