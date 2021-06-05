const http = require("http");

// specific port
const PORT = 3000;

const friends = [
  {
    id: 0,
    name: "Nicola Tesla",
  },
  {
    id: 1,
    name: "Sir Isaac Newton",
  },
  {
    id: 2,
    name: "Albert Einstein",
  },
];

const server = http.createServer();

server.on("request", (req, res) => {
  // splitting the url in array of strings ex., /friends/3 -> ['', 'friends', '3']
  const items = req.url.split("/");

  if (req.url === "/") {
    res.setHeader("Content-Type", "text/plain");
    res.end("Welcome");
  } else if (req.method === "POST" && items[1] === "friends") {
    // listen for data events
    req.on("data", (data) => {
      // data will be raw bytes, so convert it into string
      const friend = data.toString();

      console.log("Request: ", friend);

      // convert string to json object
      friends.push(JSON.parse(friend));
    });

    // request (readable stream) piped with response (writable stream) - to echo back the data received in request as response
    req.pipe(res);

    // Note - No need to use res.end(), as with the power of pipe(), reponse will close the connection.
  } else if (req.method === "GET" && items[1] === "friends") {
    /*
    
        res.writeHead(200, {
            "Content-Type": "application/json",
        });

    */

    // Alternative approach to set headers
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");

    if (items.length === 3) {
      const friendIndex = +items[2]; // convert string to number

      // better check
      const isFriend = friends.find((friend) => friend.id === friendIndex);

      // Check if valid index is provided
      if (friendIndex >= 0 && isFriend) {
        console.log(friendIndex);
        res.end(JSON.stringify(isFriend));
      } else {
        res.statusCode = 404;
        res.setHeader("Content-Type", "text/plain");
        res.end("404 Not Found");
      }
    } else {
      res.end(JSON.stringify(friends));
    }
  } else if (req.method === "GET" && items[1] === "messages") {
    res.setHeader("Content-Type", "text/html");

    // writing html
    res.write("<html>");
    res.write("<body>");
    res.write("<ul>");
    res.write("<li>Hello Issac!</li>");
    res.write("<li>What are your thoughts on astronomy?</li>");
    res.write("</ul>");
    res.write("</body>");
    res.write("</html>");

    res.end();
  } else {
    res.statusCode = 404;
    res.end("No such router"); // for any other routes that are not registered.
  }
});

// listen to request
server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});

/*

  To do 'POST' request in browser, follow the steps ↓
      1. Open developer tools, console
      2.  fetch('http://localhost:3000/friends', {
            method: 'POST',
            body: JSON.stringify({id: 3, name: 'Ryan Dahl' })
          })
          .then((response) => response.json())
          .then((friend) => console.log(friend))

*/
