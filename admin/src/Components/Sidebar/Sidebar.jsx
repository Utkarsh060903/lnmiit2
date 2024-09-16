import React from 'react'
import './Sidebar.css'
import {NavLink} from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="sidebar-options">
            <NavLink to='/studentinfo' className="sidebar-option">
                <p>Students</p>
            </NavLink>
            <NavLink to='/facultyinfo' className="sidebar-option">
                <p>Faculties</p>
            </NavLink>
            <NavLink to='/roomset' className="sidebar-option">
                <p>Room Setup</p>
            </NavLink>
            <NavLink to='/info' className="sidebar-option">
                <p>Room Status</p>
            </NavLink>
        </div>
    </div>
  )
}

export default Sidebar