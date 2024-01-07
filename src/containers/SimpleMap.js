import React from "react";

const SimpleMap= ({country}) => {
  const mapStyle = {
    border: "1px solid #ccc",
    borderRadius: '5px',
    display: 'flex', 
    justifyContent: 'center',
    alignItems: 'center',
    width:'100%',
    height:'100%'
  };
  const countryName = (country.name.trim()).replace(/ /g, '+');
  return (
    
    <div style={{minWidth: '40%', height:'300px', alignItems: 'center', justifyContent: 'center' }}>
      <iframe
        title={`${country.name}`}
        className="br2 grow"  
        style={mapStyle}
        frameBorder="0"
        src={`https://www.google.com/maps/embed/v1/place?key=${process.env.REACT_APP_MAPS_API_KEY}&zoom=5&q=${countryName}`}
        allowFullScreen
      ></iframe>
    </div>
  );
};
export default SimpleMap;