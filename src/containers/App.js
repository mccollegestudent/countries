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
            searchBy:''
        }    
    }

    componentDidMount(){
        fetch('https://countriesnow.space/api/v0.1/countries/flag/images')
            .then(response=>response.json())
            .then(county=> {this.setState({countries: county.data})})
    }


    onSearchChange = (event) => { 
        this.setState({searchfield: event.target.value})

    }

    onSelectChange = (event) => {
        this.setState({searchBy: event.target.value})
    }



    render(){   
        const {searchfield, countries, searchBy} = this.state;
        
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
                <CountryInfo/>
                {/* <SearchBox searchfield={this.searchfield} searchChange={this.onSearchChange} handleSelectChange={this.onSelectChange}/>
                <Scroll>
                    <ErrorBoundary>
                        <CardList countries = {filteredCountries}/>
                    </ErrorBoundary>
        
                </Scroll> */}

            </div>
        )

    }
}

export default App;

