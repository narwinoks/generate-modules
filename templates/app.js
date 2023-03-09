const  express  =require("express")
const  app      =express();
const path      = require("path");
const  logger   =require("morgan")
const  cookieParser =require("cookie-parser")
require("dotenv").config();


const  PORT =process.env.PORT || 8080

const  routerIndex =require("./app/routes/index.router");
const  routerUser =require("./app/routes/user.router");

app.use(logger("dev"));
app.set("view engine", "ejs");
app.set('views', __dirname + '/app/views');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(routerIndex);
app.use(routerUser)

//  app.listen(PORT ,function () {
//     console.log(`successfully ${PORT}`)
// })

module.exports =app.listen(PORT)