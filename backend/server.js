import express from 'express'
import { connect } from 'mongoose';
import { connectDB } from './config/db.js';
import cors from 'cors'
import userRouter from './routes/userRoute.js';
import formRouter from './routes/formRoute.js';
import dotenv from 'dotenv'
import getInfoRouter from './routes/getInfoRoute.js';
import forgotPassRouter from './routes/forgotPasswordRoute.js';
import facultyformRouter from './routes/facultyFormRouter.js';
import roomAvailabilityRouter from './routes/roomAvailabilityRoute.js';
import emailRouter from './routes/emailForward.js';
import getFacultyInfoRouter from './routes/getFacultyInfoRouter.js';
import bookingRouter from './routes/bookingRoute.js';
import room from './routes/roomAllotment.js';
import adminAuth from './routes/adminAuthRoute.js';
import confirmRouter from './routes/confirmEmailRouter.js';
const app = express()

dotenv.config();

const port = 4001;

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/user' , userRouter)
app.use('/api' , formRouter)
app.use('/api' , facultyformRouter)
app.use('/api' , getInfoRouter)
app.use('/api' , forgotPassRouter)
app.use('/uploads', express.static('uploads'));
app.use('/api' , roomAvailabilityRouter)
app.use("/api" , emailRouter)
app.use("/api", getFacultyInfoRouter)
app.use('/api', bookingRouter)
app.use('/api', room)
app.use('/api', adminAuth)
app.use('/api', confirmRouter)

connectDB();

app.listen(port , () => {
    console.log(`backend activated at ${port}`);
}) 