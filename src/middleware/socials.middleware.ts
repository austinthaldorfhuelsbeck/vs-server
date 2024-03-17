import { NextFunction, Request, Response } from "express";
import { Social } from "../db/models/Social";

const socialExists = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { userId } = req.query;
  const social = await Social.findOne({ userId });
  if (!social) return next({ status: 404, message: "Social not found" });
  res.locals.foundSocial = social;
  return next();
};

const isValidSocial = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const social = req.body;
  const errors = [];
  if (!social.userId) errors.push("User ID is required");
  if (errors.length) return next({ status: 400, message: errors });
  res.locals.validSocial = social;
  return next();
};

const SocialsMiddleware = {
  socialExists,
  isValidSocial,
};

export default SocialsMiddleware;
