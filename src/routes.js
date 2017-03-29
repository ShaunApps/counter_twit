import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './App';
import AddressInfo from './containers/address_info';
import SearchAsset from './components/search_asset';



export default (
<Route path="/" component={App}>
  <Route path="search" component={SearchAsset} />
</Route>
);
