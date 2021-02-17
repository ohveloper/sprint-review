/*************************************************************

request handler 함수를 여기서 작성합니다.

reuqestHandler 함수는 이미 basic-server.js 파일에서 사용 했지만, 아직 작동하지 않습니다.

requestHandler 함수를 export 하여 basic-server.js 에서 사용 할 수 있게 하세요

**************************************************************/
const messages = {};
messages.results = [];
const requestHandler = function (request, response) {
  // const { method, url } = request;
  const headers = defaultCorsHeaders;
  headers["Content-Type"] = "text/plain";
  if (request.method === "OPTIONS") {
    response.writeHead(200, headers);
    response.end();
  } else if (request.method === "GET" && request.url === "/messages") {
    response.writeHead(200, headers);
    response.end(JSON.stringify(messages));
  } else if (request.method === "POST" && request.url === "/messages") {
    let body = [];
    request
      .on("data", (chunk) => {
        body.push(chunk);
      })
      .on("end", () => {
        body = Buffer.concat(body).toString();
        messages.results.push(JSON.parse(body));
      });
    response.writeHead(201, headers);
    response.end(JSON.stringify(messages));
  } else {
    response.statusCode = 404;
    response.end();
  }
};

const defaultCorsHeaders = {
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
  "access-control-allow-headers": "content-type, accept",
  "access-control-max-age": 10, // Seconds.
};
module.exports = requestHandler;
