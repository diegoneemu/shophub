import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import { NavbarItem, NavbarProps } from './types';

export const Navbar: FunctionComponent<NavbarProps> = ({ navbarItems }) => (<nav>
  {navbarItems.map((item: NavbarItem, index: number)=><Link to={item.path} key={`${item.id}-${index}`}>{item.name}</Link>)}
</nav>);
