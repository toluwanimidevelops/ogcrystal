"use client";

import React, { useState, useEffect } from "react";
import DashboardCard from "@/components/dashboardCard";
import { TfiWrite } from "react-icons/tfi";
import {
  FiEdit2,
  FiTrash2,
  FiSend,
  FiEyeOff,
  FiMessageSquare,
} from "react-icons/fi";
import { useApp } from "@/context/AppContext";
import { HiOutlineEye, HiOutlineEyeOff } from "react-icons/hi";
import DashboardCardSkeleton from "@/components/dashboardCardLoading";
import { Blog } from "@/context/blogs/blog";
import { Comment } from "@/context/comments/comments";
import moment from "moment";

const Page = () => {
  const { getDashboard } = useApp();
  const {
    getAllBlogs,
    deleteBlog,
    updateBlogStatus,
    updateBlog,
    deleteComment,
    getAllComment,
  } = useApp();

  const [stats, setStats] = useState({
    activeBlogCount: 0,
    inActiveBlogCount: 0,
    commentCounts: 0,
    mailingListCount: 0,
  });

  const [statsLoading, setStatsLoading] = useState(false);
  const [statsError, setStatsError] = useState<unknown>(null);
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [comments, setComments] = useState<Comment[]>([]);
  const [blogLoading, setBlogLoading] = useState<boolean>(false);
  const [commentLoading, setCommentLoading] = useState<boolean>(false);
  const [blogError, setBlogError] = useState<string | null | boolean>(false);
  const [commentsError, setCommentsError] = useState<string | null | boolean>(
    false,
  );

  const fetchComments = async () => {
    setCommentLoading(true);
    try {
      const data = await getAllComment();
      if (data?.success) {
        setComments((data.comment as Comment[]) || []);
      } else {
        setCommentsError(data?.message || "Failed to fetch blogs.");
      }
    } catch (err) {
      setCommentsError(
        err instanceof Error ? err.message : "An unexpected error occurred.",
      );
    } finally {
      setCommentLoading(false);
    }
  };

  const fetchAllBlogs = async () => {
    setBlogLoading(true);
    try {
      const data = await getAllBlogs();
      if (data?.success) {
        setBlogs((data.blog as Blog[]) || []);
      } else {
        setBlogError(data?.message || "Failed to fetch blogs.");
      }
    } catch (err) {
      setBlogError(
        err instanceof Error ? err.message : "An unexpected error occurred.",
      );
    } finally {
      setBlogLoading(false);
    }
  };

  const getDashboardStats = async () => {
    setStatsLoading(true);
    try {
      const response = await getDashboard();
      if (response.success) {
        setStats({
          activeBlogCount: response?.activeBlogCount || 0,
          inActiveBlogCount: response?.inActiveBlogCount || 0,
          commentCounts: response.commentCounts || 0,
          mailingListCount: response.mailingListCount || 0,
        });
      }
    } catch (err) {
      setStatsError(err);
    } finally {
      setStatsLoading(false);
    }
  };

  useEffect(() => {
    getDashboardStats();
    fetchAllBlogs();
    fetchComments();
  }, []);

  // Handle Comment Delete
  const handleDeleteComment = async (id: string) => {
    if (!confirm("Are you sure you want to delete this comment?")) return;

    try {
      const res = await deleteComment({ id });
      if (res?.success) {
        // Filter out deleted comment by checking both common MongoDB key (_id) and custom key (commentId)
        setComments((prev) =>
          prev.filter((c) => c._id !== id && (c as any).commentId !== id),
        );
        // Refresh counter metrics
        getDashboardStats();
      }
    } catch (err) {
      console.error("Failed to delete comment:", err);
    }
  };

  // Handle Publish / Unpublish Toggle
  const handleTogglePublish = async (id: string, currentStatus: boolean) => {
    if (
      !confirm(
        `Are you sure you want to ${currentStatus ? "unpublish" : "publish"} this blog?`,
      )
    )
      return;

    try {
      const res = await updateBlogStatus({ id, isPublished: !currentStatus });

      if (res?.success && res.blog) {
        const updatedBlog = res.blog;
        setBlogs((prev) =>
          prev.map((b) => (b._id === id || b.blogId === id ? updatedBlog : b)),
        );
        getDashboardStats();
      }
    } catch (err) {
      console.error("Failed to toggle status:", err);
    }
  };

  // Handle Delete Blog
  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this blog?")) return;
    try {
      const res = await deleteBlog({ id });
      if (res?.success) {
        setBlogs((prev) => prev.filter((b) => b._id !== id && b.blogId !== id));
        getDashboardStats();
      }
    } catch (err) {
      console.error("Failed to delete blog:", err);
    }
  };

  const handleEdit = (id: string) => {
    console.log("Edit blog ID:", id);
  };

  return (
    <div className="w-full flex flex-col gap-6">
      {/* Top Metric Cards */}
      <div className="grid grid-cols-4 max-lg:grid-cols-3 max-lg:gap-4 max-md:grid-cols-2 max-sm:grid-cols-1 max-sm:gap-2 gap-6">
        {statsLoading ? (
          Array.from({ length: 4 }).map((_, ind) => (
            <DashboardCardSkeleton key={ind} />
          ))
        ) : (
          <>
            <DashboardCard
              special
              name="Active Blogs"
              count={stats.activeBlogCount}
              iconBgColor="bg-white/30"
              icon={<HiOutlineEye />}
            />
            <DashboardCard
              name="Drafts"
              count={stats.inActiveBlogCount}
              iconBgColor="bg-[#2F73C9]"
              icon={<HiOutlineEyeOff color="white" />}
            />
            <DashboardCard
              name="Comments"
              count={stats.commentCounts}
              iconBgColor="bg-[#B8944D]"
              icon={<FiMessageSquare color="white" />}
            />
            <DashboardCard
              name="Mailing List"
              count={stats.mailingListCount}
              iconBgColor="bg-[#303846]"
              icon={<TfiWrite color="white" />}
            />
          </>
        )}
      </div>

      {/* Middle Layout Containers */}
      <div className="grid grid-cols-2 max-md:grid-cols-1 gap-6">
        {/* RECENT COMMENTS CARD */}
        <div className="min-h-[328px] flex flex-col justify-between w-full bg-white rounded-2xl p-6 ">
          <div>
            <div className="flex items-center justify-between mb-1">
              <h1 className="text-md text-gray-800 ">
                Recent Comments
              </h1>
              <span className="text-xs text-gray-400 font-medium">
                {comments.length} total
              </span>
            </div>
            <p className="text-xs text-gray-500 mb-4">
              Latest comments made on your blogs
            </p>

            {commentLoading ? (
              <div className="space-y-3 py-2">
                {Array.from({ length: 3 }).map((_, idx) => (
                  <div
                    key={idx}
                    className="animate-pulse flex items-start gap-3 p-3 rounded-xl bg-gray-50"
                  >
                    <div className="w-8 h-8 rounded-full bg-gray-200 shrink-0" />
                    <div className="flex-1 space-y-2">
                      <div className="h-3 bg-gray-200 rounded w-1/3" />
                      <div className="h-3 bg-gray-200 rounded w-3/4" />
                    </div>
                  </div>
                ))}
              </div>
            ) : comments.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-10 text-center">
                <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center mb-3">
                  <FiMessageSquare className="w-6 h-6 text-gray-300" />
                </div>
                <p className="text-sm font-medium text-gray-600 mb-1">
                  No comments yet
                </p>
                <p className="text-xs text-gray-400 max-w-[220px]">
                  When readers leave feedback on your articles, they will show
                  up here.
                </p>
              </div>
            ) : (
              <div className="flex flex-col gap-2">
                {comments.slice(0, 3).map((e, ind) => {
                  const commentId = e._id || (e as any).commentId || "";
                  return (
                    <div
                      key={commentId || ind}
                      className="py-3 px-3 flex flex-col gap-1 hover:bg-gray-100/60 bg-gray-50/70 rounded-xl transition-colors group relative border border-gray-100"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2 overflow-hidden">
                          <span className="text-sm font-medium text-gray-800 truncate">
                            {e.name}
                          </span>
                          <span className="text-xs text-gray-400 truncate">
                            ({e.email})
                          </span>
                        </div>
                        <div className="flex items-center gap-2 shrink-0">
                          <span className="text-[11px] text-gray-400">
                            {moment(e.createdAt).fromNow()}
                          </span>
                          {/* DELETE COMMENT BUTTON */}
                          <button
                            onClick={() => handleDeleteComment(commentId)}
                            title="Delete Comment"
                            className="p-1 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded transition-colors"
                          >
                            <FiTrash2 size={14} />
                          </button>
                        </div>
                      </div>

                      {e.blogId?.title && (
                        <span className="text-xs text-blue-600 font-medium truncate">
                          On: {e.blogId.title}
                        </span>
                      )}

                      <p className="text-xs text-gray-600 line-clamp-2 mt-0.5 bg-white p-2 rounded-md border border-gray-100 shadow-2xs">
                        {e.comment}
                      </p>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>

        {/* MAILING LIST CARD */}
        <div className="min-h-82 w-full bg-white rounded-2xl p-6 ">
          <h1 className="text-md  text-gray-800 mb-2">
            Mailing List
          </h1>
          <p className="text-xs text-gray-500">
            Recent emails that joined your mailing list.
          </p>
        </div>
      </div>

      {/* Recent Blogs Table Container */}
      <div className="w-full bg-white rounded-2xl p-6  flex flex-col gap-4">
        <div className="flex items-center justify-between pb-2 border-b border-gray-100">
          <div>
            <h2 className="text-md  text-gray-800">
              Recent Blogs
            </h2>
            <p className="text-xs text-gray-500">
              Manage, edit, and publish your latest articles
            </p>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-sm">
            <thead>
              <tr className="border-b border-gray-100 text-gray-400 text-md">
                <td className="py-3 text-md px-4">Article</td>
                <td className="py-3 text-md px-4">Genre</td>
                <td className="py-3 text-md px-4">Status</td>
                <td className="py-3 text-md px-4">Published Date</td>
                <td className="py-3 text-md px-4 text-right">Actions</td>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {blogs.map((blog) => {
                const targetId = blog._id || blog.blogId || "";
                return (
                  <tr
                    key={targetId || blog.title}
                    className="hover:bg-gray-50/60 transition-colors"
                  >
                    <td className="py-3.5 px-4">
                      <div className="flex items-center gap-3">
                        <img
                          src={blog.imageUrl}
                          alt={blog.title}
                          className="w-10 h-10 rounded-lg object-cover"
                        />
                        <span className="font-medium text-gray-800 line-clamp-1 max-w-[240px]">
                          {blog.title}
                        </span>
                      </div>
                    </td>

                    <td className="py-3.5 px-4">
                      <span className="px-2.5 py-1 text-xs font-medium bg-gray-100 text-gray-600 rounded-md">
                        {blog.genre}
                      </span>
                    </td>

                    <td className="py-3.5 px-4">
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          blog.isPublished
                            ? "bg-green-50 text-green-700 border border-green-200/60"
                            : "bg-amber-50 text-amber-700 border border-amber-200/60"
                        }`}
                      >
                        {blog.isPublished ? "Published" : "Draft"}
                      </span>
                    </td>

                    <td className="py-3.5 px-4 text-gray-500 text-xs">
                      {blog.publishedAt
                        ? new Date(blog.publishedAt).toLocaleDateString(
                            "en-US",
                            {
                              month: "short",
                              day: "numeric",
                              year: "numeric",
                            },
                          )
                        : "—"}
                    </td>

                    <td className="py-3.5 px-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button
                          onClick={() =>
                            handleTogglePublish(
                              targetId,
                              !!blog.isPublished,
                            )
                          }
                          title={blog.isPublished ? "Unpublish" : "Publish"}
                          className={`p-2 rounded-lg transition-colors ${
                            blog.isPublished
                              ? "text-amber-600 hover:bg-amber-50"
                              : "text-green-600 hover:bg-green-50"
                          }`}
                        >
                          {blog.isPublished ? (
                            <FiEyeOff size={16} />
                          ) : (
                            <FiSend size={16} />
                          )}
                        </button>

                        <button
                          onClick={() => handleEdit(targetId)}
                          title="Edit Blog"
                          className="p-2 rounded-lg text-blue-600 hover:bg-blue-50 transition-colors"
                        >
                          <FiEdit2 size={16} />
                        </button>

                        <button
                          onClick={() => handleDelete(targetId)}
                          title="Delete Blog"
                          className="p-2 rounded-lg text-red-600 hover:bg-red-50 transition-colors"
                        >
                          <FiTrash2 size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          {blogs.length === 0 && (
            <div className="py-12 text-center text-gray-400 text-sm">
              No blogs found.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;