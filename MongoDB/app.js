// how to connect mongodb with node js

const mongoose=require('mongoose');

mongoose.connect("mongodb://localhost:27017/deepu",{ useUnifiedTopology: true ,useNewUrlParser: true})
.then(()=>console.log("connection successfull"))
.catch((err)=>console.log(err));

const playlistScheme=new mongoose.Schema({
    name:String,
    ctype:String,
    active:Boolean
});


const Playlist=new mongoose.model("Playlist",playlistScheme);

// const reactplaylist=new Playlist({
//     name:"React JS",
//     ctype:"Front End",
//     active:true

// })

// reactplaylist.save();

const createdocument=async ()=>{
    try{
        const reactplaylist=new Playlist({
            name:"React JS",
            ctype:"Front End",
            active:true
        
        })
    
        const result=await reactplaylist.save();
        console.log(result);
    }
    catch(err){
        console.error(err);
    }
}

createdocument();