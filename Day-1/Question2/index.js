import http from "node:http";
import fs from "node:fs";
http
  .createServer((req, res) => {
    fs.readFile("users.json", function (err, data) {
      res.writeHead(200, { "Content-Type": "text" });
      res.write(data);
      res.end();
    });
  })
  .listen(8000);
