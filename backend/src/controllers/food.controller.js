const foodModel=require("../models/food.model")
const {v4:uuid}=require("uuid");
const {uploadFile}=require("../services/storage.service");

//file type things are are accessed by req.file
async function createFood(req,res){
    // console.log(req.foodPartner);
    const file=req.file;
    // console.log(file)
    const uploadedFile=await uploadFile(file.buffer,uuid())
    // console.log(uploadedFile);
    const foodItem=await foodModel.create({
        name:req.body.name,
        description:req.body.description,
        video:uploadedFile,
        foodPartner:req.foodPartner._id,
    })
    res.status(201).json({
        message:"Food Item saved successfully ",
        food:foodItem
    })
}

module.exports={
    createFood
}