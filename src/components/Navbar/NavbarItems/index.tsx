import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import { NavbarItem, NavbarProps } from "./types";

export const NavbarItems: FunctionComponent<NavbarProps> = ({
  items,
}) => (
  <>
    {items.map((item: NavbarItem, index: number) => (
      <Link to={item.path} key={`${item.id}-${index}`}>
        {item.name}
      </Link>
    ))}
  </>
);
