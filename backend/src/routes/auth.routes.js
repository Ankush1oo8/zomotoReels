const express=require("express");
const router=express.Router();
const {registerUser, loginUser, logoutUser, logoutFoodPartner, loginFoodPartner, registerFoodPartner}=require("../controllers/auth.controller");

//user auth api
router.post("/user/register",registerUser);
router.post("/user/login",loginUser);
router.get("/user/logout",logoutUser);

//food partner auth api
router.post("/foodPartner/register",registerFoodPartner);
router.post("/foodPartner/login",loginFoodPartner);
router.get("/foodPartner/logout",logoutFoodPartner);

module.exports=router;