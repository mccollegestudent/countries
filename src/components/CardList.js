import React from 'react'
import Card from './Card'

const CardList = ({countries}) => {
    return (
<div>
{
  countries.map((user, i) => {
    return (
      <Card
        key={i} 
        iso2={countries[i].iso2} 
        name={countries[i].name} 
        flag={countries[i].flag}
      />
    );
  })
}
</div>
);
}
export default CardList;