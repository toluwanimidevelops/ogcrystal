"use client";
import { createContext, useContext } from "react";
import { toast } from "react-hot-toast";
import {
  CreateBlogResponse,
  FetchBlogResponse,
  getActiveBlogs,
  getBlogById,
} from "./blog";
import axios from "axios";
export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000",
});
interface ID {
  id: string;
}
interface AppContextType {
  getActiveBlogs: () => Promise<FetchBlogResponse>;
  getBlogById: (id: ID) => Promise<CreateBlogResponse>;
}
const AppContext = createContext<AppContextType | null>(null);

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const value: AppContextType = {
    getActiveBlogs,
    getBlogById,
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
