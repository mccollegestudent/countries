import React from 'react';
import './Card.css';

const Card = ({ country, selectedCountry}) => {
  const handleClick = () => {
    selectedCountry(country);
  };

  return (
    <div
      className='card tc o-100 dib br4 pa3 ma2 grow bw2 shadow-5 pointer shadow-hover focus-outline'
      onClick={handleClick}
    >
      <img
        src={country.flag}
        alt='Flag Unavailable'
        style={{ maxWidth: '200px', maxHeight: '100px' }}
      />
      <div>
        <h2>{country.name}</h2>
        <p>{country.iso2}</p>
      </div>
    </div>
  );
};

export default Card;
