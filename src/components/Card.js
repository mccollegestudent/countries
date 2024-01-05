import React,  { useState }  from 'react';
import './Card.css';
import UnkownFlag from './UnkownFlag.jpg';

const Card = ({ country, selectedCountry }) => {
  const [imageError, setImageError] = useState(false);
  const handleError = (e) => {
    e.target.src = UnkownFlag;

    setImageError(true);
  };

  const handleClick = () => {
   
    selectedCountry(country);
  };


  return (
    <div
      className='card tc o-100 dib br4 pa3 ma2 grow bw2 shadow-5 pointer' //bg-light-yellow
      onClick={handleClick}
    >
        <img
          src={!imageError ? country.flag : UnkownFlag}
          alt='Flag Unavailable'
          style={{ maxWidth: '200px', maxHeight: '100px' }}
          onError={handleError}
        />
        <div>
          <h2>{country.name}</h2>
          <p>{country.iso2}</p>
        </div>
    </div>
  );
};

export default Card;

