import express from 'express'
import { getRoomAvailabilityInRange, storeRoomAvailability } from '../controllers/roomAvailabilityController.js';

const roomAvailabilityRouter = express.Router();

roomAvailabilityRouter.post('/store-availability' , storeRoomAvailability)
roomAvailabilityRouter.get('/availability-range' , getRoomAvailabilityInRange)

export default roomAvailabilityRouter