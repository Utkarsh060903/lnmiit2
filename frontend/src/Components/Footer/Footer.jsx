// import React from 'react'
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "./Footer.css"

const Footer = () => {
  return (
    <>
    <div className='footer'>
        <div className='container ct1'>
            <div className='row'>
                <div className="col-md-6 col-lg-4 col-12 ft-1">
                    <h3><span>LNMIIT JAIPUR</span> </h3>
                    <p>Rupa ki Nangal,</p>
                    <p>Post-Sumel, Via, Jamdoli,</p>
                    <p>Jaipur, Rajasthan 302031</p>
                </div>
                <div className="col-md-6 col-lg-3 col-12 ft-2">
                    <h5>Useful Links</h5>
                    <ul>
                        <li className="nav-item">
                            <a className="" href="https://lnmiit.ac.in/" target={"_blank"}>LNMIIT Website</a>
                        </li>
                        <li className="nav-item">
                            <a className="" href="https://alumni.lnmiit.ac.in/" target={"_blank"}>Alumni Portal</a>
                        </li>
                        {/* <li className="nav-item">
                            <a className="" href="/">Contact Us</a>
                        </li>
                        <li className="nav-item">
                            <a className="" href="/">Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="" href="/">Portfolio</a>
                        </li> */}
                    </ul>
                </div>
                <div className="col-md-6 col-lg-4 col-12 ft-3">
                            <h5>Terms & Policy</h5>
                            <ul>
                                <li className="nav-item">
                                    <a className="" href="/">Terms of Service</a>
                                </li>
                                <li className="nav-item">
                                    <a className="" href="/">Privacy Policy</a>
                                </li>
                            </ul>


                </div> 
            </div>
        </div>
    </div>
    <div className='Last-footer'>
                <p>© Copyright LNMIIT Jaipur. All Rights Reserved</p>
    </div>
    </>
    
  );
};

export default Footer