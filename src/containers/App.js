import React, {Component} from 'react';
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox'
import ErrorBoundary from '../components/ErrorBoundry';
import '../index.css';
import './App.css';
import Scroll from '../components/Scroll';
import CountryInfo from '../components/CountryInfo';


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

    componentDidMount(){
        fetch('https://countriesnow.space/api/v0.1/countries/flag/images')
            .then(response=>response.json())
            .then(county=> {this.setState({countries: county.data})})
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
            
            <div className='tc'>
                <h1 className= 'f2'>countries</h1>
                <SearchBox searchfield={searchfield} searchChange={this.onSearchChange} handleSelectChange={this.onSelectChange}/>
                <Scroll>
                    <ErrorBoundary>
                        <CardList countries = {filteredCountries} selectedCountry={this.onSelectedCountry}/>
                    </ErrorBoundary>
        
                </Scroll>

            </div>
        )

    }
}

export default App;

