import mongoose, { Schema, Document, Model, Types } from "mongoose";

export interface IBlog extends Document {
  _id: Types.ObjectId;
  title: string;
  content: string;
  image?: string | null;
  createdAt: Date;
  updatedAt: Date;
}

const BlogSchema = new Schema<IBlog>(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    image: { type: String, default: null },
  },
  { timestamps: true }
);

const Blog: Model<IBlog> =
  mongoose.models.Blog || mongoose.model<IBlog>("Blog", BlogSchema);

export default Blog;
