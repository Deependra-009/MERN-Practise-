// how to install multiple document

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
        const mongoplaylist=new Playlist({
            name:"Mongo",
            ctype:"Database",
            active:true
        
        })

        const jsplaylist=new Playlist({
            name:"JS",
            ctype:"back End",
            active:true
        
        })
    
        const result=await Playlist.insertMany([mongoplaylist,jsplaylist]);
        console.log(result);
    }
    catch(err){
        console.error(err);
    }
}

createdocument();