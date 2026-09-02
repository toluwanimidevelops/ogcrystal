import express from "express";
import {
    createComment,
    getAllCommment,
  getCommentByBlogId,
  deleteComment,
} from "../Controllers/commentController.js";
import { Auth } from "../middleware/userAuthMiddleWare.js";

const router = express.Router();
router.post("/comments", createComment);
router.get("/comments", Auth, getAllCommment)
router.get("/comments/blog/:blogId", getCommentByBlogId);
router.delete("/comments/:id", Auth, deleteComment);

export default router;
