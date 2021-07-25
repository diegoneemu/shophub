import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';

interface NavbarProps {
  navbarItems: string[];
}
export const Navbar: FunctionComponent<NavbarProps> = ({ navbarItems }) => (<nav></nav>);
