// import React from 'react'
// import './Sidebar.css'
// import {NavLink} from 'react-router-dom'

// const Sidebar = () => {
//   return (
//     <div className='sidebar'>
//         <div className="sidebar-options">
//             <NavLink to='/studentinfo' className="sidebar-option">
//                 <p>Students</p>
//             </NavLink>
//             <NavLink to='/facultyinfo' className="sidebar-option">
//                 <p>Faculty</p>
//             </NavLink>
//             <NavLink to='/roomset' className="sidebar-option">
//                 <p>Room Setup</p>
//             </NavLink>
//             <NavLink to='/roomstatus' className="sidebar-option">
//                 <p>Room Status</p>
//             </NavLink>
//         </div>
//     </div>
//   )
// }

// export default Sidebar

import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="hamburger" onClick={toggleSidebar}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-options">
          <NavLink to="/studentinfo" className="sidebar-option" onClick={toggleSidebar}>
            <p>Students</p>
          </NavLink>
          <NavLink to="/facultyinfo" className="sidebar-option" onClick={toggleSidebar}>
            <p>Faculty</p>
          </NavLink>
          <NavLink to="/roomset" className="sidebar-option" onClick={toggleSidebar}>
            <p>Room Setup</p>
          </NavLink>
          <NavLink to="/roomstatus" className="sidebar-option" onClick={toggleSidebar}>
            <p>Room Status</p>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
