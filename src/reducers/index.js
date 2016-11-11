import { combineReducers } from 'redux';
import AssetReducer from './reducer_asset';
import BroadcastReducer from './reducer_broadcast';

const rootReducer = combineReducers({
  asset: AssetReducer,
  broadcast: BroadcastReducer
});

export default rootReducer;
