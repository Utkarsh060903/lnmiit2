// import express from "express";
// import nodemailer from "nodemailer";
// import dotenv from 'dotenv';
// import Application from "../models/application.js";

// dotenv.config();

// const emailRouter = express.Router();

// // POST route to send email approval
// emailRouter.post('/send-email-approval', async (req, res) => {
//   const { studentName, studentRollNumber } = req.body;

//   // Initialize the application status as "pending"
//   const application = new Application({ studentName, studentRollNumber, status: "pending" });
//   await application.save();

//   // Create transporter for sending email
//   const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//       user: process.env.EMAIL,
//       pass: process.env.EMAIL_PASSWORD
//     }
//   });

//   // Set up email options
//   const mailOptions = {
//     from: process.env.EMAIL,
//     to: 'utkarsh060903@gmail.com',
//     subject: 'New Guest House Application Forwarded',
//     html: `
//       <p>studentName: ${studentName}</p>
//       <p>Roll Number: ${studentRollNumber}</p>
//       <p>Please review the guest house application.</p>
//       <p>
//         <a href="http://localhost:4001/api/approve?rollNumber=${studentRollNumber}" 
//            style="padding: 8px 16px; color: white; background-color: green; text-decoration: none; border-radius: 4px;">
//            Approve
//         </a>
//         <a href="http://localhost:4001/api/deny?rollNumber=${studentRollNumber}" 
//            style="padding: 8px 16px; color: white; background-color: red; text-decoration: none; border-radius: 4px; margin-left: 10px;">
//            Deny
//         </a>
//       </p>
//     `
//   };

//   // Send the email
//   try {
//     const info = await transporter.sendMail(mailOptions);
//     res.status(200).json({ success: true, message: 'Email sent', info });
//   } catch (error) {
//     res.status(500).json({ success: false, message: 'Failed to send email', error });
//   }
// });

// // GET route to approve application
// emailRouter.get('/approve', async (req, res) => {
//   const { rollNumber } = req.query;

//   try {
//     await Application.findOneAndUpdate(
//       { studentRollNumber: rollNumber },
//       { status: "granted" }
//     );
//     res.send("Application approved.");
//   } catch (error) {
//     res.status(500).send("Error updating application status.");
//   }
// });

// // GET route to deny application
// emailRouter.get('/deny', async (req, res) => {
//   const { rollNumber } = req.query;

//   try {
//     await Application.findOneAndUpdate(
//       { studentRollNumber: rollNumber },
//       { status: "rejected" }
//     );
//     res.send("Application denied.");
//   } catch (error) {
//     res.status(500).send("Error updating application status.");
//   }
// });

// // Route to get all applications with studentName, roll number, and status
// emailRouter.get('/applications', async (req, res) => {
//   try {
//     const applications = await Application.find({}, 'studentName studentRollNumber status');
//     res.status(200).json(applications);
//   } catch (error) {
//     res.status(500).json({ success: false, message: 'Failed to fetch applications', error });
//   }
// });

// export default emailRouter;

// import express from "express";
// import nodemailer from "nodemailer";
// import dotenv from 'dotenv';
// import Application from "../models/application.js";

// dotenv.config();

// const emailRouter = express.Router();

// // POST route to send email approval
// emailRouter.post('/send-email-approval', async (req, res) => {
//   const { studentName, studentRollNumber } = req.body;

//   // Check if studentName and studentRollNumber are provided
//   if (!studentName || !studentRollNumber) {
//     return res.status(400).json({ success: false, message: 'studentName and studentRollNumber are required.' });
//   }

//   // Initialize the application status as "pending"
//   const application = new Application({ studentName, studentRollNumber, status: "pending" });
//   await application.save();

//   // Create transporter for sending email
//   const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//       user: process.env.EMAIL,
//       pass: process.env.EMAIL_PASSWORD
//     }
//   });

