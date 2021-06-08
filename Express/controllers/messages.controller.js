const path = require("path");

function getMessages(req, res) {
  /*
    // Content-Type will be set to 'text/html'
    res.send(
        "<ul><li>Hello, how are you?</li><li>Will you be my friend?</li></ul>"
    );

  */

  // path.join() is to help with all path scenario on different machine i.e., on linux /folder/files.jpg & windows \folder\files.jpg

  // __dirname is to get the name of the folder the current file lies in, here, dirname - controllers
  const sendFile = path.join(
    __dirname,
    "..",
    "public",
    "images",
    "skimountain.jpg"
  );
  res.sendFile(sendFile);
}

function postMessages(req, res) {
  // Content-Type will be set to 'text/html'
  res.send("Uploading messages...");
}

module.exports = {
  getMessages,
  postMessages,
};
