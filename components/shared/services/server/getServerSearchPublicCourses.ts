import { ISearchPublicCoursesResponse } from "@/interfaces";

export const getServerSearchPublicCourses = async (
  term: string,
): Promise<ISearchPublicCoursesResponse[]> => {
  const baseUrl = process.env.NEXT_PUBLIC_BACKEND;

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
