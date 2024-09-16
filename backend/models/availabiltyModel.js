import mongoose from 'mongoose'

const roomAvailabilitySchema = new mongoose.Schema({
    date: {
        type: String,
        required: true,
        unique: true
    },

    availability: {
        type: Map,
        of: new mongoose.Schema({
            available: {
                type: Boolean,
                default: false
            },

            notAvailable: {
                type: Boolean,
                default: false
            }
        })
    }
})

const RoomAvailabilty = mongoose.model("RoomAvailability" , roomAvailabilitySchema)

export default RoomAvailabilty
