import React from'react';
import SimpleMap from '../containers/SimpleMap';
import CIPopulationGraph from './CIPopulationGraph';
import CIBriefStats from './CIBriefStats';
import CInfoFlag from './CInfoFlag';
import CIBriefInfo from './CIBriefInfo';
import PieChartC from './PieChartC';
import EndpointsCountryData from './EndpointsCountryData';

const CountryInfo = ({country, back}) => {
    const { population,location,currencies,capital,cities,states,wikiSearchData } = EndpointsCountryData(country);

    return(
        <div className='flex flex-column o-72 ma2 pa3 vh-100 w-100 br2'>
            <div className='flex flex-column flex-row-l bg-navy outline min-w-10 pa3 '> 
                <button className='light-red bg-purple br3 f39 fw90 dib grow bw2 shadow-5 pa3 pointer h-10' onClick={back} > Back</button>
                <CIBriefInfo country={country}  wikiSearchData={ wikiSearchData}/>
                <CInfoFlag flag={country.flag}/>
            </div>
            <div className='flex flex-column flex-row-l bg-black min-w-10 pa3 '> 
                <SimpleMap country = {country}/>
                <CIPopulationGraph  population={ population} />  
       
            </div>
            <div className='flex flex-column flex-row-l bg-black min-w-10 pa3 '>
                <CIBriefStats country={country} location={location} currencies={currencies} capital={capital} cities={cities} states={states} />
                <PieChartC country={country} cities={cities} states={states}/>
            </div>
        </div>
    )
}

export default CountryInfo;

