import { NextFunction, Request, Response } from "express";

import { ErrorStatus } from "./types";

const isAnErrorStatus = (object: any): object is ErrorStatus => {
  return "status" in object && "message" in object;
};

export const errorHandler = (
  err: unknown,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (isAnErrorStatus(err)) {
    res.status(err.status).json({ error: err });
  } else if (err instanceof Error) {
    res.status(500).json({ error: { status: 500, message: err.message } });
  } else if (err) {
    res.status(500).json({ error: { message: String(err) } });
  } else {
    res.status(500).json({ error: { message: "Something went wrong!" } });
  }
};

export const methodNotAllowed = (req: Request, res: Response) => {
  res.status(405).json({
    error: { message: `${req.method} not allowed for ${req.originalUrl}.` },
  });
};

export const notFound = (req: Request, res: Response) => {
  res.status(404).json({
    error: { message: `Resource not found: ${req.originalUrl}.` },
  });
};
