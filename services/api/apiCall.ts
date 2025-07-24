import { AxiosResponse } from "axios";

import { handleApiError } from "./handleApiError";

export const apiCall = async <T>(
  operation: string,
  apiFunction: () => Promise<AxiosResponse<T>>,
): Promise<T> => {
  try {
    const { data } = await apiFunction();

    return data;
  } catch (error) {
    return handleApiError(error, operation);
  }
};
