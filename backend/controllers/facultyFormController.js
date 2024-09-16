import facultyFormModel from '../models/facultyform.js';

const facultyForm = async (req, res) => {
    const { name, employeeId, department, phoneno, guests, arrivalDate, departureDate, arrivalTime } = req.body;

    try {
        if (!req.file) {
            return res.status(400).json({ success: false, message: 'Photo is required' });
        }
        const newRequest = new facultyFormModel({
            name: name,
            employeeId: employeeId,
            department: department,
            phoneno: phoneno,
            photo: req.file.filename,
            guests: guests,
            arrivalDate: arrivalDate,
            departureDate: departureDate,
            arrivalTime: arrivalTime
        });
        const request = await newRequest.save();
        res.json({ success: true, message: 'Successfully form submitted' });

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: 'Error' });
    }
};

export { facultyForm};
