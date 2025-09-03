const mongoose=require("mongoose");

function connectDB() {
    mongoose.connect(process.env.MONGODB_URI)
    .then(()=>{
        console.log("Mongo Db connected successfully")
    })
    .catch((e)=>{
        console.error("Error in connecting DB",e);
    })
}

module.exports=connectDB;