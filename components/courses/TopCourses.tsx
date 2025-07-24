"use client";

import { UI } from "../shared";

import { CoursesCard } from "./CoursesCard";

import { IPublicCourses } from "@/interfaces";
import { useGetPublicCoursesByCategory } from "@/hooks";

function shuffleArray<T>(array: T[]): T[] {
  return [...array].sort(() => Math.random() - 0.5);
}

export const TopCourses = () => {
  const { cursos, isLoading, isError } =
    useGetPublicCoursesByCategory("top-cursos");
  const topSlug = "top-cursos";
  const maxCourses = 4;

  let topCourses: IPublicCourses[] = [];

  if (cursos && cursos.length > 0) {
    const filtered = cursos.filter((course) =>
      course.categories.some((cat) => cat.slug === topSlug),
    );
    const selected = shuffleArray(filtered).slice(0, maxCourses);

    topCourses = shuffleArray(selected);
  }

  return (
    <div className="courses_top-section">
      <h4 className="courses_section-title mb-5">TOP CURSOS</h4>

      {isLoading && <UI.Spinner />}

      {isError && (
        <div className="mb-14 text-red-600">Error al cargar los cursos.</div>
      )}

      {!isLoading && !isError && (
        <div className="grid gap-7 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-14">
          {topCourses.map((course) => {
            const topCategory = course.categories.find(
              (cat) => cat.slug === topSlug,
            );

            return (
              <CoursesCard
                key={course.slug}
                category={topCategory?.title ?? "TOP CURSOS"}
                courseUnderConstruction={course.courseUnderConstruction}
                description={course.description}
                duration={course.estimatedDuration}
                enabled={course.courseUnderConstruction}
                name={course.title}
                slug={course.slug}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};
