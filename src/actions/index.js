import axios from 'axios';
import { getAssertInfo, getDEXPrice } from '.././helpers/asset_helper';

export const FETCH_ASSET = 'FETCH_ASSET';
export const REMOVE_ASSET = 'REMOVE_ASSET';
export const FETCH_ASSET_PRICE = 'FETCH_ASSET_PRICE';

// fetch asset information from Counterblock API
export function fetchAsset(name) {
  const request = getAssertInfo(name);

  return {
    type: FETCH_ASSET,
    payload: request
  };
}

export function fetchAssetPrice(name) {
  const request = getDEXPrice(name);

  return {
    type: FETCH_ASSET_PRICE,
    payload: request
  };
}

// remove asset information from state
export function removeAsset(asset) {

  return {
    type: REMOVE_ASSET,
    payload: asset
  };
}
