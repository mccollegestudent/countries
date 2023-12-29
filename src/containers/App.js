import React, {Component} from 'react';
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox'
import ErrorBoundary from '../components/ErrorBoundry';
import '../index.css';
import './App.css';
import Scroll from '../components/Scroll';
import FlagDisplay from '../containers/FlagDisplay';

class App extends Component {
    constructor (){
        super()
        this.state = {
            robots: [],
            searchfield: '',
            countries:[]
        }    
    }

    // componentDidMount(){
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //         .then(response=>response.json())
    //         .then(users=> {this.setState({robots: users})})
    // }
    componentDidMount(){
        fetch('https://countriesnow.space/api/v0.1/countries/flag/images')
            .then(response=>response.json())
            .then(county=> {this.setState({countries: county.data})})
    }


    onSearchChange = (event) => { 
        this.setState({searchfield: event.target.value})

    }

    render(){   
        const {robots, searchfield, countries} = this.state;
        const filteredCountries = countries.filter(country => {
            return country.name.toLowerCase().includes(searchfield.toLowerCase());
         
        })

        return (!countries.length) ?
        <h1>Loading</h1> :
        (
            
            <div className='tc'>
                <h1 className= 'f2'>countries</h1>
                <SearchBox searchfield={this.searchfield} searchChange={this.onSearchChange}/>
                <Scroll>
                    <ErrorBoundary>
                    <CardList countries = {filteredCountries}/>
                    </ErrorBoundary>
        
                </Scroll>

            </div>
        )

    }
}

export default App;

