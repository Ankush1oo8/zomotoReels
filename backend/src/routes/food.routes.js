const express=require("express");
const {authFoodPartnerMiddleware, authUserMiddleware}=require("../middlewares/auth.middleware")
const {createFood, getFoodItems,saveFood,getSaveFood, likeFoodController}=require("../controllers/food.controller")
const router=express.Router();

//express cant handle videos or images so we need multer to process them
const multer=require("multer");
const { getSalt } = require("bcryptjs");

const upload =multer({
    storage:multer.memoryStorage(),
})

//create food for foodPartner {protected} ->middleware
router.post("/",authFoodPartnerMiddleware,upload.single("video"),createFood);

//showing videos to users
router.get("/",authUserMiddleware,getFoodItems)

router.post("/like",authUserMiddleware,likeFoodController);

router.post("/save",authUserMiddleware,saveFood)

router.get("/save",authUserMiddleware,getSaveFood)
module.exports=router;