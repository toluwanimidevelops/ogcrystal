import { AxiosError } from "axios";
import { api } from "./AppContext";
import toast from "react-hot-toast";

export interface Blog {
  _id?: string;
  blogId?: string;
  imageUrl: string;
  title: string;
  genre: string;
  content: string;
  isPublished?: boolean | null;
  publishedAt?: string;
  createdAt?: string;
  updatedAt?: string;
}

export type CreateBlogPayload = Omit<Blog, "_id" | "createdAt" | "updatedAt">;

export interface CreateBlogResponse {
  success: boolean;
  message?: string;
  blog?: Blog;
}

export interface FetchBlogResponse {
  success: boolean;
  message?: string;
  blog?: Blog[];
}

// Get active Blogs
export const getActiveBlogs = async (): Promise<FetchBlogResponse> => {
  try {
    const response = await api.get<FetchBlogResponse>("/getActiveBlogs");
    return response.data;
  } catch (error) {
    const err = error as AxiosError<{ message: string }>;
    toast.error(err.response?.data?.message || "Failed to fetch active blogs");
    throw new Error(
      err.response?.data?.message || "Failed to fetch active blogs",
    );
  }
};

// Get Blog by Id
export const getBlogById = async ({
  id,
}: {
  id: string;
}): Promise<CreateBlogResponse> => {
  try {
    const response = await api.get<CreateBlogResponse>(`/activeblogs/${id}`);
    return response.data;
  } catch (error) {
    const err = error as AxiosError<{ message: string }>;
    toast.error(err.response?.data?.message || "Failed to fetch blog");
    throw new Error(err.response?.data?.message || "Failed to fetch blog");
  }
};
