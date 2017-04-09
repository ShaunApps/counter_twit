import axios from 'axios';


// get asset price from DEX
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
