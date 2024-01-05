import { useEffect, useState } from 'react';
import * as React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import PieChartC from './PieChartC';


const CountryDetails = ({ country }) => {
  const countryName = country.name;
  const [population, setPopulation] = useState([]);
  const [location, setLocation] = useState({});
  const [currencies, setCurrencies] = useState({});
  const [capital, setCapital] = useState({});
  const [cities, setCities] = useState([]);
  const [states, setStates] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const populationResponse = await fetch(`https://countriesnow.space/api/v0.1/countries/population/q?country=${countryName}`);
        const locationResponse = await fetch(`https://countriesnow.space/api/v0.1/countries/positions/q?country=${countryName}`);
        const currenciesResponse = await fetch(`https://countriesnow.space/api/v0.1/countries/currency/q?country=${countryName}`);
        const capitalResponse = await fetch(`https://countriesnow.space/api/v0.1/countries/capital/q?country=${countryName}`);
        const citiesResponse = await fetch(`https://countriesnow.space/api/v0.1/countries/cities/q?country=${countryName}`);
        const statesResponse = await fetch(`https://countriesnow.space/api/v0.1/countries/states/q?country=${countryName}`);
        const populationData = await populationResponse.json();
        const locationData = await locationResponse.json();
        const currenciesData = await currenciesResponse.json();
        const capitalData = await capitalResponse.json();
        const citiesData = await citiesResponse.json();
        const statesData = await statesResponse.json();

        setPopulation(populationData.data.populationCounts); 
        setLocation(locationData.data);
        setCurrencies(currenciesData.data);
        setCapital(capitalData.data);
        setCities(citiesData.data);
        setStates(statesData.data.states[0].name);
      } catch (error) {
        console.error('Error fetching data from', error);
      }
    };

    fetchData();
  }, [countryName]);

    const data = [
        { name: 'Group A', value: 400 },
        { name: 'Group B', value: 300 },
        { name: 'Group C', value: 300 },
        { name: 'Group D', value: 200 },
        { name: 'Group E', value: 278 },
        { name: 'Group F', value: 189 },
    ];

  return (
    <div className='flex flex-column flex-row-l' style={{width:"100%", height:'100%'}}>
        <div  className='min-w-20 max-w-20 fw9 yellow pa3' style={{width:"50%" }}>
            <p>Capital: {capital.capital}</p>
            <p>long: {location.long} lat: {location.lat}</p>
            <p>Currencies: {currencies.currency}</p>

            <p>Cities: {cities[0]}</p>
            <p>States: {states}</p>
        </div>
        <div className='tc' style={{width:"100%", height:'300px' }}>
            <h2>Population</h2>
            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                    width={500}
                    height={300}
                    data={population}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                    <XAxis dataKey="year" />
                    <YAxis />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="value" stroke="#8884d8" activeDot={{ r: 8 }} />
                </LineChart>
            </ResponsiveContainer>
        </div>
{/* 
        <div className='tc' style={{width:"100%", height:'300' }}>
            <ResponsiveContainer width="100%" height="100%">
                    <PieChart width={400} height={400}>
                    <Pie
                        dataKey="value"
                        startAngle={180}
                        endAngle={0}
                        data={data}
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        fill="#8884d8"
                        label
                    />
                    </PieChart>
                </ResponsiveContainer>
        </div> */}

     
        <PieChartC />

        </div>
        


  );
};

export default CountryDetails;
