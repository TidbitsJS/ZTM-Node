const express = require("express");

const app = express();
const PORT = 3000;

const friends = [
  {
    id: 0,
    name: "Albert Einstein",
  },
  {
    id: 1,
    name: "Sir Isaac Newton",
  },
];

// create middleware
app.use((req, res, next) => {
  const start = Date.now();

  // to call the next endpoint i.e app.METHOD (GET/POST or any)
  next();

  // to measure the time taken to process the request
  const delta = Date.now() - start;
  console.log(`${req.method} ${req.url} ${delta}ms`);
});

app.get("/", (req, res) => {
  // Content-Type will be set to 'text/html'
  res.send("Welcome");
});

app.get("/friends", (req, res) => {
  // Content-Type will be set to 'application/json'
  // res.send(friends);

  // to explicitly declare it as json
  res.json(friends);
});

app.get("/friends/:friendId", (req, res) => {
  const friendId = +req.params.friendId;
  const friend = friends[friendId];

  if (friend) {
    res.status(200).json(friend);
  } else {
    // chaining status code with json response
    res.status(404).json({
      error: "Friend does not exist",
    });
  }
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
