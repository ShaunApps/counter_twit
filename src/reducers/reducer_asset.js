// Reducers for assets. Functions at bottom are examples from Redux documentations - these
// help with updating and changing state of individual 'items' in the application.

import { FETCH_ASSET } from '../actions/index';
import { REMOVE_ASSET } from '../actions/index';
import { FETCH_ASSET_PRICE } from '../actions/index';

// set up initial state of assets
const initial_state = { assets: [] };



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

  // ***** make sure reducer is returning new state ****
  case FETCH_ASSET_PRICE:
    const price_in_xcp = action.payload.data.result[0].price_in_xcp;
    const assetToUpdate = action.payload.data.result[0].asset;
    const updatedAssetwithXCPPrice = updateAssetInArray(state.assets, assetToUpdate, asset => {
                                  return updateObject(asset, {xcp_price: price_in_xcp} );
    });

    return updateObject(state, { assets: updatedAssetwithXCPPrice });



  default:
    return state;
  }
}

function updateObject(oldObject, newValues) {
    // Encapsulate the idea of passing a new object as the first parameter
    // to Object.assign to ensure we correctly copy data instead of mutating
    return Object.assign({}, oldObject, newValues);
}


function updateAssetInArray(array, assetName, updateAssetCallback) {
    const updatedAssets = array.map(asset => {
        if(asset.name !== assetName) {
            // Since we only want to update one asset, preserve all others as they are now
            return asset;
        }
        // Use the provided callback to create an updated item
        const updatedAsset = updateAssetCallback(asset);
        console.log("updated asset: " + updatedAsset);
        return updatedAsset;
    });

    return updatedAssets;
}
