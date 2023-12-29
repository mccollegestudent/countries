import React, { useState, useEffect } from 'react';

const FlagDisplay = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://countriesnow.space/api/v0.1/countries/flag/images'
        );
        const data = await response.json();
        setCountries(data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Country Flags</h1>
      <ul>
        {countries.slice(0, 5).map((country) => (
          <li key={country.iso2}>
            <img src={country.flag} alt={country.name} />
            {country.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FlagDisplay;