//   // Set up email options
//   const mailOptions = {
//     from: process.env.EMAIL,
//     to: 'utkarsh060903@gmail.com',
//     subject: 'New Guest House Application Forwarded',
//     html: `
//       <p>Student Name: ${studentName}</p>
//       <p>Roll Number: ${studentRollNumber}</p>
//       <p>Please review the guest house application.</p>
//       <p>
//         <a href="http://localhost:4001/api/approve?rollNumber=${studentRollNumber}" 
//            style="padding: 8px 16px; color: white; background-color: green; text-decoration: none; border-radius: 4px;">
//            Approve
//         </a>
//         <a href="http://localhost:4001/api/deny?rollNumber=${studentRollNumber}" 
//            style="padding: 8px 16px; color: white; background-color: red; text-decoration: none; border-radius: 4px; margin-left: 10px;">
//            Deny
//         </a>
//       </p>
//     `
//   };

//   // Send the email
//   try {
//     const info = await transporter.sendMail(mailOptions);
//     res.status(200).json({ success: true, message: 'Email sent', info });
//   } catch (error) {
//     res.status(500).json({ success: false, message: 'Failed to send email', error });
//   }
// });

// // GET route to approve application
// emailRouter.get('/approve', async (req, res) => {
//   const { rollNumber } = req.query;

//   try {
//     await Application.findOneAndUpdate(
//       { studentRollNumber: rollNumber },
//       { status: "granted" }
//     );
//     res.send("Application approved.");
//   } catch (error) {
//     res.status(500).send("Error updating application status.");
//   }
// });

// // GET route to deny application
// emailRouter.get('/deny', async (req, res) => {
//   const { rollNumber } = req.query;

//   try {
//     await Application.findOneAndUpdate(
//       { studentRollNumber: rollNumber },
//       { status: "rejected" }
//     );
//     res.send("Application denied.");
//   } catch (error) {
//     res.status(500).send("Error updating application status.");
//   }
// });

// // Route to get all applications with studentName, roll number, and status
// emailRouter.get('/applications', async (req, res) => {
//   try {
//     const applications = await Application.find({}, 'studentName studentRollNumber status');
//     res.status(200).json(applications);
//   } catch (error) {
//     res.status(500).json({ success: false, message: 'Failed to fetch applications', error });
//   }
// });

// export default emailRouter;

// import express from "express";
// import nodemailer from "nodemailer";
// import dotenv from 'dotenv';
// import Application from "../models/application.js";

// dotenv.config();

// const emailRouter = express.Router();

// // POST route to send email approval
// emailRouter.post('/send-email-approval', async (req, res) => {
//   const { studentName, studentRollNumber } = req.body;
//   console.log("Received data:", req.body); // Log the received data for debugging

//   // Check if studentName and studentRollNumber are provided
//   if (!studentName || !studentRollNumber) {
//     return res.status(400).json({ success: false, message: 'studentName and studentRollNumber are required.' });
//   }

//   // Initialize the application status as "pending"
//   const application = new Application({ studentName, studentRollNumber, status: "pending" });
//   await application.save();

//   // Create transporter for sending email
//   const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//       user: process.env.EMAIL,
//       pass: process.env.EMAIL_PASSWORD
//     }
//   });

//   // Set up email options
//   const mailOptions = {
//     from: process.env.EMAIL,
//     to: 'utkarsh060903@gmail.com', // Replace with actual recipient email
//     subject: 'New Guest House Application Forwarded',
//     html: `
//       <p>Student Name: ${studentName}</p>
//       <p>Roll Number: ${studentRollNumber}</p>
//       <p>Please review the guest house application.</p>
//       <p>
//         <a href="http://localhost:4001/api/approve?rollNumber=${studentRollNumber}" 
//            style="padding: 8px 16px; color: white; background-color: green; text-decoration: none; border-radius: 4px;">
//            Approve
//         </a>
//         <a href="http://localhost:4001/api/deny?rollNumber=${studentRollNumber}" 
//            style="padding: 8px 16px; color: white; background-color: red; text-decoration: none; border-radius: 4px; margin-left: 10px;">
//            Deny
//         </a>
//       </p>
//     `
//   };

//   // Send the email
//   try {
//     const info = await transporter.sendMail(mailOptions);
//     res.status(200).json({ success: true, message: 'Email sent', info });
//   } catch (error) {
//     console.error("Error sending email:", error); // Log the error for debugging
//     res.status(500).json({ success: false, message: 'Failed to send email', error });
//   }
// });

// // GET route to approve application
// emailRouter.get('/approve', async (req, res) => {
//   const { rollNumber } = req.query;

