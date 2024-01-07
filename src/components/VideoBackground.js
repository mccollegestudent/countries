import React from 'react';

const VideoBackground = ({ videoSource, children }) => {
  const divStyle ={ position: 'relative', overflow: 'hidden', width: '100%', height: '100vh', backgroundColor: 'rgba(0, 0, 0, 0.2)', opacity: 0.9 }
  return (
    <div style={divStyle} >
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      >
      <source src={videoSource} type="video/mp4" />
      </video>
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1 }}>
        {children}
      </div>
    </div>
  );
};

export default VideoBackground;
