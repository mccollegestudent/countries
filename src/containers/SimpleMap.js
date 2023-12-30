import React from "react";

const SimpleMap= () => {
  const mapStyle = {
    minWidth: "600px",
    minHeight: "400px",
    border: "1px solid #ccc",
    borderRadius: '5px'
  };

  return (
    <div>
      <iframe
        title="America Map"
        className="min-w-600-l min-h-400 outline br2"
        // style={mapStyle}
        frameborder="0"
        src={`https://www.google.com/maps/embed/v1/place?key=${process.env.REACT_APP_MAPS_API_KEY}&q=United+States`}
        allowfullscreen
      ></iframe>
    </div>
  );
};
export default SimpleMap;