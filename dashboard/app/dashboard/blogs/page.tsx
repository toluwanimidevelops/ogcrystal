"use client";
import { useApp } from "@/context/AppContext";
import { Blog } from "@/context/blogs/blog";
import { useState, useEffect, useCallback } from "react";
import { FiEdit2, FiEyeOff, FiSend, FiTrash2, FiX } from "react-icons/fi";

const Page = () => {
  const { getAllBlogs, deleteBlog, updateBlogStatus, updateBlog } = useApp();
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Edit Modal State
  const [editingBlog, setEditingBlog] = useState<Blog | null>(null);
  const [editTitle, setEditTitle] = useState("");
  const [editGenre, setEditGenre] = useState("");
  const [actionLoading, setActionLoading] = useState<boolean>(false);

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await getAllBlogs();
      if (data?.success) {
        setBlogs(data.blog as Blog[]);
      } else {
        setError(data?.message || "Failed to fetch blogs.");
      }
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "An unexpected error occurred.",
      );
    } finally {
      setLoading(false);
    }
  }, [getAllBlogs]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // Handle Publish / Unpublish Toggle
  const handleTogglePublish = async (id: string, currentStatus: boolean) => {
    if (!confirm(
      `Are you shure you want to ${currentStatus ? "unpublish" : "publish"} this blog`,
    )) return;
    
      try {
        const res = await updateBlogStatus({ id, isPublished: !currentStatus });

        // Check for res.success and ensure res.blog exists
        if (res?.success && res.blog) {
          const updatedBlog = res.blog;
          setBlogs((prev) =>
            prev.map((b) =>
              b._id === id || b.blogId === id ? updatedBlog : b,
            ),
          );
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
      }
    } catch (err) {
      console.error("Failed to delete blog:", err);
    }
  };

  // Open Edit Modal
  const handleEdit = (blog: Blog) => {
    setEditingBlog(blog);
    setEditTitle(blog.title);
    setEditGenre(blog.genre);
  };

  // Submit Blog Updates
  const handleSaveEdit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingBlog) return;
    const targetId = editingBlog._id || editingBlog.blogId;
    if (!targetId) return;

    setActionLoading(true);

    try {
      const res = await updateBlog({
        blogId: targetId,
        imageUrl: editingBlog.imageUrl,
        title: editTitle,
        genre: editGenre,
        content: editingBlog.content,
        isPublished: editingBlog.isPublished ?? false,
      });

      if (res?.success) {
        setBlogs((prev) =>
          prev.map((b) =>
            b._id === targetId || b.blogId === targetId
              ? { ...b, title: editTitle, genre: editGenre }
              : b,
          ),
        );
        setEditingBlog(null);
      }
    } catch (err) {
      console.error("Failed to update blog:", err);
    } finally {
      setActionLoading(false);
    }
  };

  if (loading) {
    return <div className="p-6 text-gray-500">Loading...</div>;
  }

  if (error) {
    return <div className="p-6 text-red-500">Error: {error}</div>;
  }

  return (
      
      <div className="w-full bg-white rounded-2xl p-6   flex flex-col gap-4">
        <div className="flex items-center justify-between pb-2 border-b border-gray-100">
          <div>
            <h2 className="text-md  text-gray-800">Recent Blogs</h2>
            <p className="text-xs text-gray-500">Manage, edit, and publish your latest articles</p>
          </div>
        </div>
    <div>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse text-sm">
          <thead>
            <tr className="border-b border-gray-100 text-gray-400 font-medium">
              <th className="py-3 px-4 font-normal">Article</th>
              <th className="py-3 px-4 font-normal">Genre</th>
              <th className="py-3 px-4 font-normal">Status</th>
              <th className="py-3 px-4 font-normal">Published Date</th>
              <th className="py-3 px-4 text-right font-normal">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {blogs.map((blog) => {
              const blogId = blog._id || blog.blogId || "";
              return (
                <tr
                  key={blogId}
                  className="hover:bg-gray-50/60 transition-colors"
                >
                  {/* Title & Image Column */}
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

                  {/* Genre Column */}
                  <td className="py-3.5 px-4">
                    <span className="px-2.5 py-1 text-xs font-medium bg-gray-100 text-gray-600 rounded-md">
                      {blog.genre}
                    </span>
                  </td>

                  {/* Status Column */}
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

                  {/* Date Column */}
                  <td className="py-3.5 px-4 text-gray-500 text-xs">
                    {blog.publishedAt
                      ? new Date(blog.publishedAt).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })
                      : "—"}
                  </td>

                  {/* Action Column */}
                  <td className="py-3.5 px-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button
                        onClick={() =>
                          handleTogglePublish(blogId, !!blog.isPublished)
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
                        onClick={() => handleEdit(blog)}
                        title="Edit Blog"
                        className="p-2 rounded-lg text-blue-600 hover:bg-blue-50 transition-colors"
                      >
                        <FiEdit2 size={16} />
                      </button>

                      <button
                        onClick={() => handleDelete(blogId)}
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

      {/* Quick Edit Modal */}
      {editingBlog && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-md w-full p-6 shadow-lg">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold text-gray-900">Edit Article</h3>
              <button
                onClick={() => setEditingBlog(null)}
                className="text-gray-400 hover:text-gray-600"
              >
                <FiX size={20} />
              </button>
            </div>
            <form onSubmit={handleSaveEdit} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">
                  Title
                </label>
                <input
                  type="text"
                  value={editTitle}
                  onChange={(e) => setEditTitle(e.target.value)}
                  className="w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">
                  Genre
                </label>
                <input
                  type="text"
                  value={editGenre}
                  onChange={(e) => setEditGenre(e.target.value)}
                  className="w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setEditingBlog(null)}
                  className="px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-lg"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={actionLoading}
                  className="px-4 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
                >
                  {actionLoading ? "Saving..." : "Save Changes"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  </div>
  );
};

export default Page;
