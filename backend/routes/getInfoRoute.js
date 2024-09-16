import express from 'express';
import { getInfo } from '../controllers/getInfoController.js';
import multer from 'multer';

const getInfoRouter = express.Router();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const upload = multer({ storage: storage });

getInfoRouter.get('/info',upload.single('photo') ,getInfo);

export default getInfoRouter;