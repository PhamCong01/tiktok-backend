import mongoose from "mongoose";
import dotenv from "dotenv";
import variables from "./types.config";
dotenv.config();
const connectToDb: () => Promise<void> = async () => {
  try {
    const dbUrl = `mongodb+srv://${variables.nameDatabase}:${variables.password}@cluster0.qr5m1kr.mongodb.net/?retryWrites=true&w=majority`;
    const db = await mongoose.connect(dbUrl, () => {
      console.log("connected to db");
    });
    return db;
  } catch (error) {
    console.log(error);
  }
};

export default connectToDb;
