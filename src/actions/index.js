import axios from 'axios';

export const FETCH_ASSET = 'FETCH_ASSET';
export const REMOVE_ASSET = 'REMOVE_ASSET';

// fetch asset information from Counterblock API
export function fetchAsset(name) {
  const request = axios({
    method: 'post',
    url: 'http://public.coindaddy.io:4100/api/',
    headers: {'content-type': 'application/json-rpc'},
    data: JSON.stringify({
        "method": "get_assets_info",
        "params": {
          "assetsList": [name],
        },
        "jsonrpc": "2.0",
        "id": 0 })
    });

  return {
    type: FETCH_ASSET,
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
