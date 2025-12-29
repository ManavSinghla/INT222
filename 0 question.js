// Create a Node.js program that reads and writes data to a JSON file using the fs module.
// Display the output on a simple front-end HTML page.

// import fs from "fs";
// import express from 'express';


// const app=express();
// const a=fs.readFileSync("users.json");

// app.get("/",(req,res)=>{
//     res.send(JSON.parse(a));
// })

// app.listen(3000,()=>{
//     console.log("Server is running fine");
// })

// Develop a Node.js script using Streams to serve a large video or image file to a browser without loading it fully in memory.
// import fs from "fs";
// import express from 'express'

// const app=express();
// app.get("/",(req,res)=>{
//     fs.createReadStream("video.mp4").pipe(res);
// })
// app.listen(3000);

// Write a Node.js program to compress and decompress a file using the Zlib module.
// import zlib from 'zlib';
// import fs from 'fs';

// fs.createReadStream('file.txt').pipe(zlib.createGzip()).pipe(fs.createWriteStream('file.txt.gz'))
// fs.createReadStream('file.txt.gz').pipe(zlib.createGunzip).pipe(fs.createWriteStream('output.txt'));

// Create a Node.js application using EventEmitter to simulate a login system.
// import EventEmitter from "events";

// const emitter = new EventEmitter();

// const username = "admin";
// const password = "12345";

// emitter.on("loginSuccess", () => {
//   console.log("Login Successful");
// });

// emitter.on("loginFailed", () => {
//   console.log("Login Failed");
// });

// emitter.on("login", (user, pass) => {
//   if (user === "admin" && pass === "12345") {
//     emitter.emit("loginSuccess");
//   } else {
//     emitter.emit("loginFailed");
//   }
// });

// emitter.emit("login", username, password);

// Create an Express.js application with GET and POST routes to handle user form data using body-parser (or Express built-in middleware).
// import express from 'express';
// import fs from 'fs';

// const app = express();

// app.use(express.urlencoded({ extended: true }));

// app.get("/", (req, res) => {
//   res.sendFile(process.cwd() + "/index.html");
// })

// app.post("/submit", (req, res) => {
//   const { username, password } = req.body;
//   res.send(
//     `
//     <div>
//       <h1>${username}</h1>
//       <h2>${password}</h2>
//     </div>
//     `
//   )
// })

// app.listen(3000, () => {
//   console.log("Server is running");
// })

// Create an Express.js application using express.Router() to demonstrate modular routing.
// import express from 'express';
// import userRoute from "./routes/user.js";

// const app=express();
// app.listen(3000);

// app.get("/",(req,res)=>{
//   res.send("Home page");
// })

// app.use("/users",userRoute);.



// Implement a custom middleware in an Express.js application to log request details such as request URL, HTTP method, and request time.
// import express from 'express';

// const app=express();
// app.listen(3000,()=>{
//   console.log("Server running fine");
// })

// app.use((req,res,next)=>{
//   console.log(req.url);
//   console.log(req.method);
//   next();
// })

// app.get("/",(req,res)=>{
//   res.send("Home page");
// })


// Create an Express.js application using express-session to manage user sessions.
// import express from 'express';
// import session from 'express-session';

// const app=express();
// app.use(session({
//   secret: "mysecretkey",
//   resave: false,
//   saveUninitialized: true
// }))

// app.get("/set",(req,res)=>{
//   req.session.user="Manav";
//   res.send("Session created");
// })
// app.get("/",(req,res)=>{
//   res.send(req.session.user);
// })
// app.get("/destroy", (req, res) => {
//   req.session.destroy();
//   res.send("Session destroyed");
// });
// app.listen(3000,()=>{
//   console.log("sever running fine");
// })



// Perform CRUD (Create, Read, Update, Delete) operations on MongoDB using Node.js.
// import { MongoClient } from "mongodb";

// const url = "mongodb://127.0.0.1:27017";
// const client = new MongoClient(url);

// async function crudOperations() {
//     // Connect to MongoDB
//     await client.connect();
//     console.log("MongoDB connected");

//     const db = client.db("college");
//     const students = db.collection("students");

//     // CREATE
//     await students.insertOne({
//       name: "Manav",
//       course: "BTech CSE",
//       cgpa: 8.0
//     });
//     console.log("Student inserted");

//     // READ
//     const result = await students.find({ name: "Manav" }).toArray();
//     console.log("Student found:", result);

//     // UPDATE
//     await students.updateOne(
//       { name: "Manav" },
//       { $set: { name: "Singla" } }
//     );
//     console.log("Student updated");

//     // DELETE
//     await students.deleteOne({ name: "Singla" });
//     console.log("Student deleted");
// }

// crudOperations();

