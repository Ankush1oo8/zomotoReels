const mongoose=require("mongoose");

const foodSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    video:{
        type:String,
        required:true,
    },
    description:{
        type:String,
    },
    foodPartner:{
        type:mongoose.Schema.ObjectId,
        ref:"foodPartner",
    }
})

const foodModel=mongoose.model("food",foodSchema)

module.exports=foodModel;