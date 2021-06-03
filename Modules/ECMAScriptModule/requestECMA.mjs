const REQUEST_TIMEOUT = 500;

function encrypt(data) {
  return "encrypted data";
}

function send(url, data) {
  const encryptedData = encrypt(data);
  console.log(`Sending ${encryptedData} to ${url}`);
}

// ECMAScript module standards
export { send, REQUEST_TIMEOUT };
