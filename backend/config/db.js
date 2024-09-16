import mongoose from "mongoose";

export const connectDB = async() => {
    await mongoose.connect("mongodb+srv://lnmiit:lnmiit@cluster0.mkoomc9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    console.log("db conncected successfully")
}