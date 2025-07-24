import { ISearchPublicCoursesResponse } from "@/interfaces";

export const getServerSearchPublicCourses = async (
  term: string,
): Promise<ISearchPublicCoursesResponse[]> => {
  const baseUrl = "https://backend.neurabig.com/api";

  if (!baseUrl) return [];

  const url = `${baseUrl}/courses/public/search/${encodeURIComponent(term)}`;

  const res = await fetch(url, {
    cache: "no-store",
    headers: {
      Accept: "application/json",
    },
  });

  if (!res.ok) return [];

  return await res.json();
};
