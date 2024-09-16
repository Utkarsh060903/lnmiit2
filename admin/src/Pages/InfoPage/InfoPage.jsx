import React, { useState, useEffect } from "react";
import "./InfoPage.css";
import axios from "axios";
import moment from "moment";

const InfoPage = () => {
  const [info, setInfo] = useState([]);
  const url = "http://localhost:4001";

  const handleForward = async (studentRollNumber) => {
    try {
      const response = await axios.post(`${url}/api/send-email-approval`, {
        studentRollNumber,
      });

      if (response.data.success) {
        alert("email forwarded to the dean");
      } else {
        alert("failed to send email");
      }
    } catch (err) {
      console.log(err);
      alert("failed to send email")
    }
  };

  const fetchInfo = async () => {
    try {
      const response = await axios.get(`${url}/api/info`);
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
    <div className="list add flex-col">
      <p>Students Applied For Guest House</p>
      <div className="list-table">
        <div className="list-table-format title">
          <b>photo</b>
          <b>name</b>
          <b>rollno</b>
          <b>department</b>
          <b>phoneno</b>
          <b>guests</b>
          <b>arrivalDate</b>
          <b>departureDate</b>
          <b>arrivalTime</b>
        </div>
        {info.map((item, index) => (
          <div key={index} className="list-table-format">
            <img src={`${url}/uploads/` + item.photo} />
            <p>{item.studentName}</p>
            <p>{item.studentRollNumber}</p>
            <p>{item.studentDepartment}</p>
            <p>{item.studentMobileNumber}</p>
            <p>{item.numberOfRooms}</p>
            <p>{moment(item.arrivalDate).format("YYYY-MM-DD")}</p>
            <p>{moment(item.departureDate).format("YYYY-MM-DD")}</p>
            <p>{item.arrivalTime}</p>
            <button onClick={() => handleForward((item.studentRollNumber))}>forward for approval</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfoPage;