//   try {
//     await Application.findOneAndUpdate(
//       { studentRollNumber: rollNumber },
//       { status: "granted" }
//     );
//     res.send("Application approved.");
//   } catch (error) {
//     res.status(500).send("Error updating application status.");
//   }
// });

// // GET route to deny application
// emailRouter.get('/deny', async (req, res) => {
//   const { rollNumber } = req.query;

//   try {
//     await Application.findOneAndUpdate(
//       { studentRollNumber: rollNumber },
//       { status: "rejected" }
//     );
//     res.send("Application denied.");
//   } catch (error) {
//     res.status(500).send("Error updating application status.");
//   }
// });

// // Route to get all applications with studentName, roll number, and status
// emailRouter.get('/applications', async (req, res) => {
//   try {
//     const applications = await Application.find({}, 'studentName studentRollNumber status');
//     res.status(200).json(applications);
//   } catch (error) {
//     res.status(500).json({ success: false, message: 'Failed to fetch applications', error });
//   }
// });

// export default emailRouter;

import express from "express";
import nodemailer from "nodemailer";
import dotenv from 'dotenv';
import Application from "../models/application.js";

dotenv.config();

const emailRouter = express.Router();

// POST route to send email approval
emailRouter.post('/send-email-approval', async (req, res) => {
  const { studentName, studentRollNumber } = req.body;
  console.log("Received data:", req.body); // Log the received data for debugging

  // Check if studentName and studentRollNumber are provided
  if (!studentName || !studentRollNumber) {
    return res.status(400).json({ success: false, message: 'studentName and studentRollNumber are required.' });
  }

  // Initialize the application status as "pending"
  const application = new Application({ studentName, studentRollNumber, status: "pending" });
  await application.save();

  // Create transporter for sending email
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  // Set up email options
  const mailOptions = {
    from: process.env.EMAIL,
    to: 'utkarsh060903@gmail.com', // Replace with actual recipient email
    subject: 'New Guest House Application Forwarded',
    html: `
      <p>Student Name: ${studentName}</p>
      <p>Roll Number: ${studentRollNumber}</p>
      <p>Please review the guest house application.</p>
      <p>
        <a href="http://localhost:4001/api/approve?rollNumber=${studentRollNumber}" 
           style="padding: 8px 16px; color: white; background-color: green; text-decoration: none; border-radius: 4px;">
           Approve
        </a>
        <a href="http://localhost:4001/api/deny?rollNumber=${studentRollNumber}" 
           style="padding: 8px 16px; color: white; background-color: red; text-decoration: none; border-radius: 4px; margin-left: 10px;">
           Deny
        </a>
      </p>
    `,
  };

  // Send the email
  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error("Error sending email:", error); // Log the error for debugging
    res.status(500).json({ success: false, message: 'Failed to send email', error: error.message });
  }
});

// GET route to approve application
emailRouter.get('/approve', async (req, res) => {
  const { rollNumber } = req.query;

  if (!rollNumber) {
    return res.status(400).send("Roll number is required.");
  }

  try {
    const application = await Application.findOneAndUpdate(
      { studentRollNumber: rollNumber },
      { status: "granted" },
      { new: true } // Return the updated document
    );
    
    if (!application) {
      return res.status(404).send("Application not found.");
    }
    res.send("Application approved.");
  } catch (error) {
    console.error("Error updating application status:", error);
    res.status(500).send("Error updating application status.");
  }
});

// GET route to deny application
emailRouter.get('/deny', async (req, res) => {
  const { rollNumber } = req.query;

  if (!rollNumber) {
    return res.status(400).send("Roll number is required.");
  }

  try {
    const application = await Application.findOneAndUpdate(
      { studentRollNumber: rollNumber },
      { status: "rejected" },
      { new: true } // Return the updated document
    );

    if (!application) {
      return res.status(404).send("Application not found.");
    }
    res.send("Application denied.");
  } catch (error) {
    console.error("Error updating application status:", error);
    res.status(500).send("Error updating application status.");
  }
});

// Route to get all applications with studentName, roll number, and status
emailRouter.get('/applications', async (req, res) => {
  try {
    const applications = await Application.find({}, 'studentName studentRollNumber status');
    res.status(200).json(applications);
  } catch (error) {
    console.error("Failed to fetch applications:", error);
    res.status(500).json({ success: false, message: 'Failed to fetch applications', error: error.message });
  }
});

export default emailRouter;
