import { Schema, model } from "mongoose";

const UserSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    companyName: {
      type: String,
    },
    img: {
      type: String,
    },
    companyImg: {
      type: String,
    },
    primaryColor: {
      type: String,
    },
    secondaryColor: {
      type: String,
    },
    tertiaryColor: {
      type: String,
    },
    primaryFont: {
      type: String,
    },
    secondaryFont: {
      type: String,
    },
  },
  { timestamps: true }
);

// Exports
export const User = model("User", UserSchema);
