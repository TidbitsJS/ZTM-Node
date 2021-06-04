const http = require("http");

// specific port
const PORT = 3000;

const server = http.createServer((req, res) => {
  /*
        // write some headers to response
             res.writeHead(200, {
                "Content-Type": "text/plain",
             });

        // ready to complete the response (close response)
             res.end("Hello! Sir Isaac Newton is your friend!");

  */

  // json response
  res.writeHead(200, {
    "Content-Type": "application/json",
  });

  // JSON.stringify() to convert object into string
  res.end(
    JSON.stringify({
      id: 1,
      name: "Sir Issac Newton",
    })
  );
});

// listen to request
server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
