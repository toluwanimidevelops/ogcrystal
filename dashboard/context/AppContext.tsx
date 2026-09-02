"use client";
import { useRouter } from "next/navigation";
import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import axios, { AxiosError } from "axios";
import {
  CommentID,
  DeleteCommentResponse,
  getAllComment,
  getAllCommentResponse,
  deleteComment,
} from "./comments/comments";
import {
  createBlog,
  getAllBlogs,
  getActiveBlogs,
  getInActiveBlogs,
  getBlogById,
  updateBlog,
  deleteBlog,
  updateBlogStatus,
  CreateBlogResponse,
  FetchBlogResponse,
  DeleteBlogResponse,
  CreateBlogPayload,
} from "./blogs/blog";
export const api = axios.create({ baseURL: "https://ogcrystalserver.vercel.app/" });

interface AuthCredentials {
  email: string;
  password: string;
}
interface ID {
  id: string;
}
interface blogStatusPayload {
  id: string;
  isPublished: boolean;
}
interface DashboardResponse {
  success: boolean;
  activeBlogCount?: number;
  inActiveBlogCount?: number;
  commentCounts?: number;
  mailingListCount?: number;
  message?: string;
}
interface AppContextType {
  token: string | null;
  login: (credentials: AuthCredentials) => Promise<void>;
  logout: () => void;
  getAllComment: () => Promise<getAllCommentResponse>;
  deleteComment: (id: ID) => Promise<DeleteCommentResponse>;

  getDashboard: () => Promise<DashboardResponse>;
  createBlog: (details: CreateBlogPayload) => Promise<CreateBlogResponse>;
  getAllBlogs: () => Promise<FetchBlogResponse>;
  getActiveBlogs: () => Promise<FetchBlogResponse>;
  getInActiveBlogs: () => Promise<FetchBlogResponse>;
  getBlogById: (id: ID) => Promise<CreateBlogResponse>;
  updateBlog: (details: CreateBlogPayload) => Promise<CreateBlogResponse>;
  deleteBlog: (id: ID) => Promise<DeleteBlogResponse>;
  updateBlogStatus: (details: blogStatusPayload) => Promise<CreateBlogResponse>;
  isAuthenticated: boolean;
  isLoading: boolean;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [token, setToken] = useState<string | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const router = useRouter();

  // Load initial token from localStorage after component mounts
  useEffect(() => {
    const savedToken = localStorage.getItem("adminToken");
    if (savedToken) {
      setToken(savedToken);
      setIsAuthenticated(true); // Optimistically set true so layout doesn't bounce on refresh
      api.defaults.headers.common["Authorization"] = `${savedToken}`;
      verifyToken(savedToken);
    } else {
      setIsLoading(false);
    }
  }, []);

  const verifyToken = async (currentToken: string) => {
    try {
      await api.get("/auth/isauthorized", {
        headers: { Authorization: currentToken },
      });
      setIsAuthenticated(true);
    } catch (error) {
      logout();
    } finally {
      setIsLoading(false);
    }
  };
  const getDashboard = async (): Promise<DashboardResponse> => {
    try {
      const response = await api.get<DashboardResponse>("/auth/dashboard");
      return response.data;
    } catch (err) {
      const error = err as AxiosError<{ message: string }>;
      throw new Error(
        error.response?.data?.message || "Failed to Fetch Dashboard Staatus",
      );
    }
  };
  const login = async ({ email, password }: AuthCredentials) => {
    try {
      const response = await api.post<{ success: boolean; token: string }>(
        "/auth/login",
        { email, password },
      );

      if (response.data.token) {
        const newToken = response.data.token;
        localStorage.setItem("adminToken", newToken);
        api.defaults.headers.common["Authorization"] = `${newToken}`;
        setToken(newToken);
        setIsAuthenticated(true);
        router.push("/dashboard");
      }
    } catch (error) {
      const err = error as AxiosError<{ message: string }>;
      throw new Error(err.response?.data?.message || "Login failed");
    }
  };

  const logout = () => {
    setToken(null);
    setIsAuthenticated(false);
    localStorage.removeItem("adminToken");
    delete api.defaults.headers.common["Authorization"];
    router.push("/");
  };

  return (
    <AppContext.Provider
      value={{
        token,
        login,
        logout,
        isAuthenticated,
        isLoading,
        getAllBlogs,
        createBlog,
        getActiveBlogs,
        getBlogById,
        getInActiveBlogs,
        getDashboard,
        getAllComment,
        updateBlog,
        deleteBlog,
        updateBlogStatus,
        deleteComment,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useApp must be used within an AppProvider");
  }
  return context;
};
