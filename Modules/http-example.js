const http = require("http");

// get the data from google
const req = http.request("http://www.google.com", (res) => {
  // Event emitter
  res.on("data", (chunk) => {
    console.log(`Data chunk: ${chunk}`);
  });

  // Event emitter that executes when there is no more data
  res.on("end", () => {
    console.log("No more data");
  });
});

// Finishes sending the request
req.end();

// https protocol
const https = require("https");

/*

With ES6 Destructuring syntax ↓

const { request } = require("https")

const httpsReq = request("https://www.google.com", (res) => {})

*/

const httpsReq = https.request("https://www.google.com", (res) => {
  res.on("data", (chunk) => {
    console.log(`HTTPS data chunk: ${chunk}`);
  });

  res.on("end", () => {
    console.log("No more data");
  });
});

// With `request()` one must always call `req.end()` ( httpsReq.end() in this case ) to signify the end of request - even if there is no data being written to the request body
httpsReq.end();

// Yet another Alternative approach, only when receiving something i.e. getting data from a network

const { get } = require("https");

// The only difference between `get` method and `request` is that it sets the method to GET and calls `req.end()` automatically.

get("https://www.google.com", (res) => {
  res.on("data", (chunk) => {
    console.log(`HTTPS get data chunk: ${chunk}`);
  });

  res.on("end", () => {
    console.log("No more data");
  });
});

// That's it ! No need of req.end() while using `get` method
