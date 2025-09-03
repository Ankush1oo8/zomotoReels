const express=require("express");
const {authFoodPartnerMiddleware}=require("../middlewares/auth.middleware")
const {createFood}=require("../controllers/food.controller")
const router=express.Router();

//express cant handle videos or images so we need multer to process them
const multer=require("multer");

const upload =multer({
    storage:multer.memoryStorage(),
})

//create food for foodPartner {protected} ->middleware
router.post("/",authFoodPartnerMiddleware,upload.single("video"),createFood);





module.exports=router;