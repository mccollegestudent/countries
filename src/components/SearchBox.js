import React from 'react';  

const SearchBox = ({searchChange, handleSelectChange}) => {
    return(
        <div className='pa2 ma4' >  
            <input
                className='input-box pa3 ba b--blue bg-lightest-blue w-50 br3'
                type='search'
                placeholder='search country'
                onChange={searchChange}
            />
            <select 
                className="ml2 pa3 ba b--orange bg-lightest-orange w-5 br3 pointer"
                onChange={handleSelectChange}
            >
                    <option className="pa3" value="name">Search by Name</option>
                    <option className="pa3" value="iso2">Search by ISO</option>
            </select>
        </div>
    )
}
export default SearchBox;
