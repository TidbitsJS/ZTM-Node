// To execute ECMAScript Module import/export standards, the file convention should be .mjs instead of .js
// & it should be explicitly runned as > node httpsECMA.mjs

import { send, REQUEST_TIMEOUT } from "./requestECMA.mjs";
import { read } from "./responseECMA.mjs";

function makeRequest(url, data) {
  send(url, data);
  return read();
}

const responseData = makeRequest("https:www.google.com", "Hello");

setTimeout(() => {
  console.log(responseData);
}, REQUEST_TIMEOUT);
