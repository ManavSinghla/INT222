import express from 'express';
const app=express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

function test(req,res,next){
    if(req.body.username==="Manav" || req.body.password==="1234"){
    next();
    }else{
        res.send("User is unauthorised")
    }
}
//routes
app.post('/login',test,(req,res)=>{
    res.send("Login Successful");
});
app.listen(5000,()=>{
    console.log("Server is running on port 5000");
});