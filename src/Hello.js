import React, {Component} from 'react';

import './Hello.css';  //create css file

class Hello extends Component {
    render () {
        return (
            <div className="f1 tc"> 
                <h1>Hello World</h1>  
                <p>{this.props.greetings}</p>

            </div>  
        )
    }
}

export default Hello;

//f1 tc  is font 1 from tachyon