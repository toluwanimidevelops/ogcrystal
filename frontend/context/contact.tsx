import { api } from "./AppContext";

export interface ContactFormData {
  fullName: string;
  email: string;
  phoneNumber: string;
  address: string;
  message: string;
}
export interface ContactFormResponse {
  success: boolean;
  message?: string;
}
export const submitContactForm = async (
  data: ContactFormData,
): Promise<ContactFormResponse> => {
  try {
    const response = await api.post("/contact", data);
    return response.data;
  } catch (error) {
    throw error;
  }
};
