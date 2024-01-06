import React from 'react';



const CIBriefStats = ({location, currencies, capital, country}) => {

  const handleTextClick = (name) => {
    const wikipediaLink = `https://en.wikipedia.org/wiki/${name}`;
    window.open(wikipediaLink, '_blank');
  };

  const labelStyle = { color: 'white' };
  const valueStyle = { color: 'orange' };
  const divStyle = { width: '100%', height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', cursor:'pointer' };



  return (
    <div className='min-w-20 max-w-20 fw7 yellow pa3' style={divStyle}>
      <p style={labelStyle}>Long: <span style={valueStyle}>{location.long} </span> Lat: <span style={valueStyle}>{location.lat}</span></p>
      <p style={labelStyle} onClick={() => handleTextClick(capital.capital)}>Capital: <span style={valueStyle}>{capital.capital}</span></p>
      <p style={labelStyle}>Currencies: <span style={valueStyle}>{currencies.currency}</span></p>
    </div>
  );
};

export default CIBriefStats;
