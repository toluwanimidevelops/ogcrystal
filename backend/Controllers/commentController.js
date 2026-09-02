import Blog from "../Schema/blogSchema.js";
import Comment from "../Schema/commentSchema.js";

export const createComment = async (req, res) => {
  try {
    const { blogId, name, email, comment } = req.body;
    if (!blogId) {
      return res
        .status(400)
        .json({ success: false, message: "Blog Id is required" });
    }
    if (!name | !email || !comment) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required" });
    }
    const blog = await Blog.findById(blogId);
    if (!blog.isPublished) {
      return res
        .status(400)
        .json({ success: false, message: "This Blog hasn't be published" });
    }
      const comm = await Comment.create({ blogId, name, email, comment });
      res.status(201).json({success: true, message:"Comment Created Successfully", comment:comm})
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

export const deleteComment = async(req, res)=>{
    try {
        const Del = await Comment.findByIdAndDelete(req.params.id);
        if (Del) {
            return res.status(404).json({success: false, message:"Comment not found"})
        }
        res.status(200).json({success: true, message: "Comment Deleted Successfully"})
    } catch (err) {
    res.status(400).json({ success: false, message: err.message });
    }
}
export const getAllCommment = async (req, res) => {
    try {
        const allComment = await Comment.find({}).populate("blogId", "title")
                res.status(200).json({success: true, message: "Comment Fetched Successfully", comment:allComment })

    } catch (error) {
            res.status(400).json({ success: false, message: err.message });

    }
}
export const getCommentByBlogId = async(req, res)=>{
  try{
      const comments = await Comment.find({ blogId: req.params.blogId })
      res.status(200).json({success: true, message: "Comments Fetched Successfully", comments})
  } catch (error) {
            res.status(400).json({ success: false, message: err.message });
    
  }
}
