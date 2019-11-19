/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { MdAccountCircle } from 'react-icons/md';
import { Link } from 'react-router-dom';

import { NavBar } from './styles';

const Navbar = () => (
  <NavBar>
    <h2>Blog</h2>
    <Link to="#">
      <MdAccountCircle size={26} />
      <span>Minha Conta</span>
    </Link>
  </NavBar>
);

export default Navbar;
