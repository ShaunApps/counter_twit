import axios from 'axios';

// get asset info from Counterblock
export function getAssertInfo(name) {
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
    return request;
}

// get asset price from Counterblock
export function getDEXPrice(name) {
  const request = axios({
    method: 'post',
    url: 'http://public.coindaddy.io:4100/api/',
    headers: {'content-type': 'application/json-rpc'},
    data: JSON.stringify({
        "method": "get_market_info",
        "params": {
          "assets": [name]
        },
        "jsonrpc": "2.0",
        "id": 0 })
    });
    return request;
  }
