import { apiCall, apiClient } from "../api";

import { IPublishedCoursesByCategory } from "@/interfaces";

export const getPublishedCoursesByCategory = (): Promise<
  IPublishedCoursesByCategory[]
> =>
  apiCall("GET published courses by category", () =>
    apiClient.get("/categories/public/with-courses"),
  );
