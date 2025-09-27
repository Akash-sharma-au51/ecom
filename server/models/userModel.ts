import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        select:false,
        maxLength:[64,"Password must be at most 64 characters long"],
        minLength:[6,"Password must be at least 6 characters long"]
    },
    role:{
        type:String,
        enum:["user","admin"],
        default:"user"
    }
})

const User = mongoose.model('User', userSchema)

export default User