"use client";

import { HomeCategories, HomeHero } from ".";

export const HomeMain = () => {
  return (
    <div className="home-page">
      <HomeHero />

      <HomeCategories />
    </div>
  );
};
