import { useEffect, useState } from 'react';

export const stdWikiSearch = (query) => {
  const wikipediaLink = `https://en.wikipedia.org/wiki/${query}`;
  window.open(wikipediaLink, '_blank');
};

export const EndpointFlagUrl = (countryName) => {
  const [flagUrl, setflagUrl] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      try {
        const flagUrlResponse = await fetch(`https://countriesnow.space/api/v0.1/countries/flag/images/q?country=${countryName}`);
        const flagUrlData = await flagUrlResponse.json();
        setflagUrl(flagUrlData.data.flag);
      } catch (error) {
        console.error('Error fetching flag data', error);
      }
    };

    fetchData();
  },[]);

  return {
    flagUrl
  }
}

export const EndpointsCountryData = (country) => {
  const countryName = country.name;
  const [population, setPopulation] = useState([]);
  const [location, setLocation] = useState({});
  const [currencies, setCurrencies] = useState({});
  const [capital, setCapital] = useState({});
  const [states, setStates] = useState([]);
  const [wikiSearchData, setWikiSearchData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const populationResponse = await fetch(`https://countriesnow.space/api/v0.1/countries/population/q?country=${countryName}`);
        const populationData = await populationResponse.json();
        setPopulation(populationData.data.populationCounts);
      } catch (error) {
        console.error('Error fetching population data', error);
      }

      try {
        const locationResponse = await fetch(`https://countriesnow.space/api/v0.1/countries/positions/q?country=${countryName}`);
        const locationData = await locationResponse.json();
        setLocation(locationData.data);
      } catch (error) {
        console.error('Error fetching location data', error);
      }

      try {
        const currenciesResponse = await fetch(`https://countriesnow.space/api/v0.1/countries/currency/q?country=${countryName}`);
        const currenciesData = await currenciesResponse.json();
        setCurrencies(currenciesData.data);
      } catch (error) {
        console.error('Error fetching currency data', error);
      }

      try {
        const capitalResponse = await fetch(`https://countriesnow.space/api/v0.1/countries/capital/q?country=${countryName}`);
        const capitalData = await capitalResponse.json();
        setCapital(capitalData.data);
      } catch (error) {
        console.error('Error fetching capital data', error);
      }

      try {
        const statesResponse = await fetch(`https://countriesnow.space/api/v0.1/countries/states/q?country=${countryName}`);
        const statesData = await statesResponse.json();

        setStates(statesData.data.states);
        
      } catch (error) {
        console.error('Error fetching states data', error);
      }


      try {
        const briefCountryInfoRes = await fetch(`https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=${countryName}`);
        const briefCountryInfoResData = await briefCountryInfoRes.json();
        setWikiSearchData(briefCountryInfoResData.query.search);
      } catch (error) {
        console.error('Error fetching Wikipedia data', error);
      }

    };

    fetchData();
  },[]);

  return {
    population,
    location,
    currencies,
    capital,
    states,
    wikiSearchData
  };
};


