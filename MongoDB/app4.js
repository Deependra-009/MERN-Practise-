//  how to update documents and delete 




const mongoose=require('mongoose');

mongoose.connect("mongodb://localhost:27017/deepu",{ useUnifiedTopology: true ,useNewUrlParser: true})
.then(()=>console.log("connection successfull"))
.catch((err)=>console.log(err));

const playlistScheme=new mongoose.Schema({
    name:String,
    ctype:String,
    active:Boolean
});

// modal

const Playlist=new mongoose.model("Playlist",playlistScheme);


// const getdocument =async()=>{
//     const resukt=await Playlist
//     .find()
//     // .countDocuments();
//     .sort({name:1});
//     console.log(resukt);
// }
// getdocument();

// update:----> 


// const updatedocuments=async (id)=>{
//     try{
//         const result=await Playlist.updateOne({_id:id},{
//             $set:{
//                 name:"Javascript"
//             }
//         });
//         console.log(result);
//     }
//     catch(err){
//         console.log(err);
//     }
    
// }



// updatedocuments("60852f2c2f0ac326d59db161");

//  delete documents

const deletedocuments=async (id)=>{
    try{
        const result=await Playlist.deleteOne({_id:id});
        console.log(result);

    }
    catch(err){
        console.log(err);
    }
}


deletedocuments("60852f2c2f0ac326d59db161");