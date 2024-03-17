import { NextFunction, Request, Response } from "express";
import { Gallery } from "../db/models/Gallery";
import { Social } from "../db/models/Social";
import { User } from "../db/models/User";

const emailExists = async (req: Request, res: Response, next: NextFunction) => {
  const { email } = req.query;
  const user = await User.findOne({ email });
  if (!user) return next({ status: 404, message: "User not found" });
  res.locals.foundUser = user;
  return next();
};

const userExists = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  const user = await User.findById(id);
  if (!user) return next({ status: 404, message: "User not found" });
  res.locals.foundUser = user;
  return next();
};

const isValidUser = async (req: Request, res: Response, next: NextFunction) => {
  const user = req.body;
  const errors = [];
  if (!user.email) {
    errors.push("Email is required");
  } else if (!user.email.includes("@")) {
    errors.push("Email is invalid");
  }
  if (!user.name) errors.push("Name is required");
  if (errors.length) return next({ status: 400, message: errors });
  res.locals.validUser = user;
  return next();
};

const appendData = async (req: Request, res: Response, next: NextFunction) => {
  const { foundUser } = res.locals;
  const galleries = await Gallery.find({ userId: foundUser._id });
  const social = await Social.findOne({ userId: foundUser._id });
  res.locals.foundUser = { ...foundUser._doc, galleries, social };
  return next();
};

const UsersMiddleware = {
  emailExists,
  userExists,
  isValidUser,
  appendData,
};

export default UsersMiddleware;
