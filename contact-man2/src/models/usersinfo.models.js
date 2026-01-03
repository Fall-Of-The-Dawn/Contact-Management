import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone:{
        type: String,
        required: true,
        unique: true
    },
    message : {
        type:String,
        default : ""
    },
    createdAt: {
        type: Date,
        default: Date.now
        
    }
},
    {timestamps: true});
export default  mongoose.model('users', userSchema);