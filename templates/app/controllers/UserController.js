const  {User} =require("../models")
const  index  = (req,res,next)=>{
    res.json({"message" :"sucessfully"})
}

const  user =async (req,res,next)=>{
    const  data =await  User.findAll();
    res.json({"message" :"sucessfully",data:data})
}

module.exports ={
    index,
    user
}