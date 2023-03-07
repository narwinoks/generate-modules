const  express  =require("express")
const  app      =express();
const path      = require("path");
const  logger   =require("morgan")
const  cookieParser =require("cookie-parser")

const  routerIndex =require("./app/routes/index.router");
app.use(logger("dev"));
app.set("view engine", "ejs");
app.set('views', __dirname + '/app/views');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(routerIndex);

app.listen(3000 ,function () {
    console.log("successfully")
})