import React from 'react';

const SearchBox = ({ searchChange, handleSelectChange }) => {
  return (
    <div className='pa2 ma1 w-51 b--blurred-border transition' style={{ backgroundColor: 'rgba(128, 60, 1, 0.15)'}}>
      <input
        className='input-box pa3 ba b--blue bg-white w-50 br4'
        type='search'
        placeholder='search country'
        onChange={searchChange}
      />
    <select
        className="ma2 pa3 ba f4 white b--blue bg-green  w-1 br4 pointer b--blurred-border transition"
        style={{ transition: 'background-color 0.5s ease' }}
        onChange={handleSelectChange}
    >
        <option value="name">Search by Name</option>
        <option value="iso2">Search by ISO</option>
    </select>

    </div>
  );
};

export default SearchBox;
