import { NextFunction, Request, Response } from "express";
import { Video } from "../db/models/Video";
import VideosMiddleware from "../middleware/videos.middleware";

const getByUserId = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { galleryId } = req.query;
    const videos = await Video.find({ galleryId });
    res.json({ data: videos });
  } catch (error) {
    next(error);
  }
};

const read = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { foundVideo } = res.locals;
    res.json({ data: foundVideo });
  } catch (error) {
    next(error);
  }
};

const create = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { validVideo } = res.locals;
    const newVideo = await Video.create(validVideo);
    res.json({ data: newVideo });
  } catch (error) {
    next(error);
  }
};

const updateById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { foundVideo, validVideo } = res.locals;
    const updatedVideo = await Video.findByIdAndUpdate(
      foundVideo._id,
      { $set: validVideo },
      { new: true }
    );
    res.locals.foundVideo = updatedVideo;
  } catch (error) {
    next(error);
  }
};

const destroy = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { foundVideo } = res.locals;
    await Video.findByIdAndDelete(foundVideo._id);
    res.json({ data: `Successfully deleted video ${foundVideo._id}.` });
  } catch (error) {
    next(error);
  }
};

const incrementViews = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { foundVideo } = res.locals;
    const updatedVideo = await Video.findByIdAndUpdate(
      foundVideo._id,
      { $inc: { views: 1 } },
      { new: true }
    );
    res.json({ data: updatedVideo });
  } catch (error) {
    next(error);
  }
};

const incrementDownloads = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { foundVideo } = res.locals;
    const updatedVideo = await Video.findByIdAndUpdate(
      foundVideo._id,
      { $inc: { downloads: 1 } },
      { new: true }
    );
    res.json({ data: updatedVideo });
  } catch (error) {
    next(error);
  }
};

const VideosController = {
  list: getByUserId,
  read: [VideosMiddleware.videoExists, read],
  create: [VideosMiddleware.isValidVideo, create],
  update: [
    VideosMiddleware.videoExists,
    VideosMiddleware.isValidVideo,
    updateById,
    read,
  ],
  delete: [VideosMiddleware.videoExists, destroy],
  incrementViews: [VideosMiddleware.videoExists, incrementViews],
  incrementDownloads: [VideosMiddleware.videoExists, incrementDownloads],
};
export default VideosController;
