import axios from 'axios';

// url for getting a specific asset's information
const ASSET_ROOT_URL = "http://xcp.blockscan.com/api2?module=asset&action=info";

// url for getting a specific address' information
const ADDRESS_ROOT_URL = "http://xcp.blockscan.com/api2?module=address&action=balance&btc_address="

export const FETCH_ASSET = 'FETCH_ASSET';
export const FETCH_ADDRESS = 'FETCH_ADDRESS';



export function fetchAsset(name) {
  const url = `${ASSET_ROOT_URL}&name=${name}`;
  const request = axios({
    method: 'post',
    url: 'http://public.coindaddy.io:4000/api/',
    headers: {'content-type': 'application/json-rpc'},
    auth: {username: 'rpc', password: '1234'},
    data: JSON.stringify({
        "method": "get_assets",
        "params": {
             "filters": [{"field": "asset_name", "op": "==", "value": name}]
        },
        "jsonrpc": "2.0",
        "id": 0 })
    });

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




// request({
//       method: 'POST',
//       uri: 'http://public.coindaddy.io:4000/api/',
//       headers: {'content-type': 'application/json-rpc'},
//       auth: {'user': 'rpc', 'pass': '1234'},
//       body: JSON.stringify({
//             "method": "get_balances",
//             "params": {
//                 "filters": [{"field": "address", "op": "==", "value": address}]
//             },
//             "jsonrpc": "2.0",
//             "id": 0 }),
//
//     },
