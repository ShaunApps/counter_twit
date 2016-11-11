import axios from 'axios';

const ROOT_URL = "http://xcp.blockscan.com/api2?module=asset&action=info";
const BROADCAST_URL = "http://xcp.blockscan.com/api2?module=broadcast&action=list&page=1&count=10";

export const FETCH_ASSET = 'FETCH_ASSET';
export const FETCH_BROADCASTS = 'FETCH_BROADCASTS';




export function fetchAsset(name) {
  const url = `${ROOT_URL}&name=${name}`;
  const request = axios.get(url);

  return {
    type: FETCH_ASSET,
    payload: request
  };
}


export function fetchBroadcasts() {
  const broadcast_request = axios.get(BROADCAST_URL);

  return {
    type: FETCH_BROADCASTS,
    paylod: broadcast_request
  };
}
