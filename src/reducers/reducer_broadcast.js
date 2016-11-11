import { FETCH_BROADCASTS } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
  case FETCH_BROADCASTS:
    return [ action.payload.data, ...state ];
  }
  return state;
}
