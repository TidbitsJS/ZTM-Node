const express = require("express");
const path = require("path");

const messagesRouter = require("./routes/messages.router");
const friendsRouter = require("./routes/friends.router");

const app = express();

// set & load template engine hbs
app.set("view engine", "hbs");

// path to find views folder
app.set("views", path.join(__dirname, "views"));
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

// Express static file middleware for frontend with specific path
// app.use("/site", express.static("public")); // relative path

// defining an absolute path
const absolutePath = path.join(__dirname, "public");
app.use("/site", express.static(absolutePath));

// Built-in express middleware to parse incoming requests that has JSON
app.use(express.json());

app.get("/", (req, res) => {
  // Content-Type will be set to 'text/html'
  // res.send("Welcome");

  // rendering hbs template file & sending data
  res.render("index", {
    title: "Backend",
    caption: "Let's go skiing!",
  });
});

// pass router middleware as an argument to app.use()
app.use("/friends", friendsRouter);
app.use("/messages", messagesRouter);

// app starts a server and listens on specified port
app.listen(PORT, () => console.log(`Server listening on ${PORT}....`));
