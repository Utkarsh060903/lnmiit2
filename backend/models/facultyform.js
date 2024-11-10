import mongoose, { mongo } from "mongoose";

const facultyFormSchema = new mongoose.Schema({
    facultyName: {
        type: String,
        required: true
    },

    facultyEmployeeId: {
        type: String,
        required: true
    },

    facultyDepartment: {
        type: String,
        required: true
    },

    facultyMobileNumber: {
        type: String,
        required: true
    },

    photo: {
        type: String,
        required: true
    },

    numberOfMales: {
        type: Number,
        required: true
    },

    numberOfFemales: {
        type: Number,
        required: true
    },

    numberOfChildren: {
        type: Number,
        required: true
    },

    
    guestMobileNumber: {
        type: String,
        required: true
    },

    guestName: {
        type: String,
        required: true
    },

    numberOfRooms: {
        type: Number,
        required: true
    },

    guests: {
        type: Number,
        //required: true
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
        //required: true
    },

    guestRelation:  {
        type: String,
        required: true
    },

    guestPurpose: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        //required: true
    }
})

const facultyFormModel = new mongoose.model('facultyFormModel' , facultyFormSchema)

export default facultyFormModel