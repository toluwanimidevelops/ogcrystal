"use client";

import { useApp } from "@/context/AppContext";
import { Blog } from "@/context/blog";
import { Comment } from "@/context/comments";
import { useState, useEffect, FormEvent } from "react";
import { toast } from "react-hot-toast";
import moment from "moment";
import { IoShareSocialOutline } from "react-icons/io5";
import { IoMdArrowBack } from "react-icons/io";
import BlogCard from "@/components/blogCard";

interface BlogDetailClientProps {
  id: string;
  initialBlog: Blog | null;
}

const BlogDetailClient = ({ id, initialBlog }: BlogDetailClientProps) => {
  const {
    getBlogById,
    getCommentsByBlogId,
    createComment,
    getRelatedBlogById,
  } = useApp()!;

  const [blog, setBlog] = useState<Blog | null>(initialBlog);
  const [comments, setComments] = useState<Comment[]>([]);
  const [relatedBlogs, setRelatedBlogs] = useState<Blog[]>([]);
  const [relatedBlogsLoading, setRelatedBlogsLoading] =
    useState<boolean>(false);
  const [relatedBlogsError, setRelatedBlogsError] = useState<string | null>();
  const [commentsLoading, setCommentsLoading] = useState<boolean>(false);
  const [commentsError, setCommentsError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(!initialBlog);
  const [error, setError] = useState<string | null>(null);
  const [commentSubmitting, setCommentSubmitting] = useState<boolean>(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    comment: "",
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setCommentSubmitting(true);

    try {
      const response = await createComment({
        blogId: id,
        name: formData.name,
        email: formData.email,
        comment: formData.comment,
      });

      if (response?.success) {
        toast.success("Comment submitted successfully!");
        setFormData({ name: "", email: "", comment: "" });
        fetchComments();
      } else {
        toast.error(response?.message || "Failed to submit comment.");
      }
    } catch (err) {
      console.error(err);
      toast.error("An error occurred while submitting your comment.");
    } finally {
      setCommentSubmitting(false);
    }
  };

  const fetchBlog = async () => {
    setLoading(true);
    try {
      const response = await getBlogById(id);
      if (response.success && response.blog) {
        setBlog(response.blog);
      } else {
        setError(response.message || "Failed to fetch blog.");
        toast.error(response.message || "Failed to fetch blog.");
      }
    } catch (err) {
      toast.error("Failed to fetch blog.");
      console.error(err);
      setError("Failed to fetch blog.");
    } finally {
      setLoading(false);
    }
  };
  const fetchRelatedBlogs = async () => {
    setRelatedBlogsLoading(true);
    try {
      const response = await getRelatedBlogById(id);
      if (response.success && response.blog) {
        setRelatedBlogs(response.blog);
      } else {
        setRelatedBlogsError(
          response.message || "Failed to fetch Related Blogs",
        );
      }
    } catch (error) {
      console.error(error);
      setRelatedBlogsError("Failed to fetch Related Blogs");
    } finally {
      setRelatedBlogsLoading(false);
    }
  };
  const handleShare = async () => {
    const shareData = {
      title: blog?.title || "Check this out!",
      text:
        blog?.content?.slice(0, 100) ||
        "Learn how to implement sharing in React.",
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
        console.log("Content shared successfully!");
      } catch (error) {
        console.error("Error sharing:", error);
      }
    } else {
      try {
        await navigator.clipboard.writeText(shareData.url);
        alert("Link copied to clipboard!");
      } catch (err) {
        console.error("Fallback failed:", err);
      }
    }
  };

  const fetchComments = async () => {
    setCommentsLoading(true);
    try {
      const response = await getCommentsByBlogId(id);
      if (response.success && response.comments) {
        setComments(response.comments);
      } else {
        setCommentsError(response.message || "Failed to fetch comments.");
      }
    } catch (err) {
      console.error(err);
      setCommentsError("Failed to fetch comments.");
    } finally {
      setCommentsLoading(false);
    }
  };

  useEffect(() => {
    // Only fetch the blog client-side if we didn't already get it from the server
    if (!initialBlog) {
      fetchBlog();
    }
    fetchComments();
    fetchRelatedBlogs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <div className="w-full  pb-10 bg-[#071a3d] pt-30 ">
        <div className="max-w-7xl  px-6 md:px-12 mx-auto ">
          <div className="">
            <button className="flex items-center gap-2 text-white cursor-pointer mb-5 text-sm">
              <IoMdArrowBack className="text-white" />
              Back to Insight
            </button>
            <p className="px-3 text-[#b8944d] border border-white text-sm mb-7 rounded-full py-1 bg-gray-50/10 w-fit ">
              {blog?.genre}
            </p>
            <div className="flex max-md:flex-col justify-between">
              <div>
                <h1 className="text-white text-4xl font-semibold">
                  {blog?.title}
                </h1>
                <div className="flex gap-2 text-gray-50">
                  <p>Og Crystal</p>.{" "}
                  <p>
                    {moment(blog?.publishedAt, "YYYYMMDD").format("MMM Do YY")}
                  </p>
                  . <p>4 min Read</p>
                </div>
              </div>
              <div className="max-w-full w-[700px] leading-loose break-words text-white ">
                {blog?.content.slice(0, 400)}...
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex max-md:flex-col px-6 md:px-6 mt-10 gap-10 max-w-7xl mx-auto flex-wrap">
        <div className="max-w-full  flex-1 mx-auto  overflow-hidden text-[#071a3d]">
          <img
            src={blog?.imageUrl}
            alt={blog?.title}
            className="w-full max-h-180 rounded-2xl object-cover"
          />
          <div>
            <div className=" mx-auto max-md:px-2 mt-6">
              <h1 className="text-2xl font-bold font-mulish text-[50px] max-md:text-[30px] leading-15 capitalize tracking-tighter">
                {blog?.title}
              </h1>
              <div>
                <p className="text-sm w-full break-words break-all whitespace-normal overflow-hidden text-[#7a7a7a]/70 font-medium mt-1">
                  {blog?.content}
                </p>
              </div>
              <div className="w-full md:hidden my-3 bg-blue-100 rounded-2xl  border-2   border-[#071A3D]/10 p-5 ">
                <h3 className="text-xl text-black/80 font-semibold text-mulish">
                  Enjoyed This?
                </h3>

                <div className="mt-1">
                  <div className=" ">
                    <p className="text-mulish text-gray-700 text-sm">
                      Share it with someone who needs it.
                    </p>
                  </div>

                  <button
                    onClick={handleShare}
                    className="border-[#071A3D] flex items-center justify-center gap-2 cursor-pointer hover:bg-[#071A3D] hover:text-white duration-700 border text-[#071A3D] mt-5 p-3 w-full"
                  >
                    <IoShareSocialOutline /> Share
                  </button>
                </div>
              </div>
              {/* Comments Display */}
              <div className="py-4">
                <h2 className="font-semibold text-lg">Comments</h2>
                {commentsLoading && <p>Loading comments...</p>}
                {commentsError && (
                  <p className="text-red-500">{commentsError}</p>
                )}
                {!commentsLoading &&
                  !commentsError &&
                  comments.length === 0 && (
                    <p className="text-gray-500">No comments available.</p>
                  )}
                {!commentsLoading && comments.length > 0 && (
                  <div className="space-y-3 mt-3">
                    {comments.map((item) => (
                      <div
                        key={item._id}
                        className="p-3  w-full max-w-[500px] overflow-hidden  rounded-md border border-gray-200 bg-gray-50"
                      >
                        <div className="flex justify-between ">
                          <p className="font-semibold text-sm">{item.name}</p>
                          <p>{moment(item.createdAt).fromNow()}</p>
                        </div>
                        <p className="text-sm break-words break-all whitespace-normal text-wrap text-gray-600">
                          {item.comment}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Comment Form */}
              <div className="max-w-3xl">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="flex flex-col gap-4 sm:flex-row">
                    <div className="flex-1">
                      <label
                        htmlFor="name"
                        className="mb-1 text-sm block font-semibold text-gray-700"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full rounded-md border border-gray-300 p-2.5 outline-none"
                      />
                    </div>

                    <div className="flex-1">
                      <label
                        htmlFor="email"
                        className="mb-1 text-sm block font-semibold text-gray-700"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full rounded-md border border-gray-300 p-2.5 outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="comment"
                      className="mb-1 text-sm block font-semibold text-gray-700"
                    >
                      Comment
                    </label>
                    <textarea
                      id="comment"
                      rows={4}
                      required
                      value={formData.comment}
                      onChange={(e) =>
                        setFormData({ ...formData, comment: e.target.value })
                      }
                      className="w-full rounded-md border border-gray-300 p-2.5 outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={commentSubmitting}
                    className="w-fit rounded-md bg-[#071a3d] py-3 px-5 text-xs uppercase text-white transition-colors hover:bg-[#071a3d]/90 disabled:opacity-50"
                  >
                    {commentSubmitting ? "Submitting..." : "Submit"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[400px] max-md:hidden  max-w-full">
          <div className="sticky flex gap-4 flex-col top-30">
            <div className="w-full  rounded-2xl bg-white border-2   border-[#071A3D]/10 p-5 ">
              <h3 className="text-2xl text-black/80 font-semibold text-mulish">
                Content Details
              </h3>

              <div className="mt-3">
                <div className="flex border-b border-[#071A3D]/20 py-4 justify-between">
                  <p className="text-mulish text-gray-700 text-sm">Category:</p>
                  <p className="text-sm">{blog?.genre}</p>
                </div>
                <div className="flex border-b border-[#071A3D]/20 py-4 justify-between">
                  <p className="text-mulish text-gray-700 text-sm">
                    Read Time:
                  </p>
                  <p className="text-sm">4 min</p>
                </div>
                <div className="flex border-b border-[#071A3D]/20 py-4 justify-between">
                  <p className="text-mulish text-gray-700 text-sm">
                    Date Published:
                  </p>
                  <p className="text-sm">
                    {moment(blog?.publishedAt, "YYYYMMDD").format("MMM Do YY")}
                  </p>
                </div>
                <button className="border-[#071A3D] flex items-center justify-center gap-2 cursor-pointer hover:bg-[#071A3D] hover:text-white duration-700 border text-[#071A3D] mt-5 p-3 w-full">
                  <IoMdArrowBack /> Back to Insight
                </button>
              </div>
            </div>
            <div className="w-full bg-blue-100 rounded-2xl  border-2   border-[#071A3D]/10 p-5 ">
              <h3 className="text-xl text-black/80 font-semibold text-mulish">
                Enjoyed This?
              </h3>

              <div className="mt-1">
                <div className=" ">
                  <p className="text-mulish text-gray-700 text-sm">
                    Share it with someone who needs it.
                  </p>
                </div>

                <button
                  onClick={handleShare}
                  className="border-[#071A3D] flex items-center justify-center gap-2 cursor-pointer hover:bg-[#071A3D] hover:text-white duration-700 border text-[#071A3D] mt-5 p-3 w-full"
                >
                  <IoShareSocialOutline /> Share
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-7xl px-6  max-w-full mx-auto">
        <h1 className="font-mulish text-xl mt-5 font-bold">Related Blogs</h1>
        <div className="grid gap-5 mt-2 max-md:grid-cols-2 max-sm:grid-cols-1 grid-cols-3">
          {relatedBlogsLoading ? (
            <div className="col-span-3 max-md:col-span-2 max-sm:col-span-1 flex justify-center p-3">
              <div className="size-8 rounded-full border-4 border-t-blue-500 border-gray-200 animate-spin " />
            </div>
          ) : relatedBlogsError ? (
            <div className="col-span-3 flex justify-center p-3">
              <p className="text-center text-red-700">{relatedBlogsError}</p>
            </div>
          ) : relatedBlogs.length === 0 ? (
            <div className="col-span-3 flex justify-center p-3">
              <p className="text-center text-gray-600">No related blogs </p>
            </div>
          ) : (
            relatedBlogs.map((blog) => (
              <BlogCard
                key={blog._id}
                id={blog._id as string}
                category={blog.genre}
                image={blog.imageUrl}
                text={blog.content}
                title={blog.title}
              />
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default BlogDetailClient;
