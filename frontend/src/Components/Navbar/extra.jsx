
import "../../App.css";
import image22 from "../../images/logo2_145x80.png";
import "./extra.css";
import { Nav, Bars, NavLink, NavBtn, NavBtnLink, NavMenu } from './NavbarElements';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../UserContext';
import { useContext, useState } from 'react';
import HamBurger from "../HamBurger/Hamburger";


const Navbar = () => {
  const {user , setUser} = useContext(UserContext);
  const navigate = useNavigate();
  const handleLogout = () => {
    setUser(null);
    navigate("/");
  };
 
 

  return (
    <>
      <Nav>
        {/* ------lnmiit main logo-------- */}

        <NavLink to="/">
          <img src={image22} alt="logo" className="imge"
          onClick={(e) => {
            e.preventDefault(); 
            window.location.href = "/"; //when image is clicked, the website refreshes and takes us to home page
          }} />
        </NavLink>

         {/* ------------------- hamburger menu --------------------------- */}

        <HamBurger/>
          
        

        <div className="main-div">
        <NavMenu>

              {/* ----------------- HOME ------------------- */}  

          <NavLink
            to="/home"
            style={({ isActive }) => ({
              color: isActive ? 'red' : 'inherit',
            })}
            
            onClick={(e) => {
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
            }}
          >
            Home
          </NavLink>
              {/* --------------------ABOUT US ----------------------- */}

          <NavLink
            to="/about"
            className={"abt-btn"}
            style={({ isActive }) => ({
              color: isActive ? 'red' : 'inhert',
            })}

            onClick={(e) => {
              e.preventDefault(); 
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
            }}
          >
            About Us
          </NavLink>

          {/* ----------------- SERVICES ------------------- */}

          <NavLink
            to="/services"
            style={({ isActive }) => ({
              color: isActive ? 'red' : 'inherit',
            })}

            onClick={(e) => {
              e.preventDefault(); 
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
            }}
          >
            Services
          </NavLink>

          {/* ----------------- GALLERY ------------------- */}

          <NavLink
            to="/gallery"
            style={({ isActive }) => ({
              color: isActive ? 'red' : 'inherit',
            })}

            onClick={(e) => {
              e.preventDefault(); 
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
            }}
          >
            Gallery
          </NavLink>

          {/* -------------- AVAILABILITY ------------------------ */}

          <NavLink
            to="/availability"
            style={({ isActive }) => ({
              color: isActive ? 'red' : 'inherit',
            })}
            
            onClick={(e) => {
              e.preventDefault(); 
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
            }}
          >
            Availability
          </NavLink>

          {/* ------------------- GUIDELINES ---------------------- */}

          <NavLink
            to="/guidelines"
            style={({ isActive }) => ({
              color: isActive ? 'red' : 'inherit',
            })}

            onClick={(e) => {
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
            }}
          >
            Guidelines
          </NavLink>

          {/* -------------------- CONTACT US ------------------------- */}

          <NavLink
            to="/contactus"
            style={({ isActive }) => ({
              color: isActive ? 'red' : 'inherit',
            })}

            onClick={(e) => {
              e.preventDefault(); 
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
            }}
          >
            Contact Us
          </NavLink>

        </NavMenu>
        </div>

        {/* --------button part of navbar--------------- */}

        <NavBtn className="btn-div">
          {/* <NavBtnLink className="btn1" to="/form">
            BOOK NOW
          </NavBtnLink> */}
         

          {user && <NavBtnLink onClick={handleLogout}>{user.username}</NavBtnLink>}

         {!user && (
           <NavBtnLink className="btn2" to="/LoginModal"> 
            BOOK NOW
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