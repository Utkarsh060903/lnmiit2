import express from 'express';
import { getfacultyInfo} from '../controllers/getFacultInfoController.js';
import multer from 'multer';

const getFacultyInfoRouter = express.Router();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const upload = multer({ storage: storage });

getFacultyInfoRouter.get('/faculty-info',upload.single('photo') ,getfacultyInfo);

export default getFacultyInfoRouter;