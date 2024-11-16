// import mongoose from "mongoose";

// const applicationSchema = new mongoose.Schema({
//   studentName: {
//     type: String,
//     required: true
//   },

//   studentRollNumber: {
//     type: String,
//     required: true,
//     unique: true
//   },

//   roomNumber: {
//     type: String,
//     required: true
//   },

//   status: {
//     type: String,
//     enum: ["pending", "granted", "rejected"],
//     default: "pending"
//   },

//   createdAt: {
//     type: Date,
//     default: Date.now
//   }
  
// });

// const Application = mongoose.model("Application", applicationSchema);

// export default Application;

const applicationSchema = new mongoose.Schema({
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
    type: [String], // Array to store multiple room numbers
    default: [],
  },
  status: {
    type: String,
    enum: ["pending", "granted", "rejected"],
    default: "pending",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Application = mongoose.model("Application", applicationSchema);
export default Application;
