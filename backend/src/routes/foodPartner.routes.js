const express=require("express");
const {authUserMiddleware}=require("../middlewares/auth.middleware")
const {getFoodPartnerById} =require("../controllers/foodPartner.controller")


const router=express.Router();

router.get("/:id",authUserMiddleware,getFoodPartnerById)
module.exports=router;