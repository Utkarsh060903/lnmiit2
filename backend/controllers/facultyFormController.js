import facultyFormModel from '../models/facultyform.js';

const facultyForm = async (req, res) => {
    const {
        facultyName,
        facultyEmployeeId,
        facultyDepartment,
        facultyMobileNumber,
        guests,
        arrivalDate,
        departureDate,
        arrivalTime,
        guestPurpose,
        guestRelation,
        numberOfRooms,
        guestName,
        guestMobileNumber,
        numberOfMales,
        numberOfFemales,
        numberOfChildren,
        gender
    } = req.body;

    try {
        if (!req.file) {
            return res.status(400).json({ success: false, message: 'Photo is required' });
        }
        
        const newRequest = new facultyFormModel({
            facultyName,
            facultyEmployeeId,
            facultyDepartment,
            facultyMobileNumber,
            photo: req.file.filename,
            guests,
            arrivalDate,
            departureDate,
            arrivalTime,
            guestPurpose,
            guestRelation,
            numberOfRooms,
            guestName,
            guestMobileNumber,
            numberOfMales,
            numberOfFemales,
            numberOfChildren,
            gender
        });

        const request = await newRequest.save();
        res.json({ success: true, message: 'Successfully form submitted' });

    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: 'Error submitting form' });
    }
};

export { facultyForm };
