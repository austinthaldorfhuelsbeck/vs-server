import { Schema, model } from "mongoose";

const VideoSchema: Schema = new Schema(
  {
    galleryId: {
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
    video: {
      type: String,
      required: true,
    },
    views: {
      type: Number,
      default: 0,
    },
    downloads: {
      type: Number,
      default: 0,
    },
    displayed: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

// Exports
export const Video = model("Video", VideoSchema);
