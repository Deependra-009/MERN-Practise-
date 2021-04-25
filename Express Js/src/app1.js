const express=require('express');
const app=express();
const port=8000;

app.get("/",(req,res)=>{
    res.send("hello home page");
});

app.get("/about",(req,res)=>{
    res.send("hello about page");
});

app.get("/contact",(req,res)=>{
    res.status(200).send("hello contact page");
});

app.listen(port,()=>{
    console.log(`hello ${port} port`);
});

