import { NextFunction, Request, Response } from "express";
import { Gallery } from "../db/models/Gallery";
import GalleriesMiddleware from "../middleware/galleries.middleware";

const getByUserId = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { userId } = req.query;
    const galleries = await Gallery.find({ userId });
    res.json({ data: galleries });
  } catch (error) {
    next(error);
  }
};

const getByGalleryId = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { foundGallery } = res.locals;
    res.json({ data: foundGallery });
  } catch (error) {
    next(error);
  }
};

const create = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { validGallery } = res.locals;
    const newGallery = await Gallery.create(validGallery);
    res.json({ data: newGallery });
  } catch (error) {
    next(error);
  }
};

const updateById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { foundGallery, validGallery } = res.locals;
    const updatedGallery = await Gallery.findByIdAndUpdate(
      foundGallery._id,
      { $set: validGallery },
      { new: true }
    );
    res.json({ data: updatedGallery });
  } catch (error) {
    next(error);
  }
};

const destroy = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { foundGallery } = res.locals;
    await Gallery.findByIdAndDelete(foundGallery._id);
    res.json({ data: `Successfully deleted gallery ${foundGallery._id}.` });
  } catch (error) {
    next(error);
  }
};

const GalleriesController = {
  list: getByUserId,
  read: [GalleriesMiddleware.galleryExists, getByGalleryId],
  create: [GalleriesMiddleware.isValidGallery, create],
  update: [
    GalleriesMiddleware.galleryExists,
    GalleriesMiddleware.isValidGallery,
    updateById,
  ],
  delete: [GalleriesMiddleware.galleryExists, destroy],
};
export default GalleriesController;
