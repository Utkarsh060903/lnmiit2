import mongoose, { Schema } from "mongoose";

const bookingSchema = new mongoose.Schema({
    studentName: {
        type: String,
        reuqired: true
    },

    studentRollNumber: {
        type: String,
        required: true
    },

    roomNo: {
        type: Number,
        required: true
    },

    checkinDate: {
        type: Date,
        required: true
    },

    checkoutDate: {
        type: Date,
        required: true
    }
})

const bookingModel = new mongoose.model("bookingModel", bookingSchema)

export default bookingModel