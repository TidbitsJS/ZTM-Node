/*

require by default look for these extensions chronologically -
    1. '.js'
    2. '.json'
    3. '.node'

*/

const { send } = require("./request"); // ES6 destructuring
const { read } = require("./response");

/*

Just another way of doing same thing ↓

const response = require('./response')
const request = require('./request')

response.send()
request.read() 


*/

function makeRequest(url, data) {
  send(url, data);
  return read();
}

const responseData = makeRequest("https:www.google.com", "Hello");
console.log(responseData);
