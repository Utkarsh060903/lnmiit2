import "./Card.css"
import PropTypes from 'prop-types';

const Card = ({title, info}) => {
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
        
        {/* <div className='btn'>
          <button>
            <a>view more</a>
          </button>
        </div> */}
    </div>
  )
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired,
};

export default Card