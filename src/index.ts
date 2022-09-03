import express, { Response, Request } from "express";
import dotenv from "dotenv";
dotenv.config();

import cors from "cors";
import connectToDb from "./config/db.config";

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());
connectToDb();
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
