"use client";
import Link from "next/link";

import { ClockSvg } from "../shared/ui/svg";

interface Props {
  category: string;
  courseUnderConstruction: boolean;
  description: string;
  duration: string;
  enabled: boolean;
  name: string;
  slug: string;
}

export const CoursesCard = ({
  category,
  courseUnderConstruction,
  description,
  duration,
  enabled,
  name,
  slug,
}: Props) => {
  return (
    <div className="courses_card">
      <div className="courses_card-header">
        <div className="courses_card-category">{category.toUpperCase()}</div>

        {courseUnderConstruction && (
          <div className="courses_card-badge">
            <span className="courses_card-badge-text">EN BREVE!</span>
          </div>
        )}
      </div>

      <p className="courses_card-title">{name}</p>
      <p className="courses_card-description">{description}</p>

      <div className="courses_card-duration">
        <ClockSvg />

        <span className="courses_card-duration-text">{duration}</span>
      </div>

      {!courseUnderConstruction ? (
        <Link className="courses_card-button" href={`/curso/${slug}`}>
          VER CURSO
        </Link>
      ) : (
        <Link className="courses_card-button" href={`/curso/${slug}`}>
          MÁS INFORMACIÓN
        </Link>
      )}
    </div>
  );
};
