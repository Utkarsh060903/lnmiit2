import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    } , 

    email: {
        type: String,
        required: true
    } ,

    password: {
        type: String,
        required: true
    } ,

})

const adminModel = new mongoose.model("adminModel" , adminSchema)

export default adminModel