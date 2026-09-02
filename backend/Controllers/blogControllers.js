import Blog from "../Schema/blogSchema.js";
import Comment from "../Schema/commentSchema.js";
import MailingList from "../Schema/mailingList.js";

// Create Blog for Admin
export const createBlog = async (req, res) => {
  try {
    const { imageUrl, title, genre, content, isPublished } = req.body;
    if (!imageUrl || !title || !genre || !content) {
      return res
        .status(400)
        .json({ success: false, message: "Fill all the required fields" });
    }

    const shouldPublish = Boolean(isPublished);
    const blog = await Blog.create({
      imageUrl,
      title,
      genre,
      content,
      isPublished: shouldPublish,
      publishedAt: shouldPublish ? new Date() : null,
    });

    res.status(201).json({ success: true, blog });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

// Get all blogs for Admin
export const getAllBlogs = async (req, res) => {
  try {
    const blog = await Blog.find({}).sort({ createdAt: -1 });
    res.status(200).json({ success: true, blog });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

// Get Active Blogs
export const getActiveBlogs = async (req, res) => {
  try {
    const blog = await Blog.find({ isPublished: true }).sort({
      publishedAt: -1,
    });
    res.status(200).json({ success: true, blog });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};
// Get Active Blogs
export const getInActiveBlogs = async (req, res) => {
  try {
    const blog = await Blog.find({ isPublished: false }).sort({
      publishedAt: -1,
    });
    res.status(200).json({ success: true, blog });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

// Get ActiveBlog by Id for user
export const getBlogById = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) {
      return res
        .status(404)
        .json({ success: false, message: "Blog not found" });
    }
    if (!blog.isPublished) {
      return res
        .status(403)
        .json({ success: false, message: "Blog is not active" });
    }
    res.status(200).json({ success: true, blog });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

// Get Blog by Id for Admin
export const getBlogByIdAdmin = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) {
      return res
        .status(404)
        .json({ success: false, message: "Blog not found" });
    }
    res.status(200).json({ success: true, blog });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

// Update Blog by Id for Admin
export const updateBlog = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) {
      return res
        .status(404)
        .json({ success: false, message: "Blog not found" });
    }

    const { imageUrl, title, genre, content, isPublished } = req.body;
    const targetPublishedState =
      isPublished !== undefined ? Boolean(isPublished) : blog.isPublished;

    const updatedBlog = await Blog.findByIdAndUpdate(
      req.params.id,
      {
        imageUrl: imageUrl || blog.imageUrl,
        title: title || blog.title,
        genre: genre || blog.genre,
        content: content || blog.content,
        isPublished: targetPublishedState,
        // Sets Date when true, resets to null when false (Draft)
        publishedAt: targetPublishedState ? new Date() : null,
      },
      { new: true },
    );

    res.status(200).json({ success: true, blog: updatedBlog });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

// Update Blog Status
export const updateBlogStatus = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) {
      return res
        .status(404)
        .json({ success: false, message: "Blog not found" });
    }

    const { isPublished } = req.body;
    const targetState = Boolean(isPublished);

    const updatedBlog = await Blog.findByIdAndUpdate(
      req.params.id,
      {
        isPublished: targetState,
        // Sets Date when true, resets to null when false (Draft)
        publishedAt: targetState ? new Date() : null,
      },
      { new: true },
    );

    res.status(200).json({ success: true, blog: updatedBlog });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

// Delete Blog
export const deleteBlog = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) {
      return res
        .status(404)
        .json({ success: false, message: "Blog not found" });
    }
    await Blog.findByIdAndDelete(req.params.id);
    await Comment.deleteMany({ blogId: req.params.id });
    res
      .status(200)
      .json({ success: true, message: "Blog deleted successfully" });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};
// Get Dashboard 
export const getDashboard = async (req, res) => {
  try {
    // Run queries concurrently for better performance
    const [activeBlogs, inActiveBlogs, comments, mailingList] = await Promise.all([
      Blog.countDocuments({ isPublished: true }),
      Blog.countDocuments({ isPublished: false }),
      Comment.countDocuments(),
      MailingList.countDocuments(),
    ]);

    res.status(200).json({
      success: true,
      activeBlogCount: activeBlogs,
      inActiveBlogCount: inActiveBlogs,
      commentCounts: comments,
      mailingListCount: mailingList,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
