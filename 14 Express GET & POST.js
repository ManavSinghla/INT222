import express from 'express';

const app=express();

app.listen((3000),()=>{
    console.log("http://localhost:3000");
})

app.get(('/'),(req,res)=>{
    res.send("Home page");
})

app.get(('/about'),(req,res)=>{
    res.send("About page");
})

app.post('/login', (req, res) => {
  res.send(req.body);
});