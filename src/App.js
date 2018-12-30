import React, { Component } from 'react';
import './App.css';
import "react-router";
import {
  BrowserRouter,
  Route,
  Link
} from 'react-router-dom';

import Home from './Components/Home';
import About from './Components/About';
import Cart from './Components/Cart';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/cart">My Cart</Link></li>
          </ul>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/cart" component={Cart}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
