import express = require("express");
import CommentControllers from "../controllers/comment.controllers";
const router = express.Router();

router.post("/create", CommentControllers.createComment);
router.delete("/delete/:id", CommentControllers.deleteComment);
router.put("/update/:id", CommentControllers.updateComment);

export default router;
