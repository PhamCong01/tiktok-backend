import mongoose from "mongoose";

const Schema = mongoose.Schema;
const model = mongoose.model;

const UserSchema = new Schema(
  {
    name: String,
    nickname: String,
    email: String,
    picture: String,
  },
  {
    timestamps: true,
  }
);

const UserModel = model("User", UserSchema);

export default UserModel;
