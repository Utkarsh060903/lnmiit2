// import React from 'react'
import "./contactus.css"

const Contactus = () => {
    return (
        <div>

            <section id='contact' className='contact'>

               
                    <div className='cont-title section-title'>
                        <h2>CONTACT US</h2>
                    </div>

                    <div className='contact-body'>
                        <div>
                            <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14227.131395857945!2d75.91171559674585!3d26.942097802142705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db9d1336f9cfd%3A0x752e91da575f16d9!2sThe%20LNM%20Institute%20of%20Information%20Technology%2C%20Jaipur%20(LNMIIT)!5e0!3m2!1sen!2sin!4v1712379370243!5m2!1sen!2sin" height="450" styles="border:0;" allowFullScreen="" loading="lazy" referrerPolicy ="no-referrer-when-downgrade"></iframe>
                        </div>

                        <div className='row mt-5'>
                            <div className='col-lg-6'>
                                <div className='block1 p-1 mb-1' >
                                    <div className='address'>
                                        <i className='bi bi-geo-alt'></i>
                                        <h4>Location:</h4>
                                        <p>
                                            LNMIIT , Rupa ki Nangal, Post-Sumel, Via, Jamdoli, Jaipur, Rajasthan 302031
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-3'>
                                <div className='block2 p-1 mb-1'>
                                    <div className='email'>
                                        <i className='bi bi-envelope'></i>
                                        <h4>Email:</h4>
                                        <p>guesthouse@lnmiit.ac.in</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-3'>
                                <div className='block3 p-1 mb-1'>
                                    <div className='phone'>
                                        <i className='bi bi-phone'></i>
                                        <h4>Call:</h4>
                                        <p>91-3499334863</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </section>
        </div>
    )
}

export default Contactus;

