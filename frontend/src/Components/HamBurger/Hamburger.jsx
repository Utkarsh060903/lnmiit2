import React, { useState } from "react";
import styled from "styled-components";
import { FaBars, FaTimes } from "react-icons/fa"; // Import the FaTimes icon for closing
import { Link } from "react-router-dom"; 
import { Nav } from "../Navbar/NavbarElements";
import "./Hamburger.css";

// Hamburger Menu Icon (Bars)
export const Bars = styled(FaBars)`
  display: none;
  color: #fff;

  @media screen and (max-width: 870px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }

  @media screen and (max-width: 480px) {
    font-size: 1.6rem; /* Adjust font size for smaller screens */
  }
`;

// Close (Cross) Icon (FaTimes)
export const CloseIcon = styled(FaTimes)`
  display: none;
  color: #fff;

  @media screen and (max-width: 870px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }

  @media screen and (max-width: 480px) {
    font-size: 1.6rem; /* Adjust font size for smaller screens */
  }
`;

const Menu = styled.ul`
  // list-style: none;
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  position: absolute;
  top: 60px;
  right: 0px;
  width: 50%;
  background-color: #fafafa;
  padding: 20px;
  border-radius: 0 0 5px 5px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: right;
  // text-decoration:

  li {
    padding: 10px 0;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: rgba(255, 255, 255, 0.9);
    }
  }

   a {
    color: #8c1515;
    text-decoration: none;
    font-size: 1.1rem;
    display: block;
    padding: 5px 0;
  }

  .last-btn {
    color: #fff;
    }
`;

const HamBurger = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      {/* The Hamburger Icon (only visible when the menu is closed) */}
      {!isMenuOpen && <Bars onClick={toggleMenu} />}

      {/* The Close (Cross) Icon (only visible when the menu is open) */}
      {isMenuOpen && <CloseIcon onClick={toggleMenu} />}

      {/* The Dropdown Menu */}
      <Menu isOpen={isMenuOpen}>
      <li>
        <Link to = "/" onClick={(e) => {
          e.preventDefault();
          const navbarHeight = document.querySelector(Nav)?.offsetHeight || 0; //finds navbar fixed height
            const element = document.getElementById("home");
            if (element) {
              const elementPosition = element.getBoundingClientRect().top;
              const offsetPosition = elementPosition + window.scrollY  - navbarHeight;
              window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
              });
            }
          toggleMenu();
        }}>
          Home
          </Link>
      </li>

      <li>
          <Link to = "/about" onClick={(e) => {
              e.preventDefault(); 
              //code to take us at starting pt of guidelines div when scrolled
              const navbarHeight = document.querySelector(Nav)?.offsetHeight || 0; //finds navbar fixed height
              const element = document.getElementById("outer");
              if (element) {
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.scrollY  - navbarHeight;
                window.scrollTo({
                  top: offsetPosition,
                  behavior: "smooth"
                });
              }
              toggleMenu();
            }}>
            About Us
          </Link>
        </li>

        <li>
          <Link to = "/services" onClick={(e) => {
              e.preventDefault(); 
              //code to take us at starting pt of guidelines div when scrolled
              const navbarHeight = document.querySelector(Nav)?.offsetHeight || 0; //finds navbar fixed height
              const element = document.getElementById("services");
              if (element) {
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.scrollY  - navbarHeight;
                window.scrollTo({
                  top: offsetPosition,
                  behavior: "smooth"
                });
              }
              toggleMenu();
            }}>
            Services
          </Link>
        </li>

        <li>
          <Link to = "/gallery" onClick={(e) => {
              e.preventDefault(); 
              //code to take us at starting pt of guidelines div when scrolled
              const navbarHeight = document.querySelector(Nav)?.offsetHeight || 0; //finds navbar fixed height
              const element = document.getElementById("gallery");
              if (element) {
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.scrollY  - navbarHeight;
                window.scrollTo({
                  top: offsetPosition,
                  behavior: "smooth"
                });
              }
              toggleMenu();
            }}>
            Gallery
          </Link>
        </li>

        <li>
          <Link to = "/availability" onClick={(e) => {
              e.preventDefault(); 
              //code to take us at starting pt of guidelines div when scrolled
              const navbarHeight = document.querySelector(Nav)?.offsetHeight || 0; //finds navbar fixed height
              const element = document.getElementById("availability");
              if (element) {
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.scrollY  - navbarHeight;
                window.scrollTo({
                  top: offsetPosition,
                  behavior: "smooth"
                });
              }
              toggleMenu();
            }}>
            Availability
          </Link>
        </li>
        <li>
          <Link to = "/guidelines" onClick={(e) => {
              e.preventDefault(); 
              //code to take us at starting pt of guidelines div when scrolled
              const navbarHeight = document.querySelector(Nav)?.offsetHeight || 0; //finds navbar fixed height
              const element = document.getElementById("guidelines");
              if (element) {
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.scrollY  - navbarHeight;
                window.scrollTo({
                  top: offsetPosition,
                  behavior: "smooth"
                });
              }
              toggleMenu();
            }}>
            Guidelines
          </Link>
        </li>
        <li>
          <Link to = "/contactus" onClick={(e) => {
              e.preventDefault(); 
              //code to take us at starting pt of guidelines div when scrolled
              const navbarHeight = document.querySelector(Nav)?.offsetHeight || 0; //finds navbar fixed height
              const element = document.getElementById("contact");
              if (element) {
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.scrollY  - navbarHeight;
                window.scrollTo({
                  top: offsetPosition,
                  behavior: "smooth"
                });
              }
              toggleMenu();
            }}>
            Contact Us
          </Link>
        </li>

        <li>
          <Link to="/LoginModal" className="last-btn btn btn-primary" onClick={(e) => {
            e.preventDefault();
            window.location.href = "/LoginModal";
          }}>
            BOOK NOW
          </Link>
        </li>
      </Menu>
    </div>
  );
};

export default HamBurger;