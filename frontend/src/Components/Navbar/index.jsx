import { useContext } from "react";
import "../../App.css";
import image22 from "../../images/logo2_145x80.png";
import "./extra.css";
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
    navigate("/LoginModal");
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
            >
              About Us
            </NavLink>

            <NavLink
              to="/services"
              style={({ isActive }) => ({
                color: isActive ? "red" : "inherit",
              })}
              onClick={(e) => {
                e.preventDefault();
                const navbarHeight =
                  document.querySelector(Nav)?.offsetHeight || 0; //finds navbar fixed height
                const element = document.getElementById("services");
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
            >
              Services
            </NavLink>

            <NavLink
              to="/gallery"
              style={({ isActive }) => ({
                color: isActive ? "red" : "inherit",
              })}
              onClick={(e) => {
                e.preventDefault();
                const navbarHeight =
                  document.querySelector(Nav)?.offsetHeight || 0; //finds navbar fixed height
                const element = document.getElementById("gallery");
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
            >
              Gallery
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
          {user && (
            <NavBtnLink onClick={handleLogout}>{user.username}</NavBtnLink>
          )}

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