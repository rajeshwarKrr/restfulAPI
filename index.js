const http = require("http");
const url = require("url");

let server = http.createServer((req, res) => {
  let parsedUrl = url.parse(req.url, true);
  // console.log("parsedUrl", parsedUrl);
  let path = parsedUrl.pathname;
  // console.log("path", path);
  let trimmedPath = path.replace(/^\/+|\/+$/g, "");
  // console.log("trimmedPath", trimmedPath);

  let method = req.method.toLowerCase();

  res.end("hello world\n");
  console.log(
    `request received on " ${trimmedPath} " path whth this method ${method}`
  );
});
// start the server, with the port 3000
server.listen(3000, () => {
  console.log(`the server is listening on port ${3000} now`);
});
