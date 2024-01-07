import React from'react';
import SimpleMap from '../containers/SimpleMap';
import CIPopulationGraph from './CIPopulationGraph';
import CIBriefStats from './CIBriefStats';
import CInfoFlag from './CInfoFlag';
import CIBriefInfo from './CIBriefInfo';
import PieChartC from './PieChartC';
import EndpointsCountryData from './EndpointsCountryData';
import '../containers/App.css'

const CountryInfo = ({country, back}) => {
    const { population,location,currencies,capital,cities,states,wikiSearchData } = EndpointsCountryData(country);

    return(
        <div className='br1'> 
            <div className='flex flex-column o-72 pa3 h-100 w-100 br2 ma1 pa1'> 
                <div className='flex flex-column flex-row-l bg-navy min-w-10 pa3 br2 '> 
                    <button className='light-red bg-purple br3 f39 fw90 dib grow bw2 shadow-5 pa3 pointer h-10' onClick={back} > Back</button>
                    <CIBriefInfo country={country}  wikiSearchData={ wikiSearchData}/>
                    <CInfoFlag flag={country.flag}/>
                </div>
                <div  className='flex flex-column flex-row-l ma3 min-w-50' > 
                    <SimpleMap country = {country}/>
                    <CIPopulationGraph  population={ population} />  
        
                </div>
            </div>
            <div className='flex flex-column flex-row-l ma2 pa4 vh-100 br2'>
                <CIBriefStats country={country} location={location} currencies={currencies} capital={capital} cities={cities} states={states} />
                <PieChartC country={country} cities={cities} states={states} />
            </div>
        </div>
    )
}

export default CountryInfo;

