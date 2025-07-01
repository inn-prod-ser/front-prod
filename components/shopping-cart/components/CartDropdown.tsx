"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { useCartStore } from "../store";

interface CartDropdownProps {
  open: boolean;
}

export const CartDropdown = ({ open }: CartDropdownProps) => {
  const router = useRouter();
  const courses = useCartStore((state) => state.courses);

  if (!open) return null;

  return (
    <div className="cartdropdown">
      <div className="cartdropdown__inner">
        <span className="cartdropdown__title">
          {courses.length === 0
            ? "Tu carrito está vacío"
            : `Carrito (${courses.length})`}
        </span>

        {courses.length === 0 ? (
          <div className="cartdropdown__empty">
            <span className="cartdropdown__empty-text">
              No hay cursos en tu carrito.
            </span>
            <Link className="cartdropdown__explore" href="/cursos">
              Ver cursos
            </Link>
          </div>
        ) : (
          <>
            <ul className="cartdropdown__list">
              {courses.map((course) => (
                <li key={course.id} className="cartdropdown__item">
                  <div className="cartdropdown__item-content">
                    <a
                      className="cartdropdown__item-link"
                      href={`/curso/${course.slug}`}
                      rel="noopener noreferrer"
                      target="_blank"
                      title={course.title}
                      onClick={(e) => e.stopPropagation()}
                    >
                      {course.title}
                    </a>
                    <span className="cartdropdown__item-price">
                      ${course.price}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
            <Link className="cartdropdown__gotocart" href="/carrito">
              Ir al carrito
            </Link>
          </>
        )}
      </div>
    </div>
  );
};
