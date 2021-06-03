function decrypt(data) {
  return "decrypted data";
}

function read() {
  return decrypt("data");
}

module.exports = {
  // read: read
  read,
};

/*

Few other ways ↓

module.exports.read = read // If exporting function with same name
module.exports.requestRead = read // If exporting function with different name

or directly,

exports.read = read
exports.requestRead = read

or even better,

exports.read() {
    return decrypt("data")
}

*/
