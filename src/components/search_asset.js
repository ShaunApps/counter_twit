import React, { Component } from 'react';

import SearchBar from '.././containers/search_bar';
import AssetList from '.././containers/asset_list.js';




class SearchAsset extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <AssetList />
        {this.props.children}
      </div>
    );
  }
}

export default SearchAsset;
