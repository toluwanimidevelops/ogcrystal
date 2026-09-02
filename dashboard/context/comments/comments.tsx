import { AxiosError } from "axios";
import { api } from "../AppContext";
export interface Comment {
    _id: string,
    blogId: {
        _id: string,
        title: string
    },
    name: string,
    email: string,
    comment: string,
    createdAt: string,
    updatedAt: string,
}
export interface getAllCommentResponse{
    success: boolean,
    message?: string,
    comment?: Comment[],
}
export interface CommentID {
    id: string,
}
export interface DeleteCommentResponse{
    success: boolean,
    message?: string,

}
export const getAllComment = async ():Promise<getAllCommentResponse> => {
    try{
        const response = await api.get("/comments");

        return response.data
    } catch (error) {
        const err = error as AxiosError<{ message: string }>;
            throw new Error(err.response?.data?.message || "Failed to fetch active blogs");
    }
}
export const deleteComment = async ({ id }: { id: string }): Promise<DeleteCommentResponse> => {
    try {
        const response = await api.delete(`/comments/${id}`)
        return response.data
    }catch (error) {
        const err = error as AxiosError<{ message: string }>;
            throw new Error(err.response?.data?.message || "Failed to fetch active blogs");
    }
}

// export const getCommentByBlogID = async (id: CommentID) => { 
//     catch (error) {
//         const err = error as AxiosError<{ message: string }>;
//             throw new Error(err.response?.data?.message || "Failed to fetch active blogs");
//     }
// }
    
