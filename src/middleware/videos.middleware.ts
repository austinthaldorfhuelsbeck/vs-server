import { NextFunction, Request, Response } from "express";
import { Video } from "../db/models/Video";

const videoExists = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  const video = await Video.findById(id);
  if (!video) return next({ status: 404, message: "Video not found" });
  res.locals.foundVideo = video;
  return next();
};

const isValidVideo = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const video = req.body;
  const errors = [];
  if (!video.galleryId) errors.push("Gallery ID is required");
  if (!video.video) errors.push("Video is required");
  if (errors.length) return next({ status: 400, message: errors });
  res.locals.validVideo = video;
  return next();
};

const VideosMiddleware = {
  videoExists,
  isValidVideo,
};

export default VideosMiddleware;
