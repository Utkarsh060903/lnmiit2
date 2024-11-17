import express from "express";
import Application from "../models/application.js";

const room = express.Router();

room.get("/applications", async (req, res) => {
    try {
      const applications = await Application.find({}); // Fetch all documents
      console.log("Fetched Applications:", applications); 
      res.status(200).json({ success: true, data: applications }); // Consistent response format
    } catch (error) {
      console.error("Error fetching applications:", error);
      res.status(500).json({ success: false, message: "Error fetching data" });
    }
  });
  
room.get("/applications/:id", async (req, res) => {
    try {
      const applications = await Application.findById(req.params.id);
      console.log("Fetched Applications:", applications); 
      res.status(200).json(applications);
    } catch (error) {
      console.error("Error fetching applications:", error);
      res.status(500).json({ success: false, message: "Error fetching data" });
    }
  });

room.delete("/applications/:id", async (req, res) => {
  try {
    const result = await Application.findByIdAndDelete(req.params.id);
    if (result) {
      res.status(200).json({ success: true, message: "Application deleted" });
    } else {
      res.status(404).json({ success: false, message: "Application not found" });
    }
  } catch (error) {
    console.error("Error deleting application:", error);
    res
      .status(500)
      .json({ success: false, message: "Error deleting application" });
  }
});

room.patch("/applications/:id", async (req, res) => {
  const { roomNumber } = req.body;

  if (!roomNumber) {
    return res
      .status(400)
      .json({ success: false, message: "Room number is required" });
  }

  try {
    const isRoomTaken = await Application.findOne({ roomNumbers: roomNumber });
    if (isRoomTaken) {
      return res
        .status(400)
        .json({ success: false, message: "Room is already allotted" });
    }

    const application = await Application.findById(req.params.id);
    if (!application) {
      return res
        .status(404)
        .json({ success: false, message: "Application not found" });
    }

    // Update the application details
    application.roomNumbers = roomNumber;
    application.status = "granted";
    await application.save();

    res
      .status(200)
      .json({ success: true, message: "Room allotted successfully" });
  } catch (error) {
    console.error("Error in PATCH /applications/:id:", error);
    res.status(500).json({
      success: false,
      message: "Error allotting room",
      error: error.message,
    });
  }
});

export default room;
