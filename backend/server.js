import express from 'express'
import { connect } from 'mongoose';
import { connectDB } from './config/db.js';
import cors from 'cors'
import userRouter from './routes/userRoute.js';
import formRouter from './routes/formRoute.js';
import dotenv from 'dotenv'
import getInfoRouter from './routes/getInfoRoute.js';
import forgotPassRouter from './routes/forgotPasswordRoute.js';
import facultyformRouter from './routes/facultyFomRouter.js';
import roomAvailabilityRouter from './routes/roomAvailabilityRoute.js';
const app = express()

dotenv.config();

const port = 4001;

app.use(express.json())
app.use(cors())

app.use('/api/user' , userRouter)
app.use('/api' , formRouter)
app.use('/api' , facultyformRouter)
app.use('/api' , getInfoRouter)
app.use('/api' , forgotPassRouter)
app.use('/uploads', express.static('uploads'));
app.use('/api' , roomAvailabilityRouter)

connectDB();

app.listen(port , () => {
    console.log(`backend activated at ${port}`);
}) 

