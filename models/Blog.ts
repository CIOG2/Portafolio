import mongoose, { Schema, model, Model } from 'mongoose';
import { IBlog } from '@interfaces/index';

const blogSchema = new Schema(
  {
    slug: { type: String, required: true },
    category: { type: String, required: true },
    title: { type: String, required: true },
    resume: { type: String },
    mainImage: {
      url: { type: String, required: true },
      id: { type: String, required: true },
    },
    mainContent: { type: String, required: true },
    subtopics: [{ type: String }],
    images: [
      {
        url: { type: String, required: true },
        id: { type: String, required: true },
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Blog: Model<IBlog> = mongoose.models.Blog || model('Blog', blogSchema);

export default Blog;