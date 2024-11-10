import facultyFormModel from "../models/facultyform.js";

const getfacultyInfo = async (req, res) => {
    try {
        const faculty = await facultyFormModel.find({});
        res.json({ success: true, data: faculty });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error });
    }
};

export { getfacultyInfo };