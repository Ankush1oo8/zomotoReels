const userModel=require("../models/user.model");
const foodPartnerModel=require("../models/foodpartner.model")
const bcrypt=require("bcryptjs");
const jwt=require("jsonwebtoken")


async function registerUser(req,res){

    const {fullName,email,password}=req.body;
    const isUserAlreadyExist=await userModel.findOne({
        email
    })
    if(isUserAlreadyExist){
        return res.status(400).json({
            message:"User already exists"
        })
    }

    const hashedPassword=await bcrypt.hash(password,10);
    const user=await userModel.create({
        fullName,
        email,
        password:hashedPassword
    })

    const token=jwt.sign({
        id:user._id,
    },process.env.JWT_SECRET_KEY)
    res.cookie("token",token);

    res.status(201).json({
        message:"User registered successfully",
        user:{
            _id:user._id,
            email:user.email,
            fullName:user.fullName
        }
    })

}

async function loginUser(req,res){

    const {email,password}=req.body;

    const user=await userModel.findOne({
        email
    })

    if(!user){
        return res.status(400).json({
            message:"User does not Exists!!"
        })
    }

    const validPassword=await bcrypt.compare(password,user.password);

    if(!validPassword){
        res.status(400).json({
            message:"Invalid Email or Password!!"
        })
    }
    const token =jwt.sign({
        id:user._id,
    },process.env.JWT_SECRET_KEY)

    res.cookie("token",token);

    res.status(201).json({
        message:"User loggedIn successfully!!",
        user:{
            _id:user._id,
            email:user.email,
            fullName:user.fullName
        }
    })

}

async function logoutUser(req,res){
    res.clearCookie("token");
    res.status(200).json({
        message:"User Logged Out Successfully!!"
    })
}

async function registerFoodPartner(req,res){
    const {name,email,password}=req.body;

    const isAlreadyUser=await foodPartnerModel.findOne({email});

    if(isAlreadyUser){
        return res.status(401).json({
            message:"User Already Exists"
        });
    }

    const hashedPassword=await bcrypt.hash(password,10);
    const foodPartner=await foodPartnerModel.create({
        name,
        email,
        password:hashedPassword
    })

    const token=jwt.sign({
        id:foodPartner._id
    },process.env.JWT_SECRET_KEY);

    res.cookie("token",token);

    res.status(201).json({
        message:"FoodPartner Account Created Successfully!!!",
        foodPartner:{
            _id:foodPartner._id,
            name:foodPartner.name,
            email:foodPartner.email
        }
    })
}

async function loginFoodPartner(req,res){

    const {email,password}=req.body;

    const user=await foodPartnerModel.findOne({
        email
    })

    if(!user){
        return res.status(400).json({
            message:"User does not Exists!!"
        })
    }

    const validPassword=await bcrypt.compare(password,user.password);

    if(!validPassword){
        res.status(400).json({
            message:"Invalid Email or Password!!"
        })
    }
    const token =jwt.sign({
        id:user._id,
    },process.env.JWT_SECRET_KEY)

    res.cookie("token",token);

    res.status(201).json({
        message:"foodPartner loggedIn successfully!!",
        user:{
            _id:user._id,
            email:user.email,
            name:user.name
        }
    })

}

async function logoutFoodPartner(req,res){
    res.clearCookie("token");
    res.status(200).json({
        message:"User Logged Out Successfully!!"
    })
}

module.exports={
    registerUser,
    loginUser,
    logoutUser,
    registerFoodPartner,
    loginFoodPartner,
    logoutFoodPartner
}