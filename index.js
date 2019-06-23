const http = require("http");
const url = require("url");
const { StringDecoder } = require("string_decoder");

let server = http.createServer((req, res) => {
  let parsedUrl = url.parse(req.url, true);
  console.log("parsedUrl", parsedUrl);
  let path = parsedUrl.pathname;
  // console.log("path", path);
  let trimmedPath = path.replace(/^\/+|\/+$/g, "");
  // console.log("trimmedPath", trimmedPath);
  // console.log(parsedUrl.query);
  let queryStringObject = parsedUrl.query;

  let method = req.method.toLowerCase();

  let headers = req.headers;
  // console.log("headers", headers);
  let decoder = new StringDecoder("utf-8");
  let buffer = "";
  req.on("data", data => {
    buffer += decoder.write(data);
  });
  req.on("end", () => {
    buffer += decoder.end();
    res.end("hello world\n");
    console.log("buffer", buffer);
  });
  console.log(decoder);

  // console.log(`
  //   request received on " ${trimmedPath} " path
  //    with this method "${method}"
  //   and with this query string parameters "${queryStringObject}"
  // `);
});
// start the server, with the port 3000
server.listen(3000, () => {
  console.log(`the server is listening on port ${3000} now`);
});
