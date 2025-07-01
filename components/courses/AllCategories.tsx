"use client";

import { UI } from "../shared";

import { CoursesCard } from "./CoursesCard";

import { useGetPublishedCoursesByCategory } from "@/hooks";

export const AllCategories = () => {
  const { cursosPorCategoria, isLoading, isError, error } =
    useGetPublishedCoursesByCategory();

  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-16 flex-col">
        <UI.Spinner />
        <span>Cargando categorías y cursos...</span>
      </div>
    );
  }

  if (isError || !cursosPorCategoria) {
    return (
      <div className="flex justify-center items-center py-16 text-danger-500">
        <span>Error al cargar las categorías y cursos</span>
      </div>
    );
  }

  return (
    <div className="courses_categories-section">
      {cursosPorCategoria.map((category) => (
        <div key={category.id} className="allcategories-category">
          <div className="allcategories-header">
            <h4 className="courses_section-title">{category.title}</h4>
          </div>

          <div className="allcategories-grid">
            {category.courses.map((course) => (
              <CoursesCard
                key={course.slug}
                category={category.title}
                courseUnderConstruction={course.courseUnderConstruction}
                description={course.description}
                duration={course.estimatedDuration}
                enabled={course.status}
                name={course.title}
                slug={course.slug}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
