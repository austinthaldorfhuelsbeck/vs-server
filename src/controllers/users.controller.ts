import { NextFunction, Request, Response } from "express";
import { User } from "../db/models/User";
import UsersMiddleware from "../middleware/users.middleware";

const read = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { foundUser } = res.locals;
    res.json({ data: foundUser });
  } catch (error) {
    next(error);
  }
};

const updateById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { foundUser, validUser } = res.locals;
    const updatedUser = await User.findByIdAndUpdate(
      foundUser._id,
      { $set: validUser },
      { new: true }
    );
    res.locals.foundUser = updatedUser;
  } catch (error) {
    next(error);
  }
};

const UsersController = {
  read: [UsersMiddleware.emailExists, UsersMiddleware.appendData, read],
  update: [
    UsersMiddleware.userExists,
    UsersMiddleware.isValidUser,
    updateById,
    UsersMiddleware.appendData,
    read,
  ],
};
export default UsersController;
