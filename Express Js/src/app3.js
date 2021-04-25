const express=require('express');
const app=express();
const path=require('path');
console.log("deepu");
const staticpath=path.join(__dirname,'../public');
// console.log(path.join(__dirname,'../public'));

app.use(express.static(staticpath));

app.get('/',(req,res)=>{
    res.send();
});

app.listen(8000,()=>{
    console.log("deepu trivedi");
});









