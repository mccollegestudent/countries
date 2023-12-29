import React from 'react'
const Card = ({iso2, name, flag}) => {
    
    return(
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'> 
            <img alt = 'flag unavailable' src={flag}
              style={{ maxWidth: '200px', maxHeight: '100px' }} />
            <div>
                <h2>{name}</h2>
                <p>{iso2}</p>
            </div>    
        </div>
    )
}

export default Card;