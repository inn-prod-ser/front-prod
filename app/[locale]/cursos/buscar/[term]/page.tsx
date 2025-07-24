"use client";

import { useParams } from "next/navigation";

import { CoursesCard } from "@/components";
import { useGetSearchPublicCourses } from "@/hooks";
import { ISearchPublicCoursesResponse } from "@/interfaces";

export default function Page() {
  const params = useParams();

  let term = "";

  if (params && typeof params.term === "string") {
    term = decodeURIComponent(params.term);
  } else if (params && Array.isArray(params.term)) {
    term = decodeURIComponent(params.term[0] || "");
  }

  term = term.trim();

  const { cursos, isLoading } = useGetSearchPublicCourses(term);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h3 className="courses_subtitle">RESULTADOS DE BÚSQUEDA</h3>
        <h2 className="courses_title">{`“${term}”`}</h2>
      </div>

      <div>
        {isLoading ? (
          <div className="text-center py-16 text-black/60 dark:text-white/70">
            Buscando...
          </div>
        ) : !cursos || cursos.length === 0 ? (
          <div className="text-center py-16 text-black/60 dark:text-white/70">
            No se encontraron cursos para esa búsqueda.
          </div>
        ) : (
          <div
            className="
              grid
              gap-8
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-3
              xl:grid-cols-4
              w-full
              place-items-stretch
            "
          >
            {cursos.map((course: ISearchPublicCoursesResponse) => (
              <CoursesCard
                key={course.slug}
                category={course.categories?.[0]?.title ?? ""}
                courseUnderConstruction={course.courseUnderConstruction}
                description={course.description}
                duration={course.estimatedDuration}
                enabled={course.status}
                name={course.title}
                slug={course.slug}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
