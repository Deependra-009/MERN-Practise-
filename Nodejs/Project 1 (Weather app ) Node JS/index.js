const fs=require('fs');
const http=require('http');
var request=require('requests');


const home=fs.readFileSync('home.html','utf-8');
// home.toString();

const replacefunc=(tempdata,orgdata)=>{
    let temperature=tempdata.replace("{%temprature%}",orgdata.main.temp);
    temperature=temperature.replace("{%maxtemp%}",orgdata.main.temp_max);
    temperature=temperature.replace("{%mintemp%}",orgdata.main.temp_min);
    temperature=temperature.replace("{%city%}",orgdata.name);
    return temperature;
};

const server=http.createServer((req,res)=>{
    if(req.url=="/"){

        
        request(`http://api.openweathermap.org/data/2.5/weather?q=Lucknow&appid=b875135a1eadfd38b69f06973339f079`)
        .on('data',(chunkdata)=>{
            const obj=JSON.parse(chunkdata);
            const arrdata=[obj];
            const realval=arrdata
            .map((val)=> replacefunc(home,val))
            .join("");
            res.write(realval);
            
        })
        .on('end',(err)=>{
            if(err) return console.log("error",err);
            console.log("end");
            res.end();
        });
        
    }
});

server.listen(8000,"127.0.0.1");


