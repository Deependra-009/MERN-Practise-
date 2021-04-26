// validation

const mongoose=require('mongoose');

mongoose.connect("mongodb://localhost:27017/deepu",{ useUnifiedTopology: true ,useNewUrlParser: true,useCreateIndex:true})
.then(()=>console.log("connection successfull"))
.catch((err)=>console.log(err));

const playlistScheme=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true,
        uppercase:true,
        trim:true,
        minlength:6
    },
    ctype:String,
    active:Boolean,
    videos:{
        type:Number,
        validate(value){
            if(value<0)
            {
                throw new Error("No negative allow");
            }
        }
    }
});

const Playlist=new mongoose.model("Playlist",playlistScheme);

const createdocument=async ()=>{
    try{
        const mongooseplaylist=new Playlist({
            name:"Mongoose",
            ctype:"Database",
            active:true,
            videos:0
        });

        const result=await Playlist.insertMany(mongooseplaylist);
        console.log(result);
    }
    catch(err){
        console.log(err);
    }

}

createdocument();