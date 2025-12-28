import express from 'express'
import { Router } from "express";

const router = Router();
const app=express();

app.use((req, res, next) => {
  console.log(req.url);
  next();
});
router.get("/login",(req,res)=>{
    res.send("Login page");
})

app.use("/api",router);

app.listen(3000);

app.get("/",(req,res)=>{
    res.send("Hello")
})