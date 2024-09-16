import express from 'express';
import multer from 'multer';
import { facultyForm } from '../controllers/facultyFormController.js';

const facultyformRouter = express.Router();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const upload = multer({ storage: storage });

facultyformRouter.post('/facultyform', upload.single('photo'), facultyForm);

export default facultyformRouter;
