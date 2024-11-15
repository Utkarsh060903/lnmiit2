import express from "express"
import Application from "../models/application.js";

const room = express.Router()

room.get("/applications", async (req, res) => {
    try {
      const applications = await Application.find();
      res.status(200).json(applications);
    } catch (error) {
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
      res.status(500).json({ success: false, message: "Error deleting application" });
    }
});
  
room.patch("/applications/:id", async (req, res) => {
    const { roomNumber } = req.body;
  
    if (!roomNumber) {
      return res.status(400).json({ success: false, message: "Room number is required" });
    }
  
    try {
      const application = await Application.findById(req.params.id);
  
      if (!application) {
        return res.status(404).json({ success: false, message: "Application not found" });
      }
  
      const isRoomTaken = await Application.findOne({ roomNumber });
      if (isRoomTaken) {
        return res.status(400).json({ success: false, message: "Room is already allotted" });
      }
  
      application.roomNumber = roomNumber;
      application.status = "Granted";
      await application.save();
  
      res.status(200).json({ success: true, message: "Room allotted successfully" });
    } catch (error) {
      res.status(500).json({ success: false, message: "Error allotting room" });
    }
});

export default room