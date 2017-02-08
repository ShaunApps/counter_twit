import axios from 'axios';

const ASSET_ROOT_URL = "http://xcp.blockscan.com/api2?module=asset&action=info";
const ADDRESS_ROOT_URL = "http://xcp.blockscan.com/api2?module=address&action=balance&btc_address="

export const FETCH_ASSET = 'FETCH_ASSET';
export const FETCH_ADDRESS = 'FETCH_ADDRESS';



export function fetchAsset(name) {
  const url = `${ASSET_ROOT_URL}&name=${name}`;
  const request = axios.get(url);

  return {
    type: FETCH_ASSET,
    payload: request
  };
}

export function fetchAddress(address) {
  const url = `${ADDRESS_ROOT_URL}""${address}`;
  const request = axios.get(url);

  return {
    type: FETCH_ADDRESS,
    payload: request
  };
}
