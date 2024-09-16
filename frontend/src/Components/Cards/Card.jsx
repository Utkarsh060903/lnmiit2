import React from 'react'
import "./Card.css"

const Card = ({title,imageurl,info}) => {
  return (
    <div className='card-container'>
        {/* <div className='image-container'>
            <img src={""} alt=""/>
        </div> */}
        <div className='card-content'>
        <div className='card-title'>
          <h3>{title}</h3>
        </div>
        <div className='card-body'>
          <p>{info}</p>
        </div>
        </div>
        
        <div className='btn'>
          <button>
            <a>view more</a>
          </button>
        </div>
    </div>
  )
}

export default Card