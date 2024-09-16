import formModel from "../models/formModel.js";

const getInfo = async (req, res) => {
    try {
        const students = await formModel.find({});
        res.json({ success: true, data: students });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error });
    }
};

export { getInfo };