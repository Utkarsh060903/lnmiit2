// import { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./LoginModal.css";
// import axios from 'axios'
// // import { Form, Button, Container, Row, Col } from "react-bootstrap";

// const LoginModal = () => {
//   const [userType, setUserType] = useState("");
//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("")
//   const [password, setPassword] = useState("");
//   const [captchaInput, setCaptchaInput] = useState("");

//   const handleUserTypeChange = (e) => setUserType(e.target.value);
//   const handleUsernameChange = (e) => setUsername(e.target.value);
//   const handlePasswordChange = (e) => setPassword(e.target.value);
//   const handleCaptchaChange = (e) => setCaptchaInput(e.target.value);
//   const handleEmailChange = (e) => setEmail(e.target.value);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     try{
//       const response = await axios.post('http://localhost:5000/api/user/login',({ email, password}) )

//       const data = await response.json()

//       if(response.ok){
//         console.log("login successfull" , data)
//       } else{
//         console.error(data.msg)
//       }

//     } catch(error){
//       console.log(error)
//     }
//   };

//   return (
//     <div className="outer-div d-flex justify-content-center align-items-center vh-100">
//       <div className="inner-div row">
//         <div className="col">
//           <h4 className="main-heading">USER LOGIN</h4>
//           <form onSubmit={handleSubmit}>
//             <div className="mb-3">
//               <label className="form-label">Select User Type</label>
//               <select
//                 className="form-select"
//                 value={userType}
//                 onChange={handleUserTypeChange}
//                 required
//               >
//                 <option value="">--Select User Type--</option>
//                 <option value="student">Student, LNMIIT</option>
//                 <option value="staff">Staff, LNMIIT</option>
//                 <option value="alumni">Alumni, LNMIIT</option>
//                 <option value="admni">Guest House Admin</option>
//               </select>
//             </div>

//             <div className="mb-3">
//               <label className="form-label">Email</label>
//               <input
//                 type="email"
//                 className="form-control"
//                 value={email}
//                 onChange={handleEmailChange}
//                 required
//               />
//             </div>

//             <div className="mb-3">
//               <label className="form-label">Password</label>
//               <input
//                 type="password"
//                 className="form-control"
//                 value={password}
//                 onChange={handlePasswordChange}
//                 required
//               />
//             </div>

//             <div className="mb-3">
//               <label className="form-label">Captcha</label>
//               <div className="d-flex align-items-center">
//                 <div className="captcha bg-light p-2 border">8, 3, 5, 4, 1</div>
//                 <input
//                   type="text"
//                   className="form-control ms-2"
//                   value={captchaInput}
//                   onChange={handleCaptchaChange}
//                   placeholder="Enter Captcha"
//                   required
//                 />
//               </div>
//             </div>

//             <button type="button" className="buttn btn btn-secondary">
//               Back to Home
//             </button>
//             <button type="submit" className="btn btn-primary">
//               Login
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginModal;





import { useContext, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./LoginModal.css";
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from "../../context/UserContext";

const LoginModal = () => {
  const [userType, setUserType] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [captchaInput, setCaptchaInput] = useState("");

  const navigate = useNavigate(); // Use navigate for redirection

  const { setUser } = useContext(UserContext)

  const handleUserTypeChange = (e) => setUserType(e.target.value);
  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleCaptchaChange = (e) => setCaptchaInput(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post('http://localhost:4001/api/user/login', { email, password, username });

      if (response.status === 200) {
        console.log("Login successful", response.data);
        setUser({username})
        
        // Redirect based on user type
        if (userType === "student") {
          navigate('/form');
        } else if (userType === "staff") {
          navigate('/facultyForm');
        } else {
          console.error("Invalid user type for redirection");
        }
      } else {
        console.error(response.data.msg);
      }
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <div className="outer-div d-flex justify-content-center align-items-center vh-100">
      <div className="inner-div row">
        <div className="col">
          <h4 className="main-heading">USER LOGIN</h4>
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
              <label className="form-label">Name</label>
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

            {/* <div className="mb-3">
              <label className="form-label">Captcha</label>
              <div className="d-flex align-items-center">
                <div className="captcha bg-light p-2 border">8, 3, 5, 4, 1</div>
                <input
                  type="text"
                  className="form-control ms-2"
                  value={captchaInput}
                  onChange={handleCaptchaChange}
                  placeholder="Enter Captcha"
                  required
                />
              </div>
            </div> */}

            <button type="button" className="buttn btn btn-secondary">
              Back to Home
            </button>
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </form>
          <div className="mt-3">
            <p>
              Don't have an account?{" "}
              <Link to="/register">Register here</Link> {/* Link to the register page */}
            </p>

            <p>
              forgot password?{" "}
              <Link to="/reset-password">click here</Link> {/* Link to the register page */}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
