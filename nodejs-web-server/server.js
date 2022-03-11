const http = require("http");

const requestListener = (request, respone) => {
  respone.setHeader("Content-Type", "text/html");

  respone.statusCode = 200;
  respone.end("<h1>Halo HTTP Server!</h1>");
};
