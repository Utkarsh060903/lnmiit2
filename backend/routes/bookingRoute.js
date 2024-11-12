import express from "express"
import bookingModel from "../models/bookingModel.js";

const bookingRouter = express.Router()

const isRoomAvailable = async (roomNo, checkinDate, checkoutDate) => {
    const conflictingBooking = await bookingModel.findOne({
        roomNo,
        $or: [
            { checkinDate: { $lt: checkoutDate }, checkoutDate: { $gt: checkinDate } }
        ]
    });
    return !conflictingBooking;
};

bookingRouter.post('/room-info', async (req, res) => {
    const { roomNo, studentName, checkinDate, checkoutDate } = req.body;

    try {
        const available = await isRoomAvailable(room, new Date(checkinDate), new Date(checkoutDate));

        if (!available) {
            return res.status(400).json({ message: 'Room is not available for these dates' });
        }

        const booking = new bookingModel({
            roomNo,
            studentName,
            checkinDate: new Date(checkinDate),
            checkoutDate: new Date(checkoutDate),
        });

        await bookingModel.save();
        res.status(201).json({ message: 'Booking successful', booking });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
});

bookingRouter.get('/room-available', async (req, res) => {
    const { checkinDate, checkoutDate } = req.query;

    try {
        const bookedRooms = await Booking.find({
            $or: [
                { checkinDate: { $lt: new Date(checkoutDate) }, checkoutDate: { $gt: new Date(checkinDate) } }
            ]
        }).select('room');

        const bookedRoomNumbers = bookedRooms.map((booking) => booking.room);
        const totalRooms = 8;
        const availableRooms = Array.from({ length: totalRooms }, (_, i) => i + 1).filter(
            (roomNo) => !bookedRoomNumbers.includes(roomNo)
        );

        res.status(200).json({ availableRooms });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
});

export default bookingRouter
