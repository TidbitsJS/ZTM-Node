const express = require("express");

const friendsController = require("./controllers/friends.controller");
const messagesController = require("./controllers/messages.controller");
const models = require("./models/friends.model");

const app = express();
const PORT = 3000;

// create middleware
app.use((req, res, next) => {
  const start = Date.now();

  // to call the next endpoint i.e app.METHOD (GET/POST or any)
  next();

  // to measure the time taken to process the request
  const delta = Date.now() - start;
  console.log(`${req.method} ${req.url} ${delta}ms`);
});

// Built-in express middleware to parse incoming requests that has JSON
app.use(express.json());

app.get("/", (req, res) => {
  // Content-Type will be set to 'text/html'
  res.send("Welcome");
});

app.get("/friends", friendsController.getFriends);

app.post("/friends", friendsController.postFriend);

app.get("/friends/:friendId", friendsController.getFriend);

app.get("/messages", messagesController.getMessages);

app.post("/messages", messagesController.postMessages);

// app starts a server and listens on specified port
app.listen(PORT, () => console.log(`Server listening on ${PORT}....`));
