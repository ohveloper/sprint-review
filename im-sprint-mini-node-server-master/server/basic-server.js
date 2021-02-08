const http = require("http");

const PORT = 5000;

const ip = "localhost";

const server = http.createServer((request, response) => {
  const { method, url } = request;
  if (method === "OPTIONS") {
    response.writeHead(200, defaultCorsHeader);
    response.end();
  } else if (method === "POST" && url === "/lower") {
    let body = [];
    request
      .on("data", (chunk) => {
        body.push(chunk);
      })
      .on("end", () => {
        body = Buffer.concat(body).toString().toLowerCase();
        response.writeHead(201, defaultCorsHeader);
        response.end(body);
      });
  } else if (method === "POST" && url === "/upper") {
    let body = [];
    request
      .on("data", (chunk) => {
        body.push(chunk);
      })
      .on("end", () => {
        body = Buffer.concat(body).toString().toUpperCase();
        response.writeHead(201, defaultCorsHeader);
        response.end(body);
      });
  } else {
    response.writeHead(400, defaultCorsHeader);
    response.end();
  }
  // console.log(
  //   `http request method is ${request.method}, url is ${request.url}`
  // );
});

server.listen(PORT, ip, () => {
  console.log(`http server listen on ${ip}:${PORT}`);
});

const defaultCorsHeader = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Accept",
  "Access-Control-Max-Age": 10,
};
