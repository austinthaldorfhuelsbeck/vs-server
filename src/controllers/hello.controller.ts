import { NextFunction, Request, Response } from "express";
import HelloService from "../services/hello.service";

const hello = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { message } = await HelloService.helloWorld();
    res.json({ message });
  } catch (error) {
    next(error);
  }
};

const HelloController = {
  hello,
};
export default HelloController;
