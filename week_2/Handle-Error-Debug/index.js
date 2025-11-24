const fs = require("fs").promises;
const http = require("http");

class ExistentError extends Error {
  constructor(statusCode, message) {
    super(statusCode, message);
    this.name = "ExistentError";
    this.statusCode = statusCode;
  }
}

// const server = http.createServer((req, res) => {
//   if (req.url === "/") {
//     fs.readFile("nonexistentfile.txt", "utf-8", (err, data) => {
//       if (err) {
//         throw new ExistentError("File not found", err.statusCode);
//       }
//     });
//   } else {
//     throw new ExistentError("Route not found");
//   }
// });

const server = http.createServer(async (req, res) => {
  if (req.url === "/") {
    try {
      const data = await fs.readFile("nonexistentfile.txt", "utf-8");
      console.log("data: ", data);
    } catch (error) {
      res.writeHead(404);
      res.end("Not Found");
    }
  }
});

server.listen(3000, () => {
  console.log("server is running on port 3000");
});
