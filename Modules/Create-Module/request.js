const REQUEST_TIMEOUT = 500;

function encrypt(data) {
  return "encrypted data";
}

function send(url, data) {
  const encryptedData = encrypt(data);
  console.log(`Sending ${encryptedData} to ${url}`);
}

module.exports = {
  // send: send
  // requestSend: send, // if exporting function with different name
  send, // if exporting function with same name
  REQUEST_TIMEOUT, // variable exporting
};

console.log(module);

/*

if,

module.exports = {
    requestSend: send
}

then,

const { requestSend } = require(request)

*/
