"use client";

import { useQuery } from "@tanstack/react-query";

import { getPublishedCoursesByCategory } from "@/services";
import { IPublishedCoursesByCategory } from "@/interfaces";

export const useGetPublishedCoursesByCategory = () => {
  const {
    data = [],
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery<IPublishedCoursesByCategory[], Error>({
    queryKey: ["publishedCoursesByCategory"],
    queryFn: getPublishedCoursesByCategory,
    refetchOnWindowFocus: false,
  });

  return {
    cursosPorCategoria: data,
    isLoading,
    isError,
    error,
    refetch,
  };
};
