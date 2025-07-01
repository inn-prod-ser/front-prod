"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";

import {
  ArrowRightSvg,
  BookSvg,
  ClockSvg,
  ShareSvg,
  StatisticsCheckedSvg,
  StatisticsSvg,
} from "@/components/shared/ui/svg";
import { PurchaseCourseButton, UI } from "@/components";
import { useGetPublicCourseBySlug } from "@/hooks";

const Page = () => {
  const params = useParams();

  const slug =
    typeof params?.slug === "string"
      ? params.slug
      : Array.isArray(params?.slug)
        ? params.slug[0]
        : "";

  const { course, isLoading, isError } = useGetPublicCourseBySlug(slug);

  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  const toggleAccordion = (itemId: string) => {
    if (openAccordion === itemId) {
      setOpenAccordion(null);
    } else {
      setOpenAccordion(itemId);
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <UI.Spinner />
      </div>
    );
  }

  if (isError || !course) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-red-600">No se pudo cargar el course.</p>
      </div>
    );
  }

  const categoryNames =
    Array.isArray(course.categories) && course.categories.length > 0
      ? course.categories
          .map((c) => c?.title)
          .filter(Boolean)
          .join(", ")
          .toUpperCase()
      : null;

  const totalClasses =
    Array.isArray(course.courseSections) && course.courseSections.length > 0
      ? course.courseSections.reduce(
          (acc, section) =>
            acc +
            (Array.isArray(section.courseClasses)
              ? section.courseClasses.length
              : 0),
          0,
        )
      : 0;

  const itemsBannerCourse = [
    {
      icon: <BookSvg />,
      title: "CLASES",
      value: totalClasses > 0 ? totalClasses.toString() : null,
    },
    {
      icon: <ClockSvg height={30} width={30} />,
      title: "DURACION",
      value: course.estimatedDuration
        ? course.estimatedDuration.toUpperCase()
        : null,
    },
    {
      icon: <StatisticsSvg />,
      title: "DIFICULTAD",
      value: course.difficultyLevel
        ? course.difficultyLevel.toUpperCase()
        : null,
    },
    {
      icon: <StatisticsCheckedSvg />,
      title: "PRE-REQUISITOS",
      value: "NINGUNO",
    },
  ].filter((item) => !!item.value);

  const courseInformation = [
    {
      title: "SOBRE ESTE CURSO",
      description: course.description,
    },
    {
      title: "CERTIFICADO",
      description: course.hasCertificate
        ? "El curso cuenta con diploma digital descargable al completar la cursada."
        : null,
    },
    {
      title: "CONSTRUCCIÓN",
      description: course.courseUnderConstruction
        ? "Este course está en construcción. Puede recibir mejoras y nuevas clases."
        : null,
    },
  ].filter((item) => !!item.description);

  const instructorsExist =
    Array.isArray(course.instructors) && course.instructors.length > 0;

  return (
    <div className="coursepage">
      {course.courseUnderConstruction && (
        <div className="w-full py-4 mb-4 bg-yellow-100 border border-yellow-300 flex justify-center">
          <span className="text-yellow-800 font-semibold text-lg">
            Este curso está en construcción. El contenido puede actualizarse y
            recibir mejoras.
          </span>
        </div>
      )}

      <div className="coursepage__banner">
        <div className="coursepage__banner-content">
          <div className="coursepage__banner-header">
            {categoryNames && (
              <p className="coursepage__banner-category">{categoryNames}</p>
            )}
            <button className="coursepage__share-button">
              <ShareSvg />
            </button>
          </div>
          {course.title && (
            <h2 className="coursepage__banner-title">
              {course.title.toUpperCase()}
            </h2>
          )}
          {course.description && (
            <p className="coursepage__banner-description">
              {course.description}
            </p>
          )}

          <PurchaseCourseButton course={course} />
        </div>
        {itemsBannerCourse.length > 0 && (
          <div className="coursepage__banner-sidebar">
            <p className="coursepage__sidebar-title">
              <span className="coursepage__sidebar-subtitle">course</span>
            </p>
            {itemsBannerCourse.map(({ icon, title, value }) => (
              <div key={title} className="coursepage__sidebar-item">
                <div className="coursepage__sidebar-icon">{icon}</div>
                <div className="coursepage__sidebar-info">
                  <span className="coursepage__sidebar-label">{title}</span>
                  <span className="coursepage__sidebar-value">{value}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="coursepage__content">
        <div className="coursepage__info-section">
          {courseInformation.map(({ title, description }) => (
            <div key={title} className="coursepage__info-block">
              <div className="coursepage__info-arrow">
                <ArrowRightSvg />
              </div>
              <div className="coursepage__info-content">
                <p className="coursepage__info-title">{title}</p>
                <p className="coursepage__info-description">{description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="coursepage__sidebar-section">
          {instructorsExist && (
            <div className="coursepage__teacher-card">
              <div className="coursepage__teacher-header">
                {course.instructors.length === 1 ? "DOCENTE" : "DOCENTES"}
              </div>
              <div className="coursepage__teacher-list">
                {course.instructors.map((instructor) => (
                  <div key={instructor.id} className="coursepage__teacher-item">
                    <div className="coursepage__teacher-photo-container">
                      <UI.Image
                        alt={instructor.fullName}
                        className="coursepage__teacher-image"
                        src={
                          instructor.profilePictureUrl || "/images/avatar.jpg"
                        }
                      />
                    </div>
                    <div className="coursepage__teacher-details-v2">
                      <span className="coursepage__teacher-name-v2">
                        {instructor.fullName}
                      </span>
                      <span className="coursepage__teacher-degree-v2">
                        {instructor.profesionalTitle}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          {course.hasCertificate && (
            <div className="coursepage__certificate-card">
              <div className="coursepage__certificate-image-container">
                <UI.Image
                  className="coursepage__certificate-image"
                  src={"https://i.imgur.com/YJUPD49.png"}
                />
              </div>
              <div className="coursepage__certificate-content">
                <p className="coursepage__certificate-title">
                  CERTIFICADO DE FINALIZACIÓN
                </p>
                <p className="coursepage__certificate-description">
                  El curso cuenta con un diploma dígital descargable que se
                  obtiene al resolver el ejercicio final de la cursada.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      {Array.isArray(course.courseSections) &&
        course.courseSections.length > 0 && (
          <div className="coursepage__units-section">
            <div className="coursepage__units-arrow-desktop">
              <ArrowRightSvg />
            </div>
            <div className="coursepage__units-container">
              <div className="coursepage__units-header">
                <div className="coursepage__units-arrow-mobile">
                  <ArrowRightSvg />
                </div>
                <p className="coursepage__units-title">SECCIONES</p>
              </div>
              <span className="coursepage__units-summary">
                {course.courseSections.length} SECCIONES
              </span>
              <span className="coursepage__units-resources">
                + RECURSOS ADICIONALES
              </span>
              <div className="coursepage__units-grid">
                {course.courseSections.map((section, index) => (
                  <div key={section.id} className="coursepage__unit-card">
                    <button
                      className="coursepage__unit-header"
                      onClick={() => toggleAccordion(`section-${section.id}`)}
                    >
                      <div className="coursepage__unit-header-content">
                        <div className="coursepage__unit-number-container">
                          <div className="coursepage__unit-number">
                            {index + 1}
                          </div>
                        </div>
                        <div className="coursepage__unit-details">
                          {section.title && (
                            <p className="coursepage__unit-title">
                              {section.title}
                            </p>
                          )}
                          <div className="coursepage__unit-meta">
                            <span className="coursepage__unit-index">
                              SECCIÓN {index + 1} |{" "}
                            </span>
                            <div className="coursepage__unit-clock">
                              <ClockSvg />
                            </div>
                            {section.creationDate && (
                              <span className="coursepage__unit-duration">
                                {section.creationDate.slice(0, 10)}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="coursepage__unit-toggle">
                        {openAccordion === `section-${section.id}` ? "▲" : "▼"}
                      </div>
                    </button>
                    {Array.isArray(section.courseClasses) &&
                      section.courseClasses.length > 0 && (
                        <div
                          className={`coursepage__unit-content ${openAccordion === `section-${section.id}` ? "coursepage__unit-content--open" : "coursepage__unit-content--closed"}`}
                        >
                          {section.courseClasses.map((cls) => (
                            <Link
                              key={cls.id}
                              className="coursepage__content-link"
                              href={`/course/${course.slug}/clase/${cls.id}`}
                            >
                              {cls.title}
                            </Link>
                          ))}
                        </div>
                      )}
                  </div>
                ))}
              </div>
              <div className="coursepage__cta-container">
                <Link className="coursepage__cta-button" href={`/checkout`}>
                  AGREGAR AL CARRITO
                </Link>
              </div>
            </div>
          </div>
        )}

      <div className="coursepage__more-courses">
        <h2 className="coursepage__more-courses-title">
          ¿NO ENCONTRASTE LO QUE BUSCABAS?
        </h2>
        <p className="coursepage__more-courses-description">
          Contamos con una amplia variedad de cursos adaptados a tus necesidades
          y objetivos de aprendizaje.
        </p>
        <Link className="coursepage__more-courses-button" href="/courses">
          VER TODOS LOS CURSOS
        </Link>
      </div>
    </div>
  );
};

export default Page;
