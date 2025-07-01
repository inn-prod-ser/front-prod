"use client";
import { useState, useRef } from "react";
import { useRouter } from "next/navigation";

import { useCartStore } from "../store";

import { CartDropdown } from "./CartDropdown";

interface ShoppingCartProps {
  width?: number;
  height?: number;
  className?: string;
}

export const ShoppingCart = ({
  width = 48,
  height = 36,
  className = "",
}: ShoppingCartProps) => {
  const courses = useCartStore((state) => state.courses);
  const count = courses.length;
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const handleCartClick = () => {
    router.push("/carrito");
    setOpen(false);
  };

  return (
    <div
      ref={ref}
      className={`flex items-center cursor-pointer relative ${className}`}
      onClick={handleCartClick}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <svg
        fill="none"
        height={height}
        style={{ display: "block", position: "relative" }}
        viewBox="0 0 48 36"
        width={width}
        xmlns="http://www.w3.org/2000/svg"
      >
        <g>
          <polyline
            fill="none"
            points="2,6 12,6 18,24 40,24 46,10"
            stroke="#1A535C"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2.5}
          />
          <circle
            cx={18}
            cy={30}
            fill="none"
            r={3}
            stroke="#1A535C"
            strokeWidth={2.5}
          />
          <circle
            cx={38}
            cy={30}
            fill="none"
            r={3}
            stroke="#1A535C"
            strokeWidth={2.5}
          />
          {typeof count === "number" && count > 0 && (
            <text
              fill="#204850"
              fontFamily="inherit"
              fontSize={count > 99 ? "12" : "18"}
              fontWeight="bold"
              style={{
                userSelect: "none",
                pointerEvents: "none",
                dominantBaseline: "middle",
              }}
              textAnchor="middle"
              x="29"
              y={count > 99 ? "12" : "15"}
            >
              {count > 99 ? "+99" : count}
            </text>
          )}
        </g>
      </svg>
      <span
        className="navbar__courses-link"
        style={{
          color: "#204850",
          fontSize: width / 2.5,
          fontFamily: "inherit",
          letterSpacing: 0.5,
          lineHeight: 1,
        }}
      >
        CARRITO
      </span>
      <CartDropdown open={open} />
    </div>
  );
};
