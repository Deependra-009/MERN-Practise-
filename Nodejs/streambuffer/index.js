
const fs=require('fs');
const http=require('http');

const server=http.createServer();

server.on("request",(req,res)=>{
    // fs.readFile("index1.txt",(err,data)=>
    // {
    //     if(err) return console.error(err);
    //     res.end(data);
    // });
    // 2:- way
    // const rstream=fs.createReadStream("index1.txt");

    // rstream.on('data',(chunkdata)=>{
    //     res.write(chunkdata);
    // });

    // rstream.on('end',()=>{
    //     res.end();
    // })
    // rstream.on('error',()=>{
    //     console.log("error found");
    //     res.end();
    // })
    // 3rd way
    const rstream=fs.createReadStream("index1.txt");
    rstream.pipe(res);
});

server.listen(8000,"127.0.0.1" );