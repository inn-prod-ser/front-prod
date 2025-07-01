import { metadataContacto } from "./meta";

import { AllCategories, DiplomaPrograms, TopCourses } from "@/components";

export const metadata = metadataContacto;

export default function Page() {
  return (
    <div className="courses_container">
      <div className="courses_header">
        <h3 className="courses_subtitle">CURSOS</h3>

        <h2 className="courses_title">EXPLORÁ EL CATÁLOGO</h2>
      </div>

      <div className="courses_content">
        <TopCourses />
      </div>

      <DiplomaPrograms />

      <AllCategories />
    </div>
  );
}
