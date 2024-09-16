import { useState , useEffect } from 'react';
import './FacultyForm.css';
import axios from 'axios';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const FacultyForm = () => {

  useEffect(() => {
    gsap.to(".navbar", {
      backgroundColor: "black",
      duration: 0.5,
      height: "80px",
      scrollTrigger: {
        trigger: ".navbar",
        scroller: "body",
        start: "top -10%",
        end: "top -11%",
        scrub: 1,
      },
    });
} , [])

  const [formData, setFormData] = useState({
    name: '',
    employeeId: '',
    department: '',
    phoneno: '',
    photo: null,
    guests: 0,
    arrivalDate: '',
    departureDate: '',
    arrivalTime: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, photo: e.target.files[0] });
  };

  const onFormSubmit = async (event) => {
    event.preventDefault();
    const url = 'http://localhost:4001/api/facultyform';
    const data = new FormData();
    data.append('name', formData.name);
    data.append('employeeId', formData.rollno);
    data.append('department', formData.department);
    data.append('phoneno', formData.phoneno);
    data.append('photo', formData.photo);
    data.append('guests', formData.guests);
    data.append('arrivalDate', formData.arrivalDate);
    data.append('departureDate', formData.departureDate);
    data.append('arrivalTime', formData.arrivalTime);

    try {
      const response = await axios.post(url, data, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      if (response.data.success) {
        alert('Data submitted successfully');
      } else {
        console.error('Server error:', response.data);
        alert('Server error: ' + response.data.message);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Error submitting form: ' + error.message);
    }
  };

  return (
    <div className="form-container">
      <h2>Faculty Information</h2>
      <form onSubmit={onFormSubmit}>
        <div className="form-group">
          <label htmlFor="name">Faculty's Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="rollno">Faculty's Roll No:</label>
          <input
            type="text"
            id="rollno"
            name="rollno"
            value={formData.rollno}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="department">Faculty's Department:</label>
          <input
            type="text"
            id="department"
            name="department"
            value={formData.department}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phoneno">Faculty's Phone No:</label>
          <input
            type="tel"
            id="phoneno"
            name="phoneno"
            value={formData.phoneno}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="photo">Faculty's ID Photo:</label>
          <input
            type="file"
            id="photo"
            name="photo"
            onChange={handleFileChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="guests">Number of Guests:</label>
          <input
            type="number"
            id="guests"
            name="guests"
            value={formData.guests}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="arrivalDate">Arrival Date:</label>
          <input
            type="date"
            id="arrivalDate"
            name="arrivalDate"
            value={formData.arrivalDate}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="departureDate">Departure Date:</label>
          <input
            type="date"
            id="departureDate"
            name="departureDate"
            value={formData.departureDate}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="arrivalTime">Time of Arrival:</label>
          <input
            type="time"
            id="arrivalTime"
            name="arrivalTime"
            value={formData.arrivalTime}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FacultyForm;

