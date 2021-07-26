import { FunctionComponent } from "react";
import menu from "../../config/menu";
import { NavbarItems } from "./NavbarItems";

export const Navbar: FunctionComponent = () => (
  <nav>
    <NavbarItems items={menu} />
  </nav>
);
