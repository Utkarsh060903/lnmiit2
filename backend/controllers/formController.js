import formModel from "../models/formModel.js";

const form = async (req, res) => {
  const {
    studentName,
    studentRollNumber,
    studentDepartment,
    studentMobileNumber,
    photo,
    numberOfMales,
    numberOfFemales,
    numberOfChildren,
    guestMobileNumber,
    guestName,
    numberOfRooms,
    arrivalDate,
    departureDate,
    arrivalTime,
    guestRelation,
    guestPurpose,
    gender,
  } = req.body;

  try {
    if (!req.file) {
      return res
        .status(400)
        .json({ success: false, message: "Photo is required" });
    }
    const newRequest = new formModel({
      studentName: studentName,
      studentRollNumber: studentRollNumber,
      studentDepartment: studentDepartment,
      studentMobileNumber: studentMobileNumber,
      numberOfMales: numberOfMales,
      numberOfFemales: numberOfFemales,
      numberOfChildren: numberOfChildren,
      guestMobileNumber: guestMobileNumber,
      guestName: guestName,
      numberOfRooms: numberOfRooms,
      photo: req.file.filename,
      guestRelation: guestRelation,
      guestPurpose: guestPurpose,
      arrivalDate: arrivalDate,
      departureDate: departureDate,
      arrivalTime: arrivalTime,
      gender: gender,
    });
    const request = await newRequest.save();
    res.json({ success: true, message: "Successfully form submitted" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

export { form };
