"use client";

import { useRouter } from "next/navigation";

import { useCartStore } from "../shopping-cart";

import { IPublicCourseBySlug } from "@/interfaces";

interface Props {
  course: IPublicCourseBySlug;
}

export const PurchaseCourseButton = ({ course }: Props) => {
  const router = useRouter();

  const courses = useCartStore((state) => state.courses);
  const addCourse = useCartStore((state) => state.addCourse);

  const alreadyInCart = courses.some((c) => c.id === course.id);

  const handleButtonClick = () => {
    if (!alreadyInCart) {
      addCourse({
        id: course.id,
        title: course.title,
        price: typeof course.price === "number" ? course.price : 0,
        slug: course.slug,
        imageUrl: (course as any).imageUrl || undefined,
      });
    }
    router.push("/carrito");
  };

  return (
    <div className="coursepage__banner-actions">
      {course.courseUnderConstruction ? (
        <div className="w-full flex flex-col items-center">
          <button disabled className="coursepage__add-cart-button">
            MUY PRONTO
          </button>
          <span className="coursepage__not-buyable-text mt-2 text-xs text-gray-600 text-center">
            El curso está en construcción y no se puede comprar en este momento.
          </span>
        </div>
      ) : (
        <>
          <button
            className="coursepage__add-cart-button"
            onClick={handleButtonClick}
          >
            {alreadyInCart ? "CURSO EN EL CARRITO" : "AGREGAR AL CARRITO"}
          </button>
          <div className="coursepage__price-container">
            <span className="coursepage__price-value">
              {typeof course.price === "number" ? `$${course.price}` : ""}
            </span>
            <span className="coursepage__price-currency">USD</span>
          </div>
        </>
      )}
    </div>
  );
};
