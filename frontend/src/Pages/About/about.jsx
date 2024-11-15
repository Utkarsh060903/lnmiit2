import React from 'react'
import "./about.css"
// import "../About/about.css"
const About = () => {
  return (
    <div>
  {/* <main id="main"> */}

  <section id="outer">
    <div className="s-title">
      <h2 style={{ color: "black" }}>
        ABOUT US
      </h2>
    </div>
    <div className="main" style={{ background: "none", color: "black", marginTop: "-70px" }}>
      <div className="row-content font-style" style={{ background: "none", color: "black" }}>
        <div className="col-lg-12 pt-lg-0">
          <p className="tet lh-lg" style={{ color: "black" }}>
            LNMIIT Jaipur strongly believes in the old Indian adage Athithi Devo Bhava. We give our visitors the best facilities be it in terms of service, ambience or food. It is common practice in Indian institutes to create on-campus guest houses to host official guests.
            LNMIIT Jaipur has created a guest house to meet its needs. The campus has one guest house to accommodate the guests and delegates who visit the campus, with 12 Standard rooms and 2 Deluxe rooms, all rooms are air conditioned. The rooms have double beds and other amenities.
          </p>
        </div>

        <div className="col-lg-6 pt-lg-0">
          <p className="lh-lg" style={{ color: "black" }}>
            <b>Room Facilities</b>
          </p>
          <ul className="ite" style={{ color: "black"}}>
            <li style={{ color: "black" }}>24 hours running hot and cold water</li>
            <li style={{ color: "black" }}>Free Wi-Fi</li>
            <li style={{ color: "black" }}>TV with cable</li>
            <li style={{ color: "black" }}>Telephone service</li>
            <li style={{ color: "black" }}>Laundry service</li>
            <li style={{ color: "black" }}>Big sized rooms</li>
            <li style={{ color: "black" }}>Tea making (in Room) facilities</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  {/* </main> */}
</div>

  )
}

export default About;