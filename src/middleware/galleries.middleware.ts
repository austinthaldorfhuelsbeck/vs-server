import { NextFunction, Request, Response } from "express";
import { Gallery } from "../db/models/Gallery";

const galleryExists = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  const gallery = await Gallery.findById(id);
  if (!gallery) return next({ status: 404, message: "Gallery not found" });
  res.locals.foundGallery = gallery;
  return next();
};

const isValidGallery = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const gallery = req.body;
  const errors = [];
  if (!gallery.userId) errors.push("User ID is required");
  if (!gallery.name) errors.push("Name is required");
  if (errors.length) return next({ status: 400, message: errors });
  res.locals.validGallery = gallery;
  return next();
};

const galleriesMiddleware = {
  galleryExists,
  isValidGallery,
};

export default galleriesMiddleware;
