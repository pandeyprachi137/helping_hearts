const mongoose= require("mongoose");
const user_schema1=new mongoose.Schema({
    fullname:{
        type:String,
        required:true,
        lowercase:true
    },
    phonenumber:{
        type:Number,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    pincode:{
        type:Number,
        required:true,
        unique:true
    },
    state:{
        type:String,
        required:true,
        lowercase:true
    },
    locality:{
        type:String,
        required:true,
        lowercase:true
    },
    city:{
        type:String,
        required:true,
        lowercase:true
    },
    yearsused:{
        type:Number,
        required:true,
        lowercase:true
    },
    condition:{
        type:String,
        required:true,
        lowercase:true
    },
    typeofdress:{
        type:String,
        required:true,
        lowercase:true
    },
    fabric:{
        type:String,
        required:true,
        lowercase:true
    },
    color:{
        type:String,
        required:true,
        lowercase:true
    },
    size:{
        type:String,
        required:true,
        unique:true
    },
    img:{
        data:Buffer,
        required:true,
        type:String
    }
})
const users_collection1=new mongoose.model('users_collection1',user_schema1);
module.exports=users_collection1;