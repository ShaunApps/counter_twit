import axios from 'axios';

const ROOT_URL = "http://xcp.blockscan.com/api2?module=asset&action=info";

export const FETCH_ASSET = 'FETCH_ASSET';

export function fetchAsset(name) {
  const url = `${ROOT_URL}&name=${name}`;
  const request = axios.get(url);

  return {
    type: FETCH_ASSET,
    payload: request
  };
}
