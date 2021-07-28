import { NavbarItem } from "../../components/Navbar/NavbarItems/types";
import { datatype, name } from 'faker';

const length = 3;
const navBarItems = Array.from({ length }, _ => {
  const itemName = name.findName();
  const path = itemName.replace(/\s/g, '');

  const navbarItem: NavbarItem = {
    id: datatype.uuid(),
    name: itemName,
    path: `/${path}`
  }

  return navbarItem;
});

export default navBarItems;