// to change the name of views directory

const express=require('express');
const app=express();
const path=require('path');
const hbs1=require("hbs");
const path1=path.join(__dirname,"templates/views");
const partialpath=path.join(__dirname,"templates/partials");

// handelbars
app.set('views',path1);
app.set("view engine","hbs");
hbs1.registerPartials(partialpath);
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










