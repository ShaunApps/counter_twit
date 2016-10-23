import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import SearchBar from './containers/search_bar';
import AssetList from './containers/asset_list.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchBar />
        <AssetList />
      </div>
    );
  }
}

export default App;
