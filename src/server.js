const express = require("express");
const bodyparser=require("body-parser");
const path=require("path");
const mongoose=require("mongoose");
const app=express();
const port=process.env.PORT || 8000;
const users_collection1=require("./userdatabase/userdata")
const users_collection2=require("./userdatabase/userdata2")

app.use(bodyparser.urlencoded({
    extended:true
})
)
require("./userdatabase/mongoose_connection")

let mainfolder=path.join(__dirname,"../");
app.use(express.json());
app.use(express.static(mainfolder));
app.get("/",(req,res)=>{
    res.sendFile(mainfolder+"/index.html")
    console.log(__dirname)
    console.log(mainfolder)
});
app.get('/reward',(req,res,next)=>{
    res.sendFile(mainfolder+"/thankyou.html")
})
app.get('/donate',(req,res)=>{
    res.sendFile(mainfolder+"/donate.html")
})
app.get('/contact',(req,res)=>{
    res.sendFile(mainfolder+"/contact.html")
})
app.post("/donate.html",(req,res)=>{
    console.log(req.body);
    let req_userdata=new users_collection1(req.body);
    req_userdata.save();
    res.redirect('/reward')
})
app.post("/contact.html",(req,res)=>{
    console.log(req.body);
    let req_userdata2=new users_collection2(req.body);
    req_userdata2.save();
    res.redirect('/reward')
})

app.listen(8000,()=>{
    console.log(`server is running at port no ${port}`);
});