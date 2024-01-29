import React from "react";

const SimpleMap = ({ country }) => {
  return (
    <div className="w-40-l w-100 flex pa2 items-center justify-center min-h-300 bg-orange o-75 br3 shadow-hover focus-outline">
      <iframe
        title={country.name}
        className="br3 grow shadow-hover focus-inline"
        style={{ border: "1px solid #ccc", borderRadius: '5px', width: '100%', height: '100%' }}
        frameBorder="0"
        src={`https://www.google.com/maps/embed/v1/place?key=${process.env.REACT_APP_MAPS_API_KEY}&zoom=5&q=${encodeURIComponent(country.name.trim())}`}
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default SimpleMap;