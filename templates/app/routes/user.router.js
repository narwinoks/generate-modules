const  router =require("express").Router();
const  UserController =require("../controllers/UserController")

router.get("/user" ,UserController.index)
router.get("/data" ,UserController.user)

module.exports  =router