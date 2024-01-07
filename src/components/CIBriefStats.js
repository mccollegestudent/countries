import React from 'react';

const CIBriefStats = ({ location, currencies, capital, country }) => {
  const handleTextClick = (name) => {
    const wikipediaLink = `https://en.wikipedia.org/wiki/${name}`;
    window.open(wikipediaLink, '_blank');
  };

  const labelStyle = { color: 'white' };
  const valueStyle = { color: 'orange' };
  const divStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    cursor: 'pointer',
  };

  return (
    <div className='fw7 bg-dark-blue br2 ' style={divStyle}> 
      <p style={labelStyle}>
        Long: <span style={valueStyle}>{location.long} </span> Lat: <span style={valueStyle}>{location.lat}</span>
      </p>
      <p style={labelStyle} onClick={() => handleTextClick(capital.capital)}>
        Capital: <span style={valueStyle}>{capital.capital}</span>
      </p>
      <p style={labelStyle}>
        Currencies: <span style={valueStyle}>{currencies.currency}</span>
      </p>
    </div>
  );
};

export default CIBriefStats;
