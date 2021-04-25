const express=require('express');
const app=express();
const path=require('path');
console.log("deepu");

// handelbars

app.set("view engine","hbs");
// template engine route
app.get("",(req,res)=>{
    res.render("index.hbs",{
        name:"Deependra"
    });
});

app.get("/",(req,res)=>{
    res.send("hello");
})
app.listen(8000,()=>{
    console.log("deepu trivedi");
});










