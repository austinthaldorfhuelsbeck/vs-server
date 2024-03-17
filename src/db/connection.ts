import mongoose from "mongoose";

export const connect = (uri: string) => {
  mongoose
    .connect(uri)
    .then(() => console.log("Connected to DB"))
    .catch((error) => {
      throw error;
    });
};
