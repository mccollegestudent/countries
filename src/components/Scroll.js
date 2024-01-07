import React from 'react';

const Scroll = (props) => {
    return (
        <div  className='shadow-hover focus-outline' style={{overflowY: 'scroll', padding:'40px', border: '0px solid black', height: '75vh', backgroundColor: 'rgba(0, 0, 0, 0.7)'}}>
            {props.children}
        </div>
    );

};

export default Scroll;