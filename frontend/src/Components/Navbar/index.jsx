import { useContext } from "react";
import "../../App.css";
import image22 from "../../images/logo2_145x80.png";
import "./extra.css";

// import { NavLink } from 'react-router-dom';
import {
  Nav,
  Bars,
  NavLink,
  NavBtn,
  NavBtnLink,
  NavMenu,
} from "./NavbarElements";
import { UserContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { user, setUser } = useContext(UserContext);

  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null);
    navigate("/");
  };
  return (
    <>
      <Nav>
        <NavLink to="/">
          <img
            src={image22}
            alt="logo"
            className="imge"
            onClick={(e) => {
              e.preventDefault();
              const navbarHeight =
                document.querySelector(Nav)?.offsetHeight || 0; //finds navbar fixed height
              const element = document.getElementById("home");
              if (element) {
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition =
                  elementPosition + window.scrollY - navbarHeight;
                window.scrollTo({
                  top: offsetPosition,
                  behavior: "smooth",
                });
              }
            }}
          />
        </NavLink>
        <Bars />
        <div className="main-div">
          <NavMenu>
            <NavLink
              to="/about"
              className={"abt-btn"}
              style={({ isActive }) => ({
                color: isActive ? "red" : "inherit",
              })}
              onClick={(e) => {
                e.preventDefault();
                const navbarHeight =
                  document.querySelector(Nav)?.offsetHeight || 0; //finds navbar fixed height
                const element = document.getElementById("outer");
                if (element) {
                  const elementPosition = element.getBoundingClientRect().top;
                  const offsetPosition =
                    elementPosition + window.scrollY - navbarHeight;
                  window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth",
                  });
                }
              }}

              // onClick={(e) => {
              //   e.preventDefault(); // Prevent the default behavior of the link
              //   document.getElementById("outer").scrollIntoView({ behavior: "smooth" }) // Scroll to the section
              // }}
            >
              About Us
            </NavLink>
            <NavLink
              to="/services"
              style={({ isActive }) => ({
                color: isActive ? "red" : "inherit",
              })}
            >
              Services
            </NavLink>
            <NavLink
              to="/charges"
              style={({ isActive }) => ({
                color: isActive ? "red" : "inherit",
              })}
            >
              Charges
            </NavLink>
            <NavLink
              to="/availability"
              style={({ isActive }) => ({
                color: isActive ? "red" : "inherit",
              })}
              onClick={(e) => {
                e.preventDefault();
                const navbarHeight =
                  document.querySelector(Nav)?.offsetHeight || 0; //finds navbar fixed height
                const element = document.getElementById("availability");
                if (element) {
                  const elementPosition = element.getBoundingClientRect().top;
                  const offsetPosition =
                    elementPosition + window.scrollY - navbarHeight;
                  window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth",
                  });
                }
              }}

              // onClick={(e) => {
              //   e.preventDefault(); // Prevent the default behavior of the link
              //   document.getElementById("availability").scrollIntoView({ behavior: "smooth" }); // Scroll to the section
              // }}
            >
              Availability
            </NavLink>
            <NavLink
              to="/guidelines"
              style={({ isActive }) => ({
                color: isActive ? "red" : "inherit",
              })}
              onClick={(e) => {
                e.preventDefault();
                //code to take us at starting pt of guidelines div when scrolled
                const navbarHeight =
                  document.querySelector(Nav)?.offsetHeight || 0; //finds navbar fixed height
                const element = document.getElementById("guidelines");
                if (element) {
                  const elementPosition = element.getBoundingClientRect().top;
                  const offsetPosition =
                    elementPosition + window.scrollY - navbarHeight;
                  window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth",
                  });
                }
              }}

              // onClick={(e) => {
              //   e.preventDefault(); // Prevent the default behavior of the link
              //   document.getElementById("guidelines").scrollIntoView({ behavior: "smooth" , block: "start" , inline: "start" }); // Scroll to the section
              // }}
            >
              Guidelines
            </NavLink>
            <NavLink
              to="/contactus"
              style={({ isActive }) => ({
                color: isActive ? "red" : "inherit",
              })}
              onClick={(e) => {
                e.preventDefault();
                const navbarHeight =
                  document.querySelector(Nav)?.offsetHeight || 0; //finds navbar fixed height
                const element = document.getElementById("contact");
                if (element) {
                  const elementPosition = element.getBoundingClientRect().top;
                  const offsetPosition =
                    elementPosition + window.scrollY - navbarHeight;
                  window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth",
                  });
                }
              }}
              // onClick={(e) => {
              //   e.preventDefault(); // Prevent the default behavior of the link
              //   document.getElementById("contact").scrollIntoView({ behavior: "smooth" }); // Scroll to the section
              // }}
            >
              Contact Us
            </NavLink>
          </NavMenu>
        </div>
        <NavBtn className="btn-div">
          {user && (
            <NavBtnLink className="btn1" to="/form">
              BOOK NOW
            </NavBtnLink>
          )}
          {user && <NavBtnLink onClick={handleLogout}>{user.username}</NavBtnLink>}

          {!user && (
            <NavBtnLink className="btn2" to="/LoginModal">
              SIGN IN
            </NavBtnLink>
          )}
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;

// // // import React from 'react'
// // import "../../App.css"
// // import image22 from "../../images/logo2_145x80.png"

// // // import { NavLink } from 'react-router-dom';
// // import { Nav, Bars, NavLink,  NavBtn, NavBtnLink, NavMenu } from './NavbarElements';

// // const Navbar = () => {
// //   return(
// //     <>
// //       <Nav>
// //         <NavLink to='/'>
// //           <img src={image22} alt="logo" className="imge" />
// //         </NavLink>
// //         <Bars/>
// //         <NavMenu>
// //           <NavLink to="/about" activeStyle>
// //             About Us
// //           </NavLink>
// //           <NavLink to="/services" activeStyle>
// //             Services
// //           </NavLink>
// //           <NavLink to="/charges" activeStyle>
// //             Charges
// //           </NavLink>
// //           <NavLink to="/availability" activeStyle>
// //             Availability
// //           </NavLink>
// //           <NavLink to="/guidelines" activeStyle>
// //             Guidelines
// //           </NavLink>
// //           {/* <NavLink to="/gallery" activeStyle>
// //             Gallery
// //           </NavLink> */}
// //           <NavLink to="/contactus" activeStyle>
// //             Contact Us
// //           </NavLink>
// //           {/* <NavLink  to="/sign-up" activeStyle>
// //             Sign Up
// //           </NavLink> */}
// //         </NavMenu>
// //         <NavBtn>
// //           <NavBtnLink className={"btn1"} to="/LoginModal">
// //             SIGN IN
// //           </NavBtnLink>
// //           <NavBtnLink className={"btn2"} to="/form">
// //             BOOK NOW
// //           </NavBtnLink>
// //         </NavBtn>
// //       </Nav>
// //     </>
// //   );

// // };

// // export default  Navbar;
