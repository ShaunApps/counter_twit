import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './App';
import AddressInfo from './containers/address_info';
import SearchAsset from './components/search_asset';
import GraphData from './containers/graph_data';
import FiatData from './containers/fiat_data';



export default (
<Route path="/" component={App}>
  <Route path="search" component={SearchAsset} />
  <Route path="data" component={GraphData} />
  <Route path="fiat" component={FiatData} />
</Route>
);
