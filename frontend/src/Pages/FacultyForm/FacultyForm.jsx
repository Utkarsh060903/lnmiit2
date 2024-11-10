import { useState, useEffect } from "react";
import axios from "axios";
import "./FacultyForm.css";
import {
  useFullNameValidation,
  useMobileNumberValidation,
  useEmployeeIdValidation,
  useNumberOfRoomsValidation,
  useNumberOfMalesValidation,
  useNumberOfFemalesValidation,
  useNumberOfChildrenValidation,
  useGuestNameValidation,
  useGuestMobileNumberValidation,
} from "./useCustomFacultyValidation";

const GuestHouseFacultyBookingForm = () => {
  const [formData, setFormData] = useState({
    facultyName: "",
    facultyEmployeeId: "",
    facultyDepartment: "",
    facultyMobileNumber: "",
    photo: null,
    numberOfMales: 0,
    numberOfFemales: 0,
    numberOfChildren: 0,
    guestMobileNumber: "",
    guestName: "",
    numberOfRooms: 0,
    arrivalDate: "",
    departureDate: "",
    guestRelation: "",
    gender: "",
    guestPurpose: "",
  });

  const { errorMessage1, validateFullName } = useFullNameValidation();
  const { errorMessage8, validateGuestName } = useGuestNameValidation();
  const { errorMessage2, validateMobileNumber } = useMobileNumberValidation();
  const { errorMessage3, validateEmployeeId } = useEmployeeIdValidation();
  const { errorMessage4, validateNumberOfRooms } = useNumberOfRoomsValidation();
  const { errorMessage5, validateNumberOfMales } = useNumberOfMalesValidation();
  const { errorMessage6, validateNumberOfFemales } =
    useNumberOfFemalesValidation();
  const { errorMessage7, validateNumberOfChildren } =
    useNumberOfChildrenValidation();
  const { errorMessage9, validateGuestMobileNumber } =
    useGuestMobileNumberValidation();

  const handleChange = (e) => {
    const { name, value } = e.target;

    const validationMapping = {
      facultyName: validateFullName,
      guestName: validateGuestName,
      facultyMobileNumber: validateMobileNumber,
      facultyEmployeeId: validateEmployeeId,
      numberOfRooms: validateNumberOfRooms,
      numberOfMales: validateNumberOfMales,
      numberOfFemales: validateNumberOfFemales,
      numberOfChildren: validateNumberOfChildren,
      guestMobileNumber: validateGuestMobileNumber,
    };

    if (validationMapping[name]) {
      validationMapping[name](value);
    }

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      photo: e.target.files[0],
    }));
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
  
    // Add all form data to FormData object
    for (const key in formData) {
      data.append(key, formData[key]);
    }
  
    try {
      const response = await axios.post('http://localhost:4001/api/facultyform', data, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      console.log('Form submitted successfully:', response.data);
  
      // Reset form fields after successful submission
      setFormData({
        facultyName: '',
        facultyEmployeeId: '',
        facultyDepartment: '',
        facultyMobileNumber: '',
        numberOfMales: 0,
        numberOfFemales: 0,
        numberOfChildren: 0,
        guestMobileNumber: '',
        guestName: '',
        numberOfRooms: 0,
        arrivalDate: '',
        departureDate: '',
        guestRelation: '',
        gender: '',
        guestPurpose: '',
        photo: null,
      });
    } catch (error) {
      console.error('Form submission error:', error);
    }
  };

  useEffect(() => {
    const form = document.querySelector("form");
    const nextBtn = form.querySelector(".nextBtn");
    const backBtn = form.querySelector(".backBtn");
    const allInput = form.querySelectorAll(".first input");

    const handleNextClick = () => {
      allInput.forEach((input) => {
        if (input.value !== "") {
          form.classList.add("secActive");
        } else {
          form.classList.remove("secActive");
        }
      });
    };

    const handleBackClick = () => {
      form.classList.remove("secActive");
    };

    nextBtn.addEventListener("click", handleNextClick);
    backBtn.addEventListener("click", handleBackClick);

    // Cleanup function to remove event listeners when component unmounts
    return () => {
      nextBtn.removeEventListener("click", handleNextClick);
      backBtn.removeEventListener("click", handleBackClick);
    };
  }, []);

  return (
    <div className="bodyy">
      <div className="container">
        <header>Room Booking</header>

        <form onSubmit={handleSubmit}>
          <div className="form first">
            <div className="details personal">
              <span className="title">faculty Details</span>

              <div className="fields">
                <div className="input-field">
                  <label>Full Name</label>
                  <input
                    type="text"
                    name="facultyName"
                    placeholder="Enter your name"
                    value={formData.facultyName}
                    onChange={handleChange}
                  />
                  {errorMessage1 && (
                    <div className="error-message">{errorMessage1}</div>
                  )}
                </div>

                <div className="input-field">
                  <label>Employee Id</label>
                  <input
                    type="text"
                    name="facultyEmployeeId"
                    placeholder="Enter roll number"
                    value={formData.facultyEmployeeId}
                    onChange={handleChange}
                  />
                  {errorMessage3 && (
                    <div className="error-message">{errorMessage3}</div>
                  )}
                </div>

                <div className="input-field">
                  <label>Branch</label>
                  <input
                    type="text"
                    name="facultyDepartment"
                    placeholder="Enter your branch"
                    value={formData.facultyDepartment}
                    onChange={handleChange}
                  />
                </div>

                <div className="input-field">
                  <label>Mobile Number</label>
                  <input
                    type="tel"
                    name="facultyMobileNumber"
                    placeholder="Enter mobile number (10 digits)"
                    value={formData.facultyMobileNumber}
                    onChange={handleChange}
                  />
                  {errorMessage2 && (
                    <div className="error-message">{errorMessage2}</div>
                  )}
                </div>

                <div className="input-field">
                  <label>Photo</label>
                  <input
                    type="file"
                    name="photo"
                    placeholder="RFID photo"
                    onChange={handleFileChange}
                  />

                  {errorMessage3 && (
                    <div className="error-message">{errorMessage3}</div>
                  )}
                </div>

                <div className="input-field">
                  <label>Gender</label>
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                  >
                    <option disabled selected>
                      Select gender
                    </option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Others">Others</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="details ID">
              <span className="title">Guest Details</span>

              <div className="fields">
                <div className="input-field">
                  <label>Number of Rooms Required</label>
                  <input
                    type="number"
                    placeholder="Enter no. of rooms"
                    name="numberOfRooms"
                    value={formData.numberOfRooms}
                    onChange={handleChange}
                  />
                  {errorMessage4 && (
                    <div className="error-message">{errorMessage4}</div>
                  )}
                </div>

                <div className="input-field">
                  <label>Number of Males</label>
                  <input
                    type="number"
                    name="numberOfMales"
                    placeholder="Enter no. of males"
                    value={formData.numberOfMales}
                    onChange={handleChange}
                  />
                  {errorMessage5 && (
                    <div className="error-message">{errorMessage5}</div>
                  )}
                </div>

                <div className="input-field">
                  <label>Number of Females</label>
                  <input
                    type="number"
                    name="numberOfFemales"
                    placeholder="Enter no. of females"
                    value={formData.numberOfFemales}
                    onChange={handleChange}
                  />
                  {errorMessage6 && (
                    <div className="error-message">{errorMessage6}</div>
                  )}
                </div>

                <div className="input-field">
                  <label>Number of Children</label>
                  <input
                    type="number"
                    name="numberOfChildren"
                    placeholder="Enter  no. of children"
                    value={formData.numberOfChildren}
                    onChange={handleChange}
                  />
                  {errorMessage7 && (
                    <div className="error-message">{errorMessage7}</div>
                  )}
                </div>

                <div className="input-field">
                  <label>Guest Name</label>
                  <input
                    type="text"
                    placeholder="Enter guest name"
                    name="guestName"
                    value={formData.guestName}
                    onChange={handleChange}
                  />
                  {errorMessage8 && (
                    <div className="error-message">{errorMessage8}</div>
                  )}
                </div>

                <div className="input-field">
                  <label>Mobile Number</label>
                  <input
                    type="number"
                    name="guestMobileNumber"
                    placeholder="Enter mobile number (10 digits)"
                    value={formData.guestMobileNumber}
                    onChange={handleChange}
                  />
                  {errorMessage9 && (
                    <div className="error-message">{errorMessage9}</div>
                  )}
                </div>
              </div>

              <button className="nextBtn" type="button">
                <span className="btnText">Next</span>
                <i className="uil uil-navigator"></i>
              </button>
            </div>
          </div>

          <div className="form second">
            <div className="details address">
              <span className="title">Guest Details</span>

              <div className="fields">
                <div className="input-field">
                  <label>Relation</label>
                  <input
                    type="text"
                    name="guestRelation"
                    placeholder="Enter relation with guest"
                    value={formData.guestRelation}
                    onChange={handleChange}
                  />
                </div>

                <div className="input-field">
                  <label>Check-In Date</label>
                  <input
                    type="date"
                    name="arrivalDate"
                    value={formData.arrivalDate}
                    onChange={handleChange}
                  />
                </div>

                <div className="input-field">
                  <label>Check-Out Date</label>
                  <input
                    type="date"
                    name="departureDate"
                    value={formData.departureDate}
                    onChange={handleChange}
                  />
                </div>

                <div className="input-field">
                  <label>Purpose Of Visit</label>
                  <input
                    type="text"
                    name="guestPurpose"
                    placeholder="Enter purpose"
                    value={formData.guestPurpose}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            <div className="details family">
              <div className="buttons">
                <div className="backBtn" type="button">
                  <i className="uil uil-navigator"></i>
                  <span className="btnText">Back</span>
                </div>

                <button className="submit" type="submit">
                  <span className="btnText">Submit</span>
                  <i className="uil uil-navigator"></i>
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default GuestHouseFacultyBookingForm;

// import React, { useState , useEffect } from 'react';
// import './Form.css';
// import axios from 'axios';
// import gsap from "gsap";
// import { useGSAP } from "@gsap/react";
// import { ScrollTrigger } from "gsap/all";

// gsap.registerPlugin(ScrollTrigger);

// const Form = () => {

//   useEffect(() => {
//     gsap.to(".navbar", {
//       backgroundColor: "black",
//       duration: 0.5,
//       height: "80px",
//       scrollTrigger: {
//         trigger: ".navbar",
//         scroller: "body",
//         start: "top -10%",
//         end: "top -11%",
//         scrub: 1,
//       },
//     });
// } , [])

//   const [formData, setFormData] = useState({
//     name: '',
//     rollno: '',
//     department: '',
//     phoneno: '',
//     photo: null,
//     guests: 0,
//     arrivalDate: '',
//     departureDate: '',
//     arrivalTime: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleFileChange = (e) => {
//     setFormData({ ...formData, photo: e.target.files[0] });
//   };

//   const onFormSubmit = async (event) => {
//     event.preventDefault();
//     const url = 'http://localhost:4001/api/form';
//     const data = new FormData();
//     data.append('name', formData.name);
//     data.append('rollno', formData.rollno);
//     data.append('department', formData.department);
//     data.append('phoneno', formData.phoneno);
//     data.append('photo', formData.photo);
//     data.append('guests', formData.guests);
//     data.append('arrivalDate', formData.arrivalDate);
//     data.append('departureDate', formData.departureDate);
//     data.append('arrivalTime', formData.arrivalTime);

//     try {
//       const response = await axios.post(url, data, {
//         headers: {
//           'Content-Type': 'multipart/form-data'
//         }
//       });
//       if (response.data.success) {
//         alert('Data submitted successfully');
//       } else {
//         console.error('Server error:', response.data);
//         alert('Server error: ' + response.data.message);
//       }
//     } catch (error) {
//       console.error('Error submitting form:', error);
//       alert('Error submitting form: ' + error.message);
//     }
//   };

//   return (
//     <div className="form-container">
//       <h2>faculty Information</h2>
//       <form onSubmit={onFormSubmit}>
//         <div className="form-group">
//           <label htmlFor="name">faculty's Name:</label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="rollno">faculty's Roll No:</label>
//           <input
//             type="text"
//             id="rollno"
//             name="rollno"
//             value={formData.rollno}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="department">faculty's Department:</label>
//           <input
//             type="text"
//             id="department"
//             name="department"
//             value={formData.department}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="phoneno">faculty's Phone No:</label>
//           <input
//             type="tel"
//             id="phoneno"
//             name="phoneno"
//             value={formData.phoneno}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="photo">faculty's ID Photo:</label>
//           <input
//             type="file"
//             id="photo"
//             name="photo"
//             onChange={handleFileChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="guests">Number of Guests:</label>
//           <input
//             type="number"
//             id="guests"
//             name="guests"
//             value={formData.guests}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="arrivalDate">Arrival Date:</label>
//           <input
//             type="date"
//             id="arrivalDate"
//             name="arrivalDate"
//             value={formData.arrivalDate}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="departureDate">Departure Date:</label>
//           <input
//             type="date"
//             id="departureDate"
//             name="departureDate"
//             value={formData.departureDate}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="arrivalTime">Time of Arrival:</label>
//           <input
//             type="time"
//             id="arrivalTime"
//             name="arrivalTime"
//             value={formData.arrivalTime}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default Form;
