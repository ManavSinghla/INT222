// import { Server } from "socket.io";

// const io = new Server(3000, { /* options */ });

// io.on("connection", (socket) => {
//   // ...
// });


// With an HTTP server
// import { createServer } from "http";
// import { Server } from "socket.io";

// const httpServer = createServer();
// const io = new Server(httpServer, { /* options */ });

// io.on("connection", (socket) => {
//   // ...
// });

// httpServer.listen(3000);


// With express
import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, { /* options */ });

io.on("connection", (socket) => {
  // ...
});

httpServer.listen(3000);