const express = require("express");

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  // Content-Type will be set to 'text/html'
  res.send("Welcome");
});

app.get("/friends", (req, res) => {
  // Content-Type will be set to 'application/json'
  res.send({
    id: 1,
    name: "Sir Issac Newton",
  });
});

app.get("/messages", (req, res) => {
  // Content-Type will be set to 'text/html'
  res.send(
    "<ul><li>Hello, how are you?</li><li>Will you be my friend?</li></ul>"
  );
});

app.post("/messages", (req, res) => {
  // Content-Type will be set to 'text/html'
  res.send("Uploading messages...");
});

// app starts a server and listens on specified port
app.listen(PORT, () => console.log(`Server listening on ${PORT}....`));
