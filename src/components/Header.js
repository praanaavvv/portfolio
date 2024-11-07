// src/components/Header.js
import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  background: #1e1e1e;
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;

  li {
    margin-left: 1.5rem;
  }

  a {
    color: #f1f1f1;
    text-decoration: none;
  }
`;

function Header() {
  return (
    <Nav>
      <h1>Pranav Agarwal</h1>
      <NavLinks>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </NavLinks>
    </Nav>
  );
}

export default Header;
