import { Schema, model } from "mongoose";

const GallerySchema: Schema = new Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    img: {
      type: String,
    },
  },
  { timestamps: true }
);

// Exports
export const Gallery = model("Gallery", GallerySchema);
