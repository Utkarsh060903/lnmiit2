// import React from 'react';
import Navbar from './Components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
// import Form from 'antd/es/form/Form'; // or import Form from './Pages/Form';
import Availability from './Pages/Availability/Availability';
import About from './Pages/About/about';
import Login from './Components/Login/Login';
import LoginModal from './Components/LoginModal/LoginModal';
import GuestHouseBookingForm from './Pages/Form/Form';
import Register from './Components/Register/Register';
import UserProvider from './context/UserContext.jsx';
import FacultyForm from './Pages/FacultyForm/FacultyForm';
import FacultyLogin from './Components/FacultyLogin/FacultyLogin';
import FacultyRegister from './Components/FacultyRegister/FacultyRegister';
import Guidelines from './Pages/Guidelines/guidelines';
import Contactus from './Pages/ContactUs/contactus';
import ForgotPassword from './Components/LoginModal/ForgotPassword.jsx';

const App = () => {
  return (
    <UserProvider>
      <div className='app'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          {/* <Route path='/form' element={<Form />} /> */}
          <Route path='/facultyform' element={<FacultyForm />} />
          <Route path='/availability' element={<Availability />} />
          <Route path='/about' element={<About />} />
          <Route path='/guidelines' element={<Guidelines />} />
          <Route path='/contactus' element={<Contactus />} />
          <Route path='/form' exact element={<GuestHouseBookingForm />} />
          <Route path='/login/student' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/register/faculty' element={<FacultyRegister />} />
          <Route path='/login/faculty' element={<FacultyLogin />} />
          <Route path='/LoginModal' exact element={<LoginModal />} />
          <Route path='/reset-password' element={<ForgotPassword />} />
        </Routes>
      </div>
    </UserProvider>
  );
};

export default App;
