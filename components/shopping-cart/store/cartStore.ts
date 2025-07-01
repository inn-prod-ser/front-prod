import { create } from "zustand";
import { persist } from "zustand/middleware";

import { CartCourse } from "../interfaces";

interface CartState {
  courses: CartCourse[];
  addCourse: (course: CartCourse) => void;
  removeCourse: (id: string) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      courses: [],
      addCourse: (course) => {
        const exists = get().courses.some((c) => c.id === course.id);

        if (!exists) {
          set({ courses: [...get().courses, course] });
        }
      },
      removeCourse: (id) =>
        set({ courses: get().courses.filter((c) => c.id !== id) }),
      clearCart: () => set({ courses: [] }),
    }),
    {
      name: "cart-storage",
    },
  ),
);
