import mongoose from "mongoose";

const Schema = mongoose.Schema;

const model = mongoose.model;
const ProductsSchema = new Schema(
  {
    title: String,
    description: String,
    video: String,
    user: [{ type: Schema.Types.ObjectId, ref: "Users" }],
    haskTags: [{ type: Schema.Types.ObjectId, ref: "HashTags" }],
    comments: [{ type: Schema.Types.ObjectId, ref: "Comments" }],
    likes: [{ type: Schema.Types.ObjectId, ref: "Likes" }],
    shares: [{ type: Schema.Types.ObjectId, ref: "Shares" }],
  },
  {
    timestamps: true,
  }
);

const ProductsModel = model("Products", ProductsSchema);

export default ProductsModel;
