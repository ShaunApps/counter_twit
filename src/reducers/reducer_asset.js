import { FETCH_ASSET } from '../actions/index';
import { FETCH_ADDRESS } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
  case FETCH_ASSET:
    console.log(action.payload.data.result[0]);
    return [ action.payload.data.result[0], ...state ];
  }
  return state;
}
