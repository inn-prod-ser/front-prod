import Link from "next/link";

import { AuthButtons } from "./";

import { ShoppingCart } from "@/components/shopping-cart";

export const NavbarActions = () => {
  return (
    <div className="navbar__actions">
      <button className="navbar__contact-button">CONTACTARSE</button>

      <AuthButtons />

      <Link className="navbar__courses-link" href="/cursos">
        CURSOS
      </Link>

      <ShoppingCart height={35} width={35} />
    </div>
  );
};
