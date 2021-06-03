// Loading request module
const { send } = require("./Create-Module/request");

console.log(`Cache check after send function loading`);
console.log(require.cache);

const { read } = require("./Create-Module/response");

// Loading request module again.
const { REQUEST_TIMEOUT } = require("./Create-Module/request");

console.log(`Cache check after REQUEST_TIMEOUT loading`);
console.log(require.cache);

// Even after trying to load request module twice here,
// the console.log(module) in request file will be logged only once.
// This happens cause of the cache mechanism of node

function makeRequest(url, data) {
  send(url, data);
  return read();
}

const responseData = makeRequest("https:www.google.com", "Hello World");

setTimeout(() => {
  console.log(responseData);
}, REQUEST_TIMEOUT);

// Check cached modules
console.log(require.cache);

// Logging before and after loading `send` & `REQUEST_TIMEOUT` will clear that,
// the complete `request` module with alll its exports gets cached by node,
// even though the `send` function & `REQUEST_TIMEOUT` variable has been loaded separately
