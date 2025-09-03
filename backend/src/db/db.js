const mongoose=require("mongoose");

function connectDB() {
    mongoose.connect("mongodb+srv://ankush2025:Ankush%402025@cluster0.kocggji.mongodb.net/zomatoReels")
    .then(()=>{
        console.log("Mongo Db connected successfully")
    })
    .catch((e)=>{
        console.error("Error in connecting DB",e);
    })
}

module.exports=connectDB;