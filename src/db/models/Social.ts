import { Schema, model } from "mongoose";

const SocialSchema: Schema = new Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    website: {
      type: String,
    },
    facebook: {
      type: String,
    },
    instagram: {
      type: String,
    },
    youtube: {
      type: String,
    },
    tiktok: {
      type: String,
    },
    vimeo: {
      type: String,
    },
  },
  { timestamps: true }
);

// Exports
export const Social = model("Social", SocialSchema);
