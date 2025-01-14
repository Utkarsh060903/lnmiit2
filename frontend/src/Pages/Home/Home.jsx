// import React from "react";
import Card from "../../Components/Cards/Card.jsx";
import "../../Components/Cards/Card.css";
import Footer from "../../Components/Footer/Footer.jsx";
// import Footer from "../components/Footer/Footer.js";
import About from "../About/about.jsx";
import "../About/about.css";
import Guidelines from "../Guidelines/guidelines.jsx";
// import Guidelines from "./guidelines"
import Availability from "../Availability/Availability.jsx";
// import Availability from "./availabilty"
// import ContactUS from
import Contactus from "../ContactUs/contactus.jsx";
import download33 from "../../images/download33.png";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div id="home">
        <div id="img-outer-div">
          <img src={download33} className="lnm" alt="LNMIIT Jaipur" />
          <div className="main-heading-div">
            <h1 className="heading1">
              Welcome to LNMIIT Jaipur Guest House Booking System
            </h1>
            <h2 className="h2-heading">We are not away from home</h2>
            <div className="start-cards">
              <div className="cardss">
                <Card
                  title={"STANDARD ROOMS IN GUEST HOUSE"}
                  info={
                    <ul>
                      <li>12 Standard Rooms</li>
                      <li>Ground Floor - 8 Rooms</li>
                      <li>First Floor - 4 Rooms</li>
                    </ul>
                  }
                />
              </div>

              <div className="cardss">
                <Card
                  title={"DELUXE ROOMS IN GUEST HOUSE"}
                  info={
                    <ul>
                      <li>3 VIP Rooms</li>
                      <li>Ground Floor - 1 Room</li>
                      <li>First Floor - 2 Rooms</li>
                    </ul>
                  }
                />
              </div>
            </div>
          </div>
        </div>

        <div>
          <About />
        </div>

        <div>
          <Availability />
        </div>

        <div>
          <Guidelines />
        </div>

        <div>
          <Contactus />
        </div>
        
        <div>
          <Footer />
        </div>

      </div>
    </>
  );
};

export default Home;