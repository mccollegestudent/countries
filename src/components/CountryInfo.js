import React, {  useState, useEffect  } from'react';
import SimpleMap from '../containers/SimpleMap';
import TableCountryStats from './TableCountryStats';
import CountryDetails from './CountryDetails';

async function getResponce(searchEndpoint) {
  try { 
    const response = await fetch(searchEndpoint);

    if (!response.ok) {
      throw new Error(`Failed to fetch data from Wiki. Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching country history:', error);
    return null;
  }
}


const CountryInfo = ({country, back}) => {
  const countryName = country.name;
  const [searchedData, setSearchedData] = useState([]);
  const [searchInfo, setSearchInfo] = useState([]);
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const searchEndpoint = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=${countryName}`;
        const briefCountryInfoRes = await getResponce(searchEndpoint);
        setSearchedData(briefCountryInfoRes.query.search);
        setSearchInfo(briefCountryInfoRes.query.searchinfo)


      } catch (error) {
        console.error('Error fetching country info:', error);
      }
    };

    fetchData();
  }, [countryName]);


  const firstEntry = searchedData[0];
  // console.log(wikiMediaUrl);
  // console.log(cityPopulation);
    return(
        <div className='flex flex-column bg-navy o-72 ma2 pa2 vh-100 w-100 br2'>
            <div className='flex flex-column flex-row-l outline min-w-10 pa3 '> 
                <button className='light-red bg-purple br3 f39 fw90 dib grow bw2 shadow-5 pa3 pointer  h-10' onClick={back} > Back</button>
                <div className='flex flex-column pa3'>
                  <h1 className='f90 blue'>{country.name}</h1>

                  {firstEntry && !(firstEntry.snippet === 'undefined') ? (
                    <div>
                      <p className='min-w-20 max-w-20 fw9 light-red pa3' dangerouslySetInnerHTML={{ __html: firstEntry.snippet }}></p>
                      <a
                        className='tc flex justify-center dark-orange bg-yellow grow growoutline w-25 pa3 ml3'
                        href={`https://en.wikipedia.org/?curid=${firstEntry.pageid}`}
                        target='__blank'
                        rel='nofollow'
                      >
                        Read More
                      </a>
                    </div>
                  ) : (
                    <p></p>
                  )}
                </div>
                <div className='flex flex-column pa2'>
                    <img 
                        className='min-w-20 max-w-20 br3'
                        src={country.flag} 
                        alt='flag'/>
                    
                </div>
            </div>

            <div className='flex flex-column flex-row-l min-w-10 pa3 '> 
                <SimpleMap country = {country}/>
                {/* <TableCountryStats cityPopData = {cityPopulation}/> */}
                <CountryDetails country = {country}/>

    
            </div>
    </div>
    )
}

export default CountryInfo;

