// cookie-parser (Reading Cookies)
// import express from 'express';
// import cookieParser from 'cookie-parser';

// const app=express();
// app.use(cookieParser());

// app.get("/set",(req,res)=>{
//     res.cookie("user","manav");
//     res.send("Cookies set");
// })

// app.get("/",(req,res)=>{
//     res.send(req.cookies.user);
// })
// app.listen(3000);


// express-session (Server-side Sessions)
// import express from 'express';
// import session from 'express-session';

// const app = express();
// app.use(session({
//     secret: "mySecretKey",
//     resave: false,
//     saveUninitialized: true
// }))

// app.get("/set",(req,res)=>{
//     req.session.user="Manav";
//     res.send("Session started");
// })

// app.get("/",(req,res)=>{
//     res.send(req.session.user);
// })
// app.listen(3000);



// cookie-session (Cookie-based Sessions)
import express from 'express';
import cookieSession from 'cookie-session';

const app=express();
app.use(cookieSession({
    name : "Session",
    keys: ["key1"]
}))

app.get("/set",(req,res)=>{
    req.session.user="Manav";
    res.send("User set to manav");
})
app.get("/",(req,res)=>{
    res.send(req.session.user);
})
app.get("/destroy", (req, res) => {
  req.session.destroy();
  res.send("Session destroyed");
});
app.listen(3000);