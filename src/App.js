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

    onSearchChange(event){ //want this func to trigger everytime there is a change
        console.log(event.target.value);

    }

    render(){   //since its an object you have to say this.
        return (
            <div className='tc'>
                <h1>Robofriends</h1>
                <SearchBox searchfield={this.searchfield} searchChange={this.onSearchChange}/>
                <CardList robots = {this.state.robots}/>
            </div>

        )
    }
}

export default App;

