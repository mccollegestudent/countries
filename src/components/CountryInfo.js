import React from'react';
import CIPopulationGraph from './CIPopulationGraph';
import CIBriefStats from './CIBriefStats';
import CInfoFlag from './CInfoFlag';
import CIBriefInfo from './CIBriefInfo';
import PieChartC from '../containers/PieChartC';
import {EndpointsCountryData} from './EndpointsCountryData';

import '../containers/App.css'

const CountryInfo = ({country, back}) => {
    const { population,location,currencies,capital,states,wikiSearchData } = EndpointsCountryData(country);

    return(
        <div className='br1'> 
            <div className='flex flex-column o-72 h-100 w-100 br2 ma1'> 
                <div className='flex flex-column flex-row-l bg-navy min-w-10 pa3 br2 shadow-hover focus-outline'> 
                    <button className='light-red bg-purple br3 f39 fw90 dib grow bw2 shadow-5 pa3 pointer h-10' onClick={back} > Back</button>
                    <CIBriefInfo country={country}  wikiSearchData={ wikiSearchData}/>
                    <CInfoFlag flag={country.flag}/>
                </div>
                <div className='flex flex-column flex-row-l ma1 pa4 min-w-50 items-center justify-center br2 shadow-hover focus-outline'  
                    style={{ backgroundColor: 'rgba(255, 255, 255, 0.15)'}}
                > 
                    <CIBriefStats country={country} location={location} currencies={currencies} capital={capital} states={states} />        
                    <CIPopulationGraph  population={ population} />  
                </div>
            </div>
            <div className='flex flex-column flex-row-l ma2 pa2 vh-100 br2 shadow-hover focus-outline'>      
                <PieChartC country={country} states={states} />
            </div>
        </div>
    )
}

export default CountryInfo;

