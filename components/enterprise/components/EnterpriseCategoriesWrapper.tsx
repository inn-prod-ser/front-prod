"use client";
import React from "react";
import { useTranslations } from "next-intl";

import {
  CATALOG_ICON,
  CATEGORIES_ILLUSTRATION,
  getEnterpriseCategories,
} from "../utils";
import { UI } from "../../shared/ui";

import { EnterpriseCategory } from "./EnterpriseCategory";

export const EnterpriseCategoriesWrapper = () => {
  const t = useTranslations("Enterprise");
  const enterpriseCategories = getEnterpriseCategories(t);

  return (
    <div className="enterprise-categories">
      <div className="enterprise-categories__container">
        <h3 className="text-title-secondary mb-5">{t("categories_title")}</h3>
        <div className="enterprise-categories__wrapper">
          <div className="enterprise-categories__grid">
            {enterpriseCategories.map(
              ({ title, description, icon_src, icon_alt }, index) => (
                <EnterpriseCategory
                  key={index}
                  description={description}
                  icon_alt={icon_alt}
                  icon_src={icon_src}
                  title={title}
                />
              ),
            )}

            <div className="enterprise-categories__catalog">
              <UI.Image
                alt="Explore Catalog Icon"
                height={35}
                src={CATALOG_ICON}
                width={35}
              />
              <h4 className="enterprise-categories__catalog-title">CATÁLOGO</h4>
              <div className="enterprise-categories__catalog-description">
                See the complete catalog of all our courses.
              </div>
              <a
                className="enterprise-categories__catalog-link"
                href="/courses"
              >
                {t("explore_all")}
              </a>
            </div>
          </div>

          <UI.Image alt="Our Categories" src={CATEGORIES_ILLUSTRATION} />
        </div>
      </div>
    </div>
  );
};
