"use client";
import Link from "next/link";

import { useCartStore } from "../store";

import { Icons } from "@/components/shared/ui";

export const ShoppingCartPage = () => {
  const courses = useCartStore((state) => state.courses);
  const removeCourse = useCartStore((state) => state.removeCourse);
  const clearCart = useCartStore((state) => state.clearCart);

  const total = courses.reduce((acc, course) => acc + course.price, 0);

  return (
    <section className="cartpage">
      <Icons.IoCartOutline className="mb-2" color="#204850" size={30} />
      <h2 className="cartpage__title">Carrito de compras</h2>
      {courses.length === 0 ? (
        <div className="cartpage__empty">
          <p>No hay cursos en tu carrito.</p>
          <Link className="cartpage__explore-link" href="/cursos">
            Explorar cursos
          </Link>
        </div>
      ) : (
        <div className="cartpage__list">
          {courses.map((course) => (
            <div key={course.id} className="cartpage__item">
              <div className="cartpage__item-main">
                {course.imageUrl && (
                  <img
                    alt={course.title}
                    className="cartpage__item-image"
                    src={course.imageUrl}
                  />
                )}
                <div className="cartpage__item-info">
                  <a
                    className="cartpage__item-title"
                    href={`/curso/${course.slug}`}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {course.title}
                  </a>
                  <span className="cartpage__item-price">${course.price}</span>
                </div>
              </div>
              <button
                className="cartpage__remove"
                onClick={() => removeCourse(course.id)}
              >
                Quitar
              </button>
            </div>
          ))}
          <div className="cartpage__footer">
            <span className="cartpage__total-label">Total:</span>
            <span className="cartpage__total-value">${total}</span>
            {/* <button className="cartpage__clear" onClick={ clearCart }>
              Vaciar carrito
            </button> */}
          </div>
        </div>
      )}
    </section>
  );
};
