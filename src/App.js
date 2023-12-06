import React, {Component} from 'react';
import CardList from './CardList'
import SearchBox from './SearchBox'
import {robots} from './robots'


class App extends Component {
    constructor (){
        super()
        this.state = {
            robots: robots,
            searchfield: ''
        }    
    }

    onSearchChange = (event) => { 
        this.setState({searchfield: event.target.value})

    }

    render(){   //since its an object you have to say this
        const filteredRobots = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        });
        console.log(filteredRobots);

        return (
            <div className='tc'>
                <h1>Robofriends</h1>
                <SearchBox searchfield={this.searchfield} searchChange={this.onSearchChange}/>
                <CardList robots = {filteredRobots}/>
            </div>

        )
    }
}

export default App;

