import mongoose from "mongoose";

const Schema = mongoose.Schema;
const model = mongoose.model;

const CommentSchema = new Schema({
  content: String,
  user: String,
  products: String,
});

const CommentModel = model("Comment", CommentSchema);

export default CommentModel;
