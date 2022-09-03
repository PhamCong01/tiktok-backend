import express = require("express");
import userControllers from "../controllers/user.controllers";
const router = express.Router();

router.post("/create", userControllers.createUser);
router.get("/get/:id", userControllers.getUserById);
export default router;
