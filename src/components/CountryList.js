import React from 'react';
import Country from './Country';

const CountryList = ({ countries, selectedCountry }) => {
  return (
    <div>
      {countries.map((c, i) => {
        return (
          <Country
            key={i}
            country={c}
            selectedCountry={selectedCountry}
          />
        );
      })}
    </div>
  );
};

export default CountryList;
