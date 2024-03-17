import { NextFunction, Request, Response } from "express";
import { User } from "../db/models/User";
import UsersMiddleware from "../middleware/users.middleware";

const getByEmail = async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.json({ data: res.locals.foundUser });
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
    res.json({ data: updatedUser });
  } catch (error) {
    next(error);
  }
};

const UsersController = {
  read: [UsersMiddleware.emailExists, getByEmail],
  update: [UsersMiddleware.userExists, UsersMiddleware.isValidUser, updateById],
};
export default UsersController;
