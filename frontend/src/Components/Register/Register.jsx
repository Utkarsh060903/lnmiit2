import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Register.css";
import axios from "axios";

const RegisterModal = () => {
  const [userType, setUserType] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState(""); // Added email state
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleUserTypeChange = (e) => setUserType(e.target.value);
  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value); // Handle email input
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleConfirmPasswordChange = (e) => setConfirmPassword(e.target.value);
  const handleBackToHome = () => {
    navigate("/");
  };
  const validateEmail = () => {
    if (userType === "student") {
      const studentEmailPattern = /^(21|22|23|24|25)(dcs|ucs|uec|dce|ume|ucc)[0-9]{3}@lnmiit\.ac\.in$/;
      return studentEmailPattern.test(email);
    } else if (userType === "staff") {
      const staffEmailPattern = /^((21|22|23|24|25)(ucc|dcs|ucs|dce|uec|ume)[0-9]{3}|[a-zA-Z]+\.[a-zA-Z]+)@lnmiit\.ac\.in$/;
      return staffEmailPattern.test(email);
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    
    if (!validateEmail()) {
      alert("Please enter a valid email address based on your user type.");
      return;
    }

    try {
      const response = await axios.post("https://lnmiit-guest-server.onrender.com/api/user/register", {
        username,
        email,
        password,
        userType
      });

      console.log(username)

      if (response.data.success) {
        alert("Registration successful! Please log in.");
        navigate("/LoginModal");
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.error("Registration error:", error);
      alert("Registration failed. Please try again.");
    }
  };

  return (
    <div className="outer-div d-flex justify-content-center align-items-center vh-100">
      <div className="inner-div row">
        <div className="col">
          <h4 className="main-heading">REGISTER</h4>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Select User Type</label>
              <select
                className="form-select"
                value={userType}
                onChange={handleUserTypeChange}
                required
              >
                <option value="">--Select User Type--</option>
                <option value="student">Student, LNMIIT</option>
                <option value="staff">Staff, LNMIIT</option>
                <option value="alumni">Alumni, LNMIIT</option>
                <option value="admni">Guest House Admin</option>
              </select>
            </div>

            <div className="mb-3">
              <label className="form-label">Username</label>
              <input
                type="text"
                className="form-control"
                value={username}
                onChange={handleUsernameChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                value={email}
                onChange={handleEmailChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                value={password}
                onChange={handlePasswordChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Confirm Password</label>
              <input
                type="password"
                className="form-control"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
                required
              />
            </div>

            <button type="submit" className="btn btn-primary btn-1">
              Register
            </button>
            <button type="button" className="btn btn-secondary"
             onClick={handleBackToHome} >
              Back to Home
            </button>
          </form>
          <div className="mt-1">
            <p style={{color:"black"}}>
              Already have an account?{" "}
              <Link to="/LoginModal">Login here</Link> 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterModal;