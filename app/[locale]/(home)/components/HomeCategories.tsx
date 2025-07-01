import { planSectionInformation } from "../config";

import { PlanSection } from ".";

export const HomeCategories = () => {
  return (
    <section className="home-categories__container">
      {planSectionInformation.map((plan, index) => (
        <PlanSection
          key={`plan-section-${index}`}
          btnTitle={plan.btnTitle}
          description={plan.description}
          premium={plan.premiun}
          slug={plan.slug}
          title={plan.title}
        />
      ))}
    </section>
  );
};
