"use client";
import { useQuery } from "@tanstack/react-query";

import { getPublicCoursesByCategory } from "@/services";
import { IPublicCourses } from "@/interfaces";

export const useGetPublicCoursesByCategory = (slug: string) => {
  const { data, isLoading, isError, error, refetch } = useQuery<
    IPublicCourses[],
    Error
  >({
    queryKey: ["publicCoursesByCategory", slug],
    queryFn: () => getPublicCoursesByCategory(slug),
    enabled: !!slug && slug.length > 0,
  });

  return {
    cursos: data,
    isLoading,
    isError,
    error,
    refetch,
  };
};
