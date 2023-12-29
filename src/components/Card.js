import React from 'react'
const Card = ({iso2, name, flag}) => {
    return(
        <div className='card tc bg-light-yellow o-85 dib br3 pa3 ma2 grow bw2 shadow-5'> 
            <img
              src={flag}
              alt={`Flag unavailable`}
              style={{ maxWidth: '200px', maxHeight: '100px' }} 
            />
            <div>
                <h2>{name}</h2>
                <p>{iso2}</p>
            </div>    
        </div>
    )
}

export default Card;