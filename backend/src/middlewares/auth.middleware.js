const foodPartnerModel=require("../models/foodpartner.model")
const jwt=require("jsonwebtoken");

async function authFoodPartnerMiddleware (req,res,next){
    
    const token=req.cookies.token;

    if(!token){
        return res.status(401).json({
            message:"Please Login First!!!"
        })
    }

    try {
        //verifies the token if not valid throws error
        const decoded=jwt.verify(token,process.env.JWT_SECRET_KEY);
        
        //searching foodpartner with decoded id
        const foodPartner=await foodPartnerModel.findById(decoded.id);
        
        //creating new property call foodPartner in req
        //it is not present already in req
        req.foodPartner=foodPartner;

        //continue with other code or req function
        next();
    } catch (error) {
        return res.status(401).json({
            message:"Invalid Token"
        })
    }
    
}

module.exports={
    authFoodPartnerMiddleware
}