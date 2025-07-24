import { AxiosError } from "axios";

export const handleApiError = (error: unknown, operation: string): never => {
  if (error instanceof AxiosError) {
    console.error(`Error ${operation}:`, error.response?.data || error.message);
    throw error;
  } else {
    console.error(`Unexpected error ${operation}:`, error);
    throw error;
  }
};
