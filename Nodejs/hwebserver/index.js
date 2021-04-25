const http=require('http');
const fs=require('fs');

const server=http.createServer((req,res)=>{
    if(req.url=='/')
    {
        res.end("hello first page");
    }
    else if(req.url=='/about')
    {
        res.end("hello about page");
    }
    else if(req.url=='/contact')
    {
        res.end("hello contact page");
    }
    else if(req.url=='/userapi')
    {
        fs.readFile(`${__dirname}/JSON/json1.json`,"utf-8",(err,data)=>{
            console.log(data);
        });
        res.end("hello userapi page");
    }
    else
    {
        res.writeHead(404,{"Content-type":"text/html"});
        res.end("<h4>Hello last page</h4>");
    }
});

server.listen(8000,'127.0.0.1',()=>{
    console.log("server started");
})