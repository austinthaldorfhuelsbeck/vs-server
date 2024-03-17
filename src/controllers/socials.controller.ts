import { NextFunction, Request, Response } from "express";
import { Social } from "../db/models/Social";
import SocialsMiddleware from "../middleware/socials.middleware";

const read = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { foundSocial } = res.locals;
    res.json({ data: foundSocial });
  } catch (error) {
    next(error);
  }
};

const create = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { validSocial } = res.locals;
    const newSocial = await Social.create(validSocial);
    res.json({ data: newSocial });
  } catch (error) {
    next(error);
  }
};

const updateById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { foundSocial, validSocial } = res.locals;
    const updatedSocial = await Social.findByIdAndUpdate(
      foundSocial._id,
      { $set: validSocial },
      { new: true }
    );
    res.locals.foundSocial = updatedSocial;
  } catch (error) {
    next(error);
  }
};

const SocialsController = {
  read: [SocialsMiddleware.socialExists, read],
  create: [SocialsMiddleware.isValidSocial, create],
  update: [
    SocialsMiddleware.socialExists,
    SocialsMiddleware.isValidSocial,
    updateById,
    read,
  ],
};
export default SocialsController;
