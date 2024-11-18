import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema(
  {
    studentName: {
      type: String,
      required: true,
    },

    studentRollNumber: {
      type: String,
      required: true,
      unique: true,
    },

    roomNumbers: {
      type: String, 
      default: "not alloted",
    },

    status: {
      type: String,
      enum: ["pending", "granted", "rejected"],
      default: "pending",
    },
  },
  {
    timestamps: true,
  }
);

const Application = mongoose.model("Application", applicationSchema);
export default Application;
