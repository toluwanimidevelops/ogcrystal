"use client";

import Input from "@/components/Input";
import { useApp } from "@/context/AppContext";
import { CreateBlogPayload } from "@/context/blogs/blog";
import React, { useState } from "react";
import { FiCheckCircle, FiImage } from "react-icons/fi";

const CreateBlogForm = () => {
  const { createBlog } = useApp();
  const [formData, setFormData] = useState<CreateBlogPayload>({
    blogId: "",
    imageUrl: "",
    title: "",
    genre: "Technology",
    content: "",
    isPublished: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [previewError, setPreviewError] = useState(false);
  const [picsLoading, setPicsLoading] = useState(false);

  const genres = [
    "Technology",
    "Design",
    "Backend",
    "Frontend",
    "Productivity",
    "Lifestyle",
  ];

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (name === "imageUrl") setPreviewError(false);
  };

  const postDetails = (pics: File | undefined) => {
    setPicsLoading(true);

    if (!pics) {
      console.warn("Please select an image file.");
      setPicsLoading(false);
      return;
    }

    if (
      pics.type === "image/jpeg" ||
      pics.type === "image/png" ||
      pics.type === "image/webp"
    ) {
      const data = new FormData();
      data.append("file", pics);
      data.append("upload_preset", "Ogcrystal");
      data.append("cloud_name", "daup1nrep");

      fetch("https://api.cloudinary.com/v1_1/daup1nrep/image/upload", {
        method: "POST",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          if (data?.secure_url || data?.url) {
            const uploadedUrl = data.secure_url || data.url;
            setFormData((prev) => ({ ...prev, imageUrl: uploadedUrl }));
            setPreviewError(false);
            console.log("Image Uploaded Successfully:", uploadedUrl);
          } else {
            console.error(
              "Cloudinary Error:",
              data?.error?.message || "Upload failed"
            );
          }
        })
        .catch((err) => {
          console.error("Network upload error:", err);
        })
        .finally(() => {
          setPicsLoading(false);
        });
    } else {
      console.warn("Invalid file format. Please select JPEG, PNG, or WEBP.");
      setPicsLoading(false);
    }
  };

  const handleTogglePublished = () => {
    setFormData((prev) => ({ ...prev, isPublished: !prev.isPublished }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await createBlog(formData);

      if (response?.success) {
        console.log("Blog created successfully!", response);
        setFormData({
          title: "",
          genre: "Technology",
          imageUrl: "",
          content: "",
          isPublished: false,
        });
      }
    } catch (error) {
      console.error("Failed to create blog:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full bg-white rounded-2xl p-6 flex flex-col gap-4">
      <div className="flex items-center justify-between pb-2 border-b border-gray-100">
        <div>
          <h2 className="text-md text-gray-800">Create Blog Post</h2>
          <p className="text-xs text-gray-500">
            Write, configure, and publish your latest article
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        {/* Title and Genre Section */}
        <div className="grid grid-cols-3 max-md:grid-cols-1 gap-6">
          <div className="col-span-2 flex flex-col gap-2">
            <Input
              title="Article Title"
              isImportant={true}
              type="text"
              value={formData.title}
              name="title"
              handleChange={handleChange}
              placeholder="e.g. Building Scalable APIs with Node & MongoDB"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-700">
              Genre / Category <span className="text-red-500">*</span>
            </label>

            <select
              name="genre"
              value={formData.genre}
              onChange={handleChange}
              className="text-sm bg-transparent h-12 border rounded border-gray-500/30 outline-none text-gray-700 px-2 w-full"
            >
              {genres.map((g) => (
                <option key={g} value={g}>
                  {g}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Cover Image Input and Live Preview */}
        <div className="flex flex-col gap-2">
          <div className="flex gap-4 items-start flex-col">
            <Input
              title="Image URL"
              placeholder="https://images.unsplash.com/photo-..."
              isImportant={true}
              type="url"
              name="imageUrl"
              handleChange={handleChange}
              value={formData.imageUrl}
            />

            {/* Image Upload / Preview Box */}
            <label
              htmlFor="image"
              className="w-full h-40 shrink-0 bg-gray-50 border border-gray-200 rounded-xl overflow-hidden flex items-center justify-center relative cursor-pointer"
            >
              <input
                id="image"
                className="hidden"
                type="file"
                accept="image/*"
                onChange={(e) => postDetails(e.target.files?.[0])}
              />
              {picsLoading ? (
                <span className="text-xs text-gray-400">Uploading image...</span>
              ) : formData.imageUrl && !previewError ? (
                <img
                  src={formData.imageUrl}
                  alt="Preview"
                  onError={() => setPreviewError(true)}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="flex flex-col items-center gap-1 text-gray-400">
                  <FiImage size={20} />
                  <span className="text-[10px]">Click to upload preview</span>
                </div>
              )}
            </label>
          </div>
        </div>

        {/* Article Body Content */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-700">
            Content <span className="text-red-500">*</span>
          </label>

          <textarea
            name="content"
            required
            rows={8}
            value={formData.content}
            onChange={handleChange}
            placeholder="Write your article content here..."
            className="w-full p-4 rounded border border-gray-500/30 text-sm focus:outline-none focus:border-[#2F73C9] transition-colors resize-y"
          ></textarea>
        </div>

        {/* Form Actions Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100 max-sm:flex-col max-sm:gap-4">
          {/* Status Toggle Button */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={handleTogglePublished}
              className={`w-12 h-6 flex items-center rounded-full p-1 transition-colors duration-300 ${
                formData.isPublished ? "bg-green-600" : "bg-gray-300"
              }`}
            >
              <div
                className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 ${
                  formData.isPublished ? "translate-x-6" : "translate-x-0"
                }`}
              />
            </button>
            <span className="text-xs font-medium text-gray-600">
              {formData.isPublished ? (
                <span className="text-green-700 font-semibold">
                  Publish Immediately
                </span>
              ) : (
                "Save as Draft"
              )}
            </span>
          </div>

          {/* Submit CTA */}
          <button
            type="submit"
            disabled={isSubmitting || picsLoading}
            className="px-6 py-2.5 bg-[#303846] hover:bg-[#232934] text-white font-medium text-sm rounded-xl transition-colors flex items-center gap-2 max-sm:w-full max-sm:justify-center disabled:opacity-50"
          >
            {isSubmitting ? (
              "Saving..."
            ) : (
              <>
                <FiCheckCircle size={16} />
                {formData.isPublished ? "Publish Post" : "Save Draft"}
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateBlogForm;