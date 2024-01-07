import React from 'react';
import Card from './Card';

const CardList = ({ countries, selectedCountry }) => {
  return (
    <div>
      {countries.map((c, i) => {
        return (
          <Card
            key={i}
            country={c}
            selectedCountry={selectedCountry}
          />
        );
      })}
    </div>
  );
};

export default CardList;
