"use client";
import Link from "next/link";

import { PlanSectionProps } from "../interfaces";

export const PlanSection = ({
  title,
  description,
  btnTitle,
  slug,
  premium = false,
}: PlanSectionProps) => {
  return (
    <div className="plan-section">
      <div className="plan-section__container">
        <div className="plan-section__header">
          {premium && (
            <div className="plan-section__premium-badge">
              <span className="plan-section__premium-text">PREMIUM</span>
            </div>
          )}

          <h3 className="plan-section__title">{title.toUpperCase()}</h3>
        </div>

        <p className="plan-section__description">{description}</p>

        <div className="plan-section__button-container">
          <Link className="plan-section__button" href={`/${slug}`}>
            {btnTitle.toUpperCase()}
          </Link>
        </div>
      </div>
    </div>
  );
};
