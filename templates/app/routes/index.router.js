const  router =require("express").Router();

router.get("/" ,function (req,res,next) {
    res.render("index")
})
router.get("/view" ,function (req, res,next) {
    res.status(200).json({message:"successfully" ,data:{}})
})

module.exports =router