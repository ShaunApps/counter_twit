import { FETCH_ASSET } from '../actions/index';
import { REMOVE_ASSET } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
  case FETCH_ASSET:
    return [ ...state, action.payload.data.result[0]];
  case REMOVE_ASSET:
    const nameID = action.payload;
    return state.filter(item => item.asset !== nameID);
  default:
    return state;
  }

}
