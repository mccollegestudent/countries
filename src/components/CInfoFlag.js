import React from 'react';

const CInfoFlag = ({flag}) => {
    return(
        <div className='flex flex-column pa2' >
            <img 
                className='min-w-20 max-w-20 br3'
                src={flag} 
                alt='flag'
            /> 
        </div>
    )
}
export default CInfoFlag;