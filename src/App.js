import React, { Component } from 'react';
import { Jumbotron, Button } from 'react-bootstrap';
import logo from './logo.svg';
import './App.css';
import '.././style/counter.css';

import NAVBAR from './components/navbar';
import SearchAsset from './components/search_asset';
import FOOTER from './components/footer';




class App extends Component {
  render() {
    return (
      <div className="App">
        <NAVBAR />
        <div className="Main">
          <div className="container">
            {this.props.children}
          </div>
        </div>
        <FOOTER />
      </div>
    );
  }
}

export default App;
