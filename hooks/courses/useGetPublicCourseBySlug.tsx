"use client";
import { useQuery } from "@tanstack/react-query";

import { getPublicCourseBySlug } from "@/services";
import { IPublicCourseBySlug } from "@/interfaces";

export const useGetPublicCourseBySlug = (slug: string) => {
  const { data, isLoading, isError, error, refetch } = useQuery<
    IPublicCourseBySlug,
    Error
  >({
    queryKey: ["publicCourseByCategory", slug],
    queryFn: () => getPublicCourseBySlug(slug),
    enabled: !!slug && slug.length > 0,
  });

  return {
    course: data,
    isLoading,
    isError,
    error,
    refetch,
  };
};
