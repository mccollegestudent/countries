import React from 'react'
import Card from './Card'

const CardList = ({ countries }) => {
  return (
    <div>
      {countries.map((country, i) => (
        <Card
          key={i}
          iso2={country.iso2}
          name={country.name}
          flag={country.flag}
        />
      ))}
    </div>
  );
};


export default CardList;