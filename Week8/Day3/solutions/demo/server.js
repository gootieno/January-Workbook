const http = require("http");
const fs = require("fs");

const getContentType = (ext) => {
  switch (ext) {
    case "css":
      return "text/css";
    case "js":
      return "text/javascript";
    default:
      return "text/plain";
  }
};

const comments = [];

const server = http.createServer((req, res) => {
  // parse req.end
  // route handling
  console.log(`${req.method} ${req.url}`);

  let reqBody = "";
  req.on("data", (data) => {
    reqBody += data;
  });

  // When the request is finished processing the entire body
  req.on("end", () => {
    // Parsing the body of the request
    if (reqBody) {
      req.body = reqBody
        .split("&")
        .map((keyValuePair) => keyValuePair.split("="))
        .map(([key, value]) => [key, value.replace(/\+/g, " ")])
        .map(([key, value]) => [key, decodeURIComponent(value)])
        .reduce((acc, [key, value]) => {
          acc[key] = value;
          return acc;
        }, {});
      console.log(req.body);
    }

    if (req.method === "GET" && req.url.startsWith("/static")) {
      const urlParts = req.url.split("/static/");
      console.log("url parts ", urlParts);
      const file = urlParts[1];

      const responseBody = fs.readFileSync(file);

      const fileExtension = file.split(".")[1];
      console.log("file extension ", fileExtension);

      const contentType = getContentType(fileExtension);

      res.statusCode = 200;
      res.setHeader("Content-Type", contentType);
      return res.end(responseBody);
    }

    if (req.method === "GET" && req.url === "/") {
      const htmlPage = fs.readFileSync("index.html", "utf-8");

      let commentList = "";
      for (const comment of comments) {
        commentList += `<li>${comment}</li>`;
      }

      console.log("comments list ", commentList);

      const responseBody = htmlPage.replace(
        /#{comments}/,
        comments.length ? commentList : `<li>No Comments Yet</li>`
      );
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/html");
      return res.end(responseBody);
    }

    if (req.method === "POST" && req.url === "/comments") {
      const { comment } = req.body;

      comments.push(comment);
      res.statusCode = 302;
      res.setHeader("Location", "/");
      return res.end();
    }
  });
  //   res.statusCode = 404;
  //   res.setHeader("Content-Type", "text/plain");
  //   return res.end("Page Not Found");
});

const port = 5000;
server.listen(port, () => console.log(`server listening on port ${port}...`));
