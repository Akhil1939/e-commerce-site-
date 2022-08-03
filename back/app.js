const mongoose = require("mongoose");
const express = require("express");
const app = express();
require('dotenv').config();


mongoose.connect(process.env.DATABASE,{
    useNewUrlParser: true ,
    useUnifiedTopology:true,
    useCreateIndex:true
}).then(()=>{
    console.log("DB connected....")
}
).catch(()=>{
    console.log("oopps db not connected..")
})

const port = process.env.PORT || 8000;

app.listen(port, ()=>{
    console.log(`app is running at ${port}...`);
}) 