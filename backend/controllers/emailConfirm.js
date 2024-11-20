import nodemailer from "nodemailer"

const confirmEmail = async (req,res) => {
    const { email, name, roomNumber } = req.body;

    if (!email || !name || !roomNumber) {
      return res.status(400).json({ success: false, message: "Missing details" });
    }
  
    try {
      const transporter = nodemailer.createTransport({
        service: "Gmail", 
        auth: {
          user: process.env.EMAIL,
          pass: process.env.EMAIL_PASSWORD,
        },
      });
  
      const mailOptions = {
        from: "utkarsh060903@gmail.com",
        to: email,
        subject: "Room Allotment Confirmation",
        text: `Hello ${name},\n\nYour room has been successfully allotted.\nRoom Number: ${roomNumber}\n\nThank you!`,
      };
  
      await transporter.sendMail(mailOptions);
      res.status(200).json({ success: true, message: "Email sent successfully" });
    } catch (error) {
      res.status(500).json({ success: false, message: "Error sending email" });
    }
}

export {confirmEmail}