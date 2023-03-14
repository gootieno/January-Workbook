const http = require("http");
const fs = require("fs");

const getContentType = (ext) => {
  // if (ext === "css") return "text/css";
  // else if (ext === "jpg" || ext === "jpeg") return "image/jpeg";
  // else return "text/plain";

  switch (ext) {
    case "css":
      return "text/css";
    case "jpg" || "jpeg":
      return "image/jpeg";
    default:
      return "text/plain";
  }
};

const server = http.createServer((req, res) => {
  // Your code here

  if (req.method === "GET" && req.url === "/") {
    const responseBody = fs.readFileSync("index.html", "utf-8");

    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    return res.end(responseBody);
  }

  if (req.method === "GET" && req.url.startsWith("/static")) {
    console.log("req url ", req.url);

    const urlParts = req.url.split("/static");
    console.log("url parts ", urlParts);

    const staticPath = urlParts[1];
    console.log("static path ", staticPath);

    const responseBody = fs.readFileSync(`./assets${staticPath}`);

    res.statusCode = 200;

    const fileExtension = staticPath.split(".")[1];
    console.log("file extension ", fileExtension);

    const contentType = getContentType(fileExtension);

    res.setHeader("Content-Type", contentType);
    return res.end(responseBody);
  }

  // if (req.method === "GET" && req.url === "/static/css/application.css") {
  //   const responseBody = fs.readFileSync("./assets/css/application.css");

  //   res.statusCode = 200;
  //   res.setHeader("Content-Type", "text/css");
  //   return res.end(responseBody);
  // }

  // if (req.method === "GET" && req.url === "/static/images/dog.jpg") {
  //   const responseBody = fs.readFileSync("./assets/images/dog.jpg");

  //   res.statusCode = 200;
  //   res.setHeader("Content-Type", "image/jpeg");
  //   return res.end(responseBody);
  // }
});

const port = 5000;

server.listen(port, () => console.log("Server is listening on port", port));
