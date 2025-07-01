"use client";
import { useQuery } from "@tanstack/react-query";

import { searchPublicCourses } from "@/services";
import { ISearchPublicCoursesResponse } from "@/interfaces";

export const useGetSearchPublicCourses = (term: string) => {
  const { data, isLoading, isError, error, refetch } = useQuery<
    ISearchPublicCoursesResponse[],
    Error
  >({
    queryKey: ["getSearchPublicCourses", term],
    queryFn: () => searchPublicCourses(term),
    enabled: !!term && term.length > 0,
  });

  return {
    cursos: data,
    isLoading,
    isError,
    error,
    refetch,
  };
};
