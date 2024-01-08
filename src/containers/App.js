import React, {Component} from 'react';
import CountryList from '../components/CountryList'
import SearchBox from '../components/SearchBox'
import ErrorBoundary from '../components/ErrorBoundry';
import '../index.css';
import './App.css';
import Scroll from '../components/Scroll';
import CountryInfo from '../components/CountryInfo';
import VideoBackground from '../components/VideoBackground';
import Cultures from './assets/Cultures.mp4';




class App extends Component {
    constructor (){
        super()
        this.state = {
            searchfield: '',
            countries:[],
            searchBy:'name',
            showCountryInfo: false,
            selectedCountry: {}
        }    
    }

    componentDidMount() {
        try {
          fetch('https://countriesnow.space/api/v0.1/countries/flag/unicode') //countries
            .then(response => response.json())
            .then(countryData => {
              fetch('https://countriesnow.space/api/v0.1/countries/flag/images')//country flags
                .then(response => response.json())
                .then(flagData => {
                  const updatedCountries = countryData.data.map(country => ({
                    ...country,
                    flag: flagData.data.find(flag => flag.name === country.name)?.flag || ''
                  }));
                  this.setState({ countries: updatedCountries });
                })
                .catch(error => {
                //   console.error('Error fetching country flag urls', error);
                });
            })
            .catch(error => {
            //   console.error('Error fetching countries', error);
            });
        } catch (error) {
          console.log("Country Profile Data");
        }
      }
      


    onSearchChange = (event) => { 
        this.setState({searchfield: event.target.value});
    }

    onSelectChange = (event) => {
        this.setState({searchBy: event.target.value});
    }

    onSelectedCountry = (value) => {
        this.setState({selectedCountry: value});
        this.setState({ showCountryInfo: true});
       
    }

    onMainPage = () => {
        this.setState({ showCountryInfo: false});
        this.setState({searchfield: ""});
     
    }

    render(){  
 
        const {searchfield, countries, searchBy, showCountryInfo, selectedCountry} = this.state;

        if (showCountryInfo) {
            return <CountryInfo country={selectedCountry} back={this.onMainPage} />;
        }
        
        const filteredCountries = countries.filter(country => {
            return (searchBy === 'name') ? 
            country.name.toLowerCase().includes(searchfield.toLowerCase()):
            country.iso2.toLowerCase().includes(searchfield.toLowerCase());
         
        })

        return (!countries.length) ?
        <h1>Loading</h1> :
        (
            <VideoBackground videoSource={Cultures}>   
                <div className='tc'>
                    <h1 className= 'items-start f2 bg-navy pa2 o-90 shadow-hover focus-outline'>countries</h1>
                    <SearchBox searchfield={searchfield} searchChange={this.onSearchChange} handleSelectChange={this.onSelectChange}/>
                    <Scroll>
                        <ErrorBoundary>
                            <CountryList countries = {filteredCountries} selectedCountry={this.onSelectedCountry}/>
                        </ErrorBoundary>
                    </Scroll>                                                       
                </div>
            </VideoBackground>          
        )

    }
}

export default App;

