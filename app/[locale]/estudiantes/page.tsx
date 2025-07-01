"use client";
import { useTranslations } from "next-intl";

import {
  PageWelcome,
  EnterpriseCategoriesWrapper,
  StudentCoursesDetail,
  StudentFAQ,
} from "@/components";

const StudentsMain = () => {
  const t = useTranslations("Student");

  return (
    <section>
      <PageWelcome
        description={t("student_page_description")}
        imgAlt="Student page image"
        imgSrc="https://res.cloudinary.com/dlgkf6feq/image/upload/v1736276729/g8yjeft73krsoyashxas.svg"
        orientationImage="right"
        title={t("student_page_title")}
      />

      <EnterpriseCategoriesWrapper />

      <StudentCoursesDetail />

      <StudentFAQ />
    </section>
  );
};

export default StudentsMain;
