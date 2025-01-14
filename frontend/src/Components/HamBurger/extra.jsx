import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const MenuIcon = styled.div`
  display: none;
  cursor: pointer;
  padding: 10px;

  @media screen and (max-width: 870px) {
    display: block;
    position: absolute;
    top: 10px;
    right: 20px;
  }
`;

const HamburgerIcon = styled.div`
  width: 30px;
  height: 20px;
  position: relative;

  &::before,
  &::after,
  & {
    content: '';
    position: absolute;
    width: 100%;
    height: 3px;
    background-color: #fff;
    border-radius: 3px;
    transition: all 0.3s ease-in-out;
  }

  &::before {
    top: 0;
  }

  &::after {
    bottom: 0;
  }

  & {
    top: 50%;
    transform: translateY(-50%);
  }

  &.open {
    background-color: transparent;

    &::before {
      transform: translateY(8px) rotate(45deg);
    }

    &::after {
      transform: translateY(-8px) rotate(-45deg);
    }
  }
`;

const Menu = styled.ul`
  display: none;
  
  @media screen and (max-width: 870px) {
    display: ${({ isOpen }) => (isOpen ? "block" : "none")};
    position: absolute;
    top: 60px;
    right: 0;
    width: 100%;
    background-color: #B22222;
    padding: 20px;
    border-radius: 0 0 5px 5px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  li {
    padding: 10px 0;
    text-align: center;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: rgba(255, 255, 255, 0.1);
    }
  }

  a {
    color: #ffffff;
    text-decoration: none;
    font-size: 1.1rem;
    display: block;
    padding: 5px 0;
  }
`;

const HamBurger = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <MenuIcon onClick={toggleMenu}>
        <HamburgerIcon className={isMenuOpen ? "open" : ""} />
      </MenuIcon>

      <Menu isOpen={isMenuOpen}>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/gallery">Gallery</Link></li>
        <li><Link to="/availability">Availability</Link></li>
        <li><Link to="/guidelines">Guidelines</Link></li>
        <li><Link to="/contactus">Contact Us</Link></li>
      </Menu>
    </div>
  );
};

export default HamBurger;