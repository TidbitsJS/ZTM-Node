function getMessages(req, res) {
  // Content-Type will be set to 'text/html'
  res.send(
    "<ul><li>Hello, how are you?</li><li>Will you be my friend?</li></ul>"
  );
}

function postMessages(req, res) {
  // Content-Type will be set to 'text/html'
  res.send("Uploading messages...");
}

module.exports = {
  getMessages,
  postMessages,
};
