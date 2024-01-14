import React from 'react';
import { stdWikiSearch } from './EndpointsCountryData';

const CIBriefStats = ({ location, currencies, capital }) => {
  const handleTextClick = (query) => {
    stdWikiSearch(query);
  };

  const isDataAvailable = location && currencies && capital;
  return (
<div className='h-100 w-100 fw7 bg-dark-blue br2 flex flex-column items-center justify-center pointer'>
      {isDataAvailable ? (
        <>
          <p className='white'>
            Long: <span className='yellow'>{location.long}</span> Lat: <span className='yellow'>{location.lat}</span>
          </p>
          <p className='white' onClick={() => handleTextClick(capital.capital)}>
            Capital: <span className='yellow'>{capital.capital}</span>
          </p>
          <p className='white'>
            Currencies: <span className='yellow'>{currencies.currency}</span>
          </p>
        </>
      ) : (

        <h1 className='tc flex items-center  justify-center ma3 br2 pa3' style={{ width: '90%', height: '500px' }}>
           No data available
         </h1>
      )}
    </div>
  );
};

export default CIBriefStats;
