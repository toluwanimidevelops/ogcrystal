import express from "express";
import { createBlog, getActiveBlogs, getInActiveBlogs, getAllBlogs, getBlogById, updateBlog, deleteBlog, getBlogByIdAdmin, updateBlogStatus } from "../Controllers/blogControllers.js";
import { Auth } from "../middleware/userAuthMiddleWare.js";

const router = express.Router();
router.post("/blogs",Auth, createBlog);
router.get("/getActiveBlogs", getActiveBlogs);
router.get("/getInActiveBlogs", Auth, getInActiveBlogs);
router.get("/getAllBlogs", Auth, getAllBlogs);
router.get("/blogs/:id",Auth, getBlogByIdAdmin);
router.get("/activeblogs/:id", getBlogById);
router.put("/blogs/:id", Auth, updateBlog);
router.delete("/blogs/:id",Auth, deleteBlog);
router.put("/updateblogstatus/:id", Auth, updateBlogStatus);

export default router;