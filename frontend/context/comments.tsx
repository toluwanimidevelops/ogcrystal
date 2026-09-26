import { api } from "./AppContext";
export interface Comment {
  _id?: string;
  blogId: string;
  name: string;
  email: string;
  comment: string;
  createdAt?: string;
}
export interface CreateCommentResponse {
  success: boolean;
  message?: string;
  comment?: Comment;
}
export interface FetchCommentResponse {
  success: boolean;
  message?: string;
  comments?: Comment[];
}
export const getCommentsByBlogId = async (
  blogId: string,
): Promise<FetchCommentResponse> => {
  try {
    const response = await api.get(`/comments/blog/${blogId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const createComment = async ({ blogId, name, email, comment }: {
  blogId: string;
  name: string;
  email: string;
  comment: string;
}): Promise<CreateCommentResponse> => {
  try {
    const response = await api.post("/comments", {
      blogId,
      name,
      email,
      comment,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
