"use client";
import { useTranslations } from "next-intl";

import {
  PageWelcome,
  EnterpriseDemoWrapper,
  EnterpriseFollowship,
  EnterpriseCategoriesWrapper,
} from "@/components";

const EnterpriseMain = () => {
  const t = useTranslations("Enterprise");

  return (
    <section>
      <PageWelcome
        description={t("description")}
        imgAlt="Enterprise page image"
        imgSrc={
          "https://res.cloudinary.com/dobwqzgth/image/upload/v1736011273/vwjl1jiphpqcpid6a3yv.svg"
        }
        orientationImage="left"
        title={t("title")}
      />

      <EnterpriseDemoWrapper />

      <EnterpriseFollowship />

      <EnterpriseCategoriesWrapper />

      {/* <EnterpriseContact /> */}
    </section>
  );
};

export default EnterpriseMain;
