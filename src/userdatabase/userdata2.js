const mongoose= require("mongoose");
const user_schema2=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        lowercase:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    message:{
        
            type:String,
            required:true,
            lowercase:true
    }
})
const users_collection2=new mongoose.model('users_collection2',user_schema2);
module.exports=users_collection2;