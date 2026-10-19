"use client";
import { createContext, useContext } from "react";
import { toast } from "react-hot-toast";
import {
  CreateBlogResponse,
  FetchBlogResponse,
  getActiveBlogs,
  getBlogById,
  getRelatedBlogById,
} from "./blog";
import axios from "axios";
import {
  CreateCommentResponse,
  FetchCommentResponse,
  createComment,
  getCommentsByBlogId,
} from "./comments";
import {
  ContactFormData,
  ContactFormResponse,
  submitContactForm,
} from "./contact";
export const api = axios.create({
  baseURL: "https://ogcrystalserver.vercel.app/",
});

interface AppContextType {
  getRelatedBlogById: (id: string) => Promise<FetchBlogResponse>;
  getActiveBlogs: () => Promise<FetchBlogResponse>;
  getBlogById: (id: string) => Promise<CreateBlogResponse>;
  submitContactForm: (data: ContactFormData) => Promise<ContactFormResponse>;
  getCommentsByBlogId: (blogId: string) => Promise<FetchCommentResponse>;
  createComment: ({
    blogId,
    name,
    email,
    comment,
  }: {
    blogId: string;
    name: string;
    email: string;
    comment: string;
  }) => Promise<CreateCommentResponse>;
}
const AppContext = createContext<AppContextType | null>(null);

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const value: AppContextType = {
    getRelatedBlogById,
    getActiveBlogs,
    getBlogById,
    submitContactForm,
    getCommentsByBlogId,
    createComment,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    toast.error("UseApp must be used within an AppProvider");
  }
  return context;
};
