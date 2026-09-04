"use client";
import { useEffect, useState } from "react";
import Header from "@/components/About/Header";
import React from "react";
import { Blog } from "@/context/blog";
import { useApp } from "@/context/AppContext";

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
    getActiveBlogs();
  }, []);
  return (
    <div>
      <Header
        subText={
          "Ideas for better workplaces, better careers and better growth."
        }
        text={"Insights"}
      />
    </div>
  );
};

export default Page;
