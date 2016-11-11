import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import '../style/counter.css';

import SearchBar from './containers/search_bar';
import AssetList from './containers/asset_list.js';
import BroadcastList from './containers/broadcast_list.js';


class App extends Component {
  render() {
    return (
      <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to Counterparty Thing</h2>
      </div>
      <div className="Main">
        <SearchBar />
        <AssetList />
        <BroadcastList />
      </div>
      </div>
    );
  }
}

export default App;
