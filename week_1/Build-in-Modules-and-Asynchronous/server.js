const http = require("http");
const fs = require("fs").promises;
const path = require("path");

const server = http.createServer(async (req, res) => {
  if (req.url === "/") {
    const filePath = path.join(__dirname, "index.html");

    try {
      const data = await fs.readFile(filePath, "utf-8");
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    } catch (error) {
      console.error("Error reading file:", error);
      res.writeHead(500, { "content-type": "text/plain" });
      return res.end("Internal Server Error");
    }
  } else {
    res.writeHead(404);
    res.end("Not Found");
  }
});

module.exports = server;
