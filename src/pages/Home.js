import React, { Component } from 'react';
import Button from '../components/Button';

class Home extends Component {

    onClickHandler = () => {
        console.log('clicked')
    };

    render() { 
        return ( <div><div>Welcome Home</div><Button type='submit' text='Click Me' onClick={this.onClickHandler} /></div> );
    }
}
 
export default Home;
