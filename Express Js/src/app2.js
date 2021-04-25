const express=require('express');
const app=express();

app.get('/',(req,res)=>{
    res.send("hello home page");
});

app.get('/about',(req,res)=>{
    res.write("<h1>Hello about </h1>");
    res.send();
});

app.get('/temp',(req,res)=>{
    res.send({
        id:1,
        name:"deepu"
    });
});

app.listen(8000,()=>{
    console.log("hello console");
});