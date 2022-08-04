const mongoose = require("mongoose");
const express = require("express");
const app = express();
require('dotenv').config();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser")
const cors = require("cors");
const authRoutes = require("./routes/auth")
//DB connection
mongoose.connect(process.env.DATABASE,{
    useNewUrlParser: true ,
    useUnifiedTopology:true,
    useCreateIndex:true
}).then(()=>{
    console.log("DB connected....")
}
).catch(()=>{
    console.log("opps db not connected..")
})


// middlewares
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());


// ROUTS
app.use("/api", authRoutes);


const port = process.env.PORT || 8000;

app.listen(port, ()=>{
    console.log(`app is running at ${port}...`);
}) 