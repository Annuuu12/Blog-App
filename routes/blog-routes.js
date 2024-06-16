import express from "express";
import { addBlog, deleteBlog, getAllBlogs, getById, getByUserId, updateBlog } from "../controllers/blog-controller.js";

const blogRouter = express.Router();

blogRouter.get("/", getAllBlogs);
blogRouter.post("/add", addBlog);
blogRouter.put("/update/:id", updateBlog);
blogRouter.get("/:id", getById); // corrected to use getById for retrieving a single blog by ID
blogRouter.delete("/:id", deleteBlog);
blogRouter.get("/user/:id", getByUserId); // corrected to use getByUserId for retrieving blogs by user ID

export default blogRouter;
