//create server
const express=require("express");
const cookieParser=require("cookie-parser")
const authRoutes=require("./routes/auth.routes")
const foodRoutes=require("./routes/food.routes")
const foodPartnerRoutes=require("./routes/foodPartner.routes")
const cors=require("cors");

const app=express();
app.use(cors({
    origin:["http://localhost:5173"],
    credentials:true,
}))
app.use(express.json());
app.use(cookieParser());



app.get("/",(req,res)=>{
    res.send("Hello there!!");
})

app.use('/api/auth',authRoutes);
app.use('/api/food',foodRoutes);
app.use('/api/foodPartner',foodPartnerRoutes);

module.exports=app;