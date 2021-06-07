const express = require("express");

const messagesRouter = require("./routes/messages.router");
const friendsRouter = require("./routes/friends.router");

const app = express();
const PORT = 3000;

// create middleware
app.use((req, res, next) => {
  const start = Date.now();

  // to call the next endpoint i.e app.METHOD (GET/POST or any)
  next();

  // to measure the time taken to process the request
  const delta = Date.now() - start;
  console.log(`${req.method} ${req.baseUrl}${req.url} ${delta}ms`);
});

// Built-in express middleware to parse incoming requests that has JSON
app.use(express.json());

app.get("/", (req, res) => {
  // Content-Type will be set to 'text/html'
  res.send("Welcome");
});

// pass router middleware as an argument to app.use()
app.use("/friends", friendsRouter);
app.use("/messages", messagesRouter);

// app starts a server and listens on specified port
app.listen(PORT, () => console.log(`Server listening on ${PORT}....`));
