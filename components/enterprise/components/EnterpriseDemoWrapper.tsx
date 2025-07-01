import React from "react";
import { useTranslations } from "next-intl";

import { UI } from "../../shared/ui";

export const EnterpriseDemoWrapper = () => {
  const t = useTranslations("Enterprise");

  return (
    <section className="enterprise-demo">
      <div className="enterprise-demo__wrapper">
        <div className="enterprise-demo__container">
          <div className="enterprise-demo__content">
            <div className="enterprise-demo__text-section">
              <h4 className="enterprise-demo__title">
                {t("tailor_made_title")}
              </h4>

              <UI.Image
                alt="tailor made"
                className="enterprise-demo__image-mobile"
                src="https://res.cloudinary.com/dobwqzgth/image/upload/v1736021716/ytafyxx7680cglnyuois.webp"
              />

              <p className="enterprise-demo__description">
                {t("tailor_made_description")}
              </p>

              <a className="enterprise-demo__button" href="#form-empresa">
                {t("tailer_made_btn")}
              </a>
            </div>
            <div className="enterprise-demo__image-wrapper">
              <UI.Image
                alt="tailor made"
                src="https://res.cloudinary.com/dobwqzgth/image/upload/v1736021716/ytafyxx7680cglnyuois.webp"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
