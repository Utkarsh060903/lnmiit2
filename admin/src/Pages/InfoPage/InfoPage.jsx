import { useState, useEffect } from "react";
import "./InfoPage.css";
import axios from "axios";
import moment from "moment";
import { useContext } from "react";
import { myContext } from "../../context/Context";

const InfoPage = () => {
  const {info, setInfo} = useContext(myContext)
  const url = "http://localhost:4001";

  const handleForward = async (student) => {
    try {
      const response = await axios.post(`${url}/api/send-email-approval`, {
        studentName: student.studentName, // Pass studentName along with rollNumber
        studentRollNumber: student.studentRollNumber,
      });

      if (response.data.success) {
        alert("Email forwarded to the dean");
      } else {
        alert("Failed to send email: " + response.data.message);
      }
    } catch (err) {
      console.error("Error sending email:", err);
      alert("Failed to send email. Please try again later.");
    }
  };

  const fetchInfo = async () => {
    try {
      const response = await axios.get(`${url}/api/info`);
      if (response.data.success) {
        setInfo(response.data.data);
      } else {
        console.error("Error fetching data:", response.data.message);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  return (
    <div className="guest-house-container">
      <div className="list add">
        <h1 className="page-title">Students Applied For Guest House</h1>
        <div className="list-table">
          <div className="list-table-format title">
            <b>Photo</b>
            <b>Name</b>
            <b>Roll No</b>
            <b>Department</b>
            <b>Phone No</b>
            <b>Rooms</b>
            <b>Arrival Date</b>
            <b>Departure Date</b>
            <b>Actions</b> {/* Added Actions column */}
          </div>
          {info.map((item, index) => (
            <div key={index} className="list-table-format">
              <div className="photo-cell">
                <img 
                  src={`${url}/uploads/${item.photo}`} 
                  alt={`${item.studentName}'s photo`}
                  className="student-photo"
                />
              </div>
              <div className="text-cell">{item.studentName}</div>
              <div className="text-cell">{item.studentRollNumber}</div>
              <div className="text-cell">{item.studentDepartment}</div>
              <div className="text-cell">{item.studentMobileNumber}</div>
              <div className="text-cell center">{item.numberOfRooms}</div>
              <div className="text-cell center">
                {moment(item.arrivalDate).format("YYYY-MM-DD")}
              </div>
              <div className="text-cell center">
                {moment(item.departureDate).format("YYYY-MM-DD")}
              </div>
              <div className="text-cell center">
                <button 
                  className="forward-button"
                  onClick={() => handleForward(item)}
                >
                  Forward for Approval
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InfoPage;
