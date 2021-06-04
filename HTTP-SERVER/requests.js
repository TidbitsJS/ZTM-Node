const http = require("http");

// specific port
const PORT = 3000;

const server = http.createServer();

server.on("request", (req, res) => {
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/plain");
    res.end("Welcome");
  } else if (req.url === "/friends") {
    /*
    
        res.writeHead(200, {
            "Content-Type": "application/json",
        });

    */

    // Alternative approach to set headers
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");

    res.end(
      JSON.stringify({
        id: 1,
        name: "Sir Issac Newton",
      })
    );
  } else if (req.url === "/messages") {
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
    res.end();
  }
});

// listen to request
server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
