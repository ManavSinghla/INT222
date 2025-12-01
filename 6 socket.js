import express from "express";
import { Socket } from "node:dgram";
import { createServer } from "node:http";
import { Server } from "socket.io";

const app = express();
const server = createServer(app);
const io=new Server(server);

// app.get("/", (req, res) => {
//     res.send("Hello, World!");
// });

// app.listen(3000, () => {
//     console.log("Server is running on http://localhost:3000");
// });

io.on("connection", (socket) => {
    console.log("A user connected");
    Socket.emit('chatMsg', 'Welcome to the chat!');

});

Socket.on('chatMsg', (msg) => {
    console.log('Message received: ' + msg);
});


server.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});