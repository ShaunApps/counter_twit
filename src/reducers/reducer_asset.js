import { FETCH_ASSET } from '../actions/index';
import { REMOVE_ASSET } from '../actions/index';
import { FETCH_ASSET_PRICE } from '../actions/index';

// set up initial state of assets
const initial_state = { assets: [] };

function updateObject(oldObject, newValues) {
    // Encapsulate the idea of passing a new object as the first parameter
    // to Object.assign to ensure we correctly copy data instead of mutating
    return Object.assign({}, oldObject, newValues);
}

export default function(state = initial_state, action) {
  switch (action.type) {
  case FETCH_ASSET:
    const returnedAsset = action.payload.data.result[0];
    const newAssets = state.assets.concat({
          name: returnedAsset.asset,
          issuer: returnedAsset.issuer,
          owner: returnedAsset.owner,
          description: returnedAsset.description,
          divisible: returnedAsset.divisible.toString(),
          circulation: returnedAsset.supply
    });
    return updateObject(state, {assets: newAssets});

  case REMOVE_ASSET:
    const nameID = action.payload;
    const removedAssetState = state.assets.filter(item => item.name !== nameID);
    return updateObject(state, { assets: removedAssetState});

  case FETCH_ASSET_PRICE:
    console.log(action.payload.data.result[0].price_in_xcp);

  default:
    return state;
  }

}
