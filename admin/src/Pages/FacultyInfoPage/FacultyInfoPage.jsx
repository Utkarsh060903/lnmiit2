import { useState, useEffect } from "react";
import "./FacultyInfoPage.css";
import axios from "axios";
import moment from "moment";

const FacultyInfoPage = () => {
  const [info, setInfo] = useState([]);
  const url = "https://lnmiit-guest-house-server.onrender.com";

  const handleForward = async (facultyEmployeeId) => {
    try {
      const response = await axios.post(`${url}/api/send-faculty-email-approval`, {
        facultyEmployeeId,
      });

      if (response.data.success) {
        alert("Email forwarded to the dean");
      } else {
        alert("Failed to send email");
      }
    } catch (err) {
      console.log(err);
      alert("Failed to send email");
    }
  };

  const fetchInfo = async () => {
    try {
      const response = await axios.get(`${url}/api/faculty-info`);
      if (response.data.success) {
        setInfo(response.data.data);
      } else {
        console.error("Error fetching data");
      }
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  return (
    <div className="guest-house-container">
      <h2 className="page-title">Faculty Applied for Guest House</h2>
      <div className="list-table">
        <div className="list-table-format title">
          <b>Photo</b>
          <b>Name</b>
          <b>Employee ID</b>
          <b>Department</b>
          <b>Phone No.</b>
          <b>Rooms</b>
          <b>Arrival Date</b>
          <b>Departure Date</b>
          {/* <b>Arrival Time</b> */}
        </div>
        {info.map((item, index) => (
          <div key={index} className="list-table-format">
            <div className="photo-cell">
              <img src={`${url}/uploads/` + item.photo} alt="Faculty" className="student-photo" />
            </div>
            <p className="text-cell">{item.facultyName}</p>
            <p className="text-cell">{item.facultyEmployeeId}</p>
            <p className="text-cell">{item.facultyDepartment}</p>
            <p className="text-cell">{item.facultyMobileNumber}</p>
            <p className="text-cell center">{item.numberOfRooms}</p>
            <p className="text-cell center">{moment(item.arrivalDate).format("YYYY-MM-DD")}</p>
            <p className="text-cell center">{moment(item.departureDate).format("YYYY-MM-DD")}</p>
            {/* <p className="text-cell center">{item.arrivalTime}</p> */}
            <button className="forward-button" onClick={() => handleForward(item.facultyEmployeeId)}>
              Forward for Approval
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FacultyInfoPage;

