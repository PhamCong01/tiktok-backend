import express, { Response, Request } from "express";
import dotenv from "dotenv";
dotenv.config();

import cors from "cors";
import connectToDb from "./config/db.config";
import routerApp from "./routers";

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());
connectToDb();
routerApp(app);
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
