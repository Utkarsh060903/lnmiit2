import mongoose, { mongo } from "mongoose";

const facultyFormSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    employeeId: {
        type: String,
        required: true
    },

    department: {
        type: String,
        required: true
    },

    phoneno: {
        type: String,
        required: true
    },

    photo: {
        type: String,
        required: true
    },

    guests: {
        type: Number,
        required: true
    },

    arrivalDate: {
        type: String,  
        required: true
    },

    departureDate: {
        type: String,  
        required: true
    },

    arrivalTime: {
        type: String,
        required: true
    }
})

const facultyFormModel = new mongoose.model('facultyFormModel' , facultyFormSchema)

export default facultyFormModel