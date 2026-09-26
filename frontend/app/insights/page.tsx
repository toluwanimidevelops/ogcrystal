"use client";
import { useEffect, useState } from "react";
import Header from "@/components/About/Header";
import React from "react";
import { Blog } from "@/context/blog";
import { useApp } from "@/context/AppContext";
import toast from "react-hot-toast";
import BlogCard from "@/components/blogCard";
const Page = () => {
  const { getActiveBlogs } = useApp()!;
  const [blogs, setBlogs] = React.useState<Blog[]>([]);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string | null>(null);
  const fetchBlogs = async () => {
    setLoading(true);
    try {
      const response = await getActiveBlogs();
      if (response.success && response.blog) {
        toast.success("Blogs fetched successfully");
        setBlogs(response.blog);
      } else {
        setError(response.message || "Failed to fetch blogs.");
        console.error("Failed to fetch blogs:", response.message);
      }
    } catch (err) {
      console.error(err);
      setError("Failed to fetch blogs.");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchBlogs();
  }, []);
  return (
    <div>
      <Header
        subText={
          "Ideas for better workplaces, better careers and better growth."
        }
        text={"Insights"}
      />
      <div className="max-w-full w-7xl px-6 md:px-12 grid mx-auto my-12 overflow-hidden grid-cols-3 gap-6">
        {loading && <p className="col-span-3">Loading blogs...</p>}
        {error && <p className="col-span-3 text-red-500">{error}</p>}
        {!loading && !error && blogs.length === 0 && (
          <p className="col-span-3 text-gray-500">No blogs available.</p>
        )}
        {blogs.map((blog) => (
          <BlogCard
            key={blog._id}
            id={blog._id as string}
            category={blog.genre}
            image={blog.imageUrl}
            text={blog.content}
            title={blog.title}
          />
        ))}
      </div>
    </div>
  );
};

export default Page;
