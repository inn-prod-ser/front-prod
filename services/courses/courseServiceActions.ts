import { apiCall, apiClient } from "../api";

import {
  IPublicCourseBySlug,
  IPublicCourses,
  ISearchPublicCoursesResponse,
} from "@/interfaces";

export const getPublicCoursesByCategory = (
  slug: string,
): Promise<IPublicCourses[]> =>
  apiCall("GET public courses by category", () =>
    apiClient.get<IPublicCourses[]>(`/courses/public/category/${slug}`),
  );

export const getPublicCourseBySlug = (
  slug: string,
): Promise<IPublicCourseBySlug> =>
  apiCall("GET public course by slug", () =>
    apiClient.get<IPublicCourseBySlug>(`/courses/public/slug/${slug}`),
  );

export const searchPublicCourses = (
  term: string,
): Promise<ISearchPublicCoursesResponse[]> =>
  apiCall("GET search public courses response", () =>
    apiClient.get<ISearchPublicCoursesResponse[]>(
      `/courses/public/search/${term}`,
    ),
  );
