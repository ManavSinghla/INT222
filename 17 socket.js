import express from 'express';
import http, { createServer } from 'http';
import { Server } from "socket.io";

const app=express();
const server=createServer(app);
const io=new Server(server);

io.on("connection",(socket)=>{
    console.log("Connection established");

    socket.on("message",(msg)=>{
        io.emit(msg);
    })

    socket.on("disconnect",()=>{
        io.emit("diconnected");
    })
})

server.listen(3000,()=>{
    console.log("Server started");
});