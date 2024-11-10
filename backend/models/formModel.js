import mongoose, { mongo } from "mongoose";

const formSchema = new mongoose.Schema({
    studentName: {
        type: String,
        required: true
    },

    studentRollNumber: {
        type: String,
        required: true
    },

    studentDepartment: {
        type: String,
        required: true
    },

    studentMobileNumber: {
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

const formModel = new mongoose.model('formModel' , formSchema)

export default formModel