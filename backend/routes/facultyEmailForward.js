import express from "express"
import nodemailer from "nodemailer"
import dotenv from 'dotenv';

dotenv.config();

const emailRouter = express.Router();

emailRouter.post('/send-faculty-email-approval', async (req, res) => {
  const { facultyEmployeeId } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.FACULTY_EMAIL,
      pass: process.env.FACULTY_EMAIL_PASSWORD
    }
  });

  const mailOptions = {
    from: 'utkarsh060903@gmail.com',
    to: 'utkarsh060903@gmail.com',
    subject: 'New Guest House Application Forwarded',
    text: `Roll Number: ${facultyEmployeeId}\n\nPlease review the guest house application.`
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: 'Email sent', info });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to send email', error });
  }
});

export default emailRouter