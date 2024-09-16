import express from "express"
import nodemailer from "nodemailer"
import dotenv from 'dotenv';

dotenv.config();

const emailRouter = express.Router();

// POST route to send email
emailRouter.post('/send-email-approval', async (req, res) => {
  const { studentRollNumber } = req.body;

  // Create a transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASSWORD
    }
  });

  // Set up email options
  const mailOptions = {
    from: 'utkarsh060903@gmail.com',
    to: 'utkarsh060903@gmail.com',
    subject: 'New Guest House Application Forwarded',
    text: `Roll Number: ${studentRollNumber}\n\nPlease review the guest house application.`
  };

  // Send the email
  try {
    const info = await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: 'Email sent', info });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to send email', error });
  }
});

export default emailRouter