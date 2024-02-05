// const http = require("http");

const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log("Inthe midlleware ");
  next();
});

app.use((req, res, next) => {
  console.log("another the midlleware ");
});

// const server = http.createServer(app);
// server.listen(3000);

// or

app.listen(3000);
