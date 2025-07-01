import React from "react";
import { useTranslations } from "next-intl";

import { getStudentCoursesInfo } from "../utils";

import { StudentCoursesDetailItem } from "./StudentCoursesDetailItem";

export const StudentCoursesDetail = () => {
  const t = useTranslations("Student");
  const studentCourseDetailInfo = getStudentCoursesInfo(t);

  return (
    <div className="student-courses-details__container">
      <h4 className="student-courses-details__title">
        {t("student_course_section_title")}
      </h4>

      <div className="student-courses-details__items-wrapper">
        {studentCourseDetailInfo.map((item, index) => (
          <StudentCoursesDetailItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
};
