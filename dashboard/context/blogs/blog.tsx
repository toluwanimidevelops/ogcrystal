import { AxiosError } from "axios";
import { api } from "../AppContext";
import { toast } from "react-hot-toast/headless";

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

export interface DeleteBlogResponse {
  success: boolean;
  message?: string;
}

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

// Create Blog
export const createBlog = async (
  payload: CreateBlogPayload
): Promise<CreateBlogResponse> => {
  try {
    const response = await api.post<CreateBlogResponse>("/blogs", payload);
    toast.success("Blog created successfully");
    return response.data;
  } catch (error) {
    const err = error as AxiosError<{ message: string }>;
    toast.error(err.response?.data?.message || "Failed to create blog");
    throw new Error(err.response?.data?.message || "Failed to create blog");
  }
};

// Get all Blogs
export const getAllBlogs = async (): Promise<FetchBlogResponse> => {
  try {
    const response = await api.get<FetchBlogResponse>("/getAllBlogs");
    toast.success("Blogs fetched successfully");
    return response.data;
  } catch (error) {
    const err = error as AxiosError<{ message: string }>;
    toast.error(err.response?.data?.message || "Failed to fetch blogs");
    throw new Error(err.response?.data?.message || "Failed to fetch blogs");
  }
};

// Get active Blogs
export const getActiveBlogs = async (): Promise<FetchBlogResponse> => {
  try {
    const response = await api.get<FetchBlogResponse>("/getActiveBlogs");
    toast.success("Active blogs fetched successfully");
    return response.data;
  } catch (error) {
    const err = error as AxiosError<{ message: string }>;
    toast.error(err.response?.data?.message || "Failed to fetch active blogs");
    throw new Error(err.response?.data?.message || "Failed to fetch active blogs");
  }
};
// Get active Blogs
export const getInActiveBlogs = async (): Promise<FetchBlogResponse> => {
  try {
    const response = await api.get<FetchBlogResponse>("/getInActiveBlogs");
    toast.success("Inactive blogs fetched successfully");
    return response.data;
  } catch (error) {
    const err = error as AxiosError<{ message: string }>;
    toast.error(err.response?.data?.message || "Failed to fetch inactive blogs");
    throw new Error(err.response?.data?.message || "Failed to fetch inactive blogs");
  }
};

// Get Blog by Id 
export const getBlogById = async ({ id }: { id: string }): Promise<CreateBlogResponse> => {
  try {
    const response = await api.get<CreateBlogResponse>(`/blogs/${id}`);
    toast.success("Blog fetched successfully");
    return response.data;
  } catch (error) {
    const err = error as AxiosError<{ message: string }>;
    toast.error(err.response?.data?.message || "Failed to fetch blog");
    throw new Error(err.response?.data?.message || "Failed to fetch blog");
  }
};

// Update Blog by Id
export const updateBlog = async (
  payload: Partial<Blog> & { blogId: string }
): Promise<CreateBlogResponse> => {
  try {
    const { blogId, ...data } = payload;
    const response = await api.put<CreateBlogResponse>(`/blogs/${blogId}`, data);
    toast.success("Blog updated successfully");
    return response.data;
  } catch (error) {
    const err = error as AxiosError<{ message: string }>;
    toast.error(err.response?.data?.message || "Failed to update blog");
    throw new Error(err.response?.data?.message || "Failed to update blog");
  }
};

// Delete Blog 
export const deleteBlog = async ({ id }: { id: string }): Promise<DeleteBlogResponse> => {
  try {
    const response = await api.delete<DeleteBlogResponse>(`/blogs/${id}`);
    toast.success("Blog deleted successfully");
    return response.data;
  } catch (error) {
    const err = error as AxiosError<{ message: string }>;
    toast.error(err.response?.data?.message || "Failed to delete blog");
    throw new Error(err.response?.data?.message || "Failed to delete blog");
  }
};

// Update Blog Status
export const updateBlogStatus = async ({
  id,
  isPublished,
}: {
  id: string;
  isPublished: boolean;
}): Promise<CreateBlogResponse> => {
  try {
    const response = await api.put<CreateBlogResponse>(`/updateblogstatus/${id}`, {
      isPublished,
    });
    toast.success("Blog status updated successfully");
    return response.data;
  } catch (error) {
    const err = error as AxiosError<{ message: string }>;
    toast.error(err.response?.data?.message || "Failed to update blog status");
    throw new Error(err.response?.data?.message || "Failed to update blog status");
  }
};