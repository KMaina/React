import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from '../pages/Home';

class App extends Component {
    render() { 
        return (
            <BrowserRouter>
            <Route exact path='/' component={Home} />
            {/* <Route path='/info' component={} /> */}
            </BrowserRouter>
        );
    }
}
 
export default App;
