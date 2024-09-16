// import express from 'express'
// import { form } from '../controllers/formController.js';
// import multer from 'multer';

// const formRouter = express.Router();

// const storage = multer.diskStorage({
//     destination: "uploads",
//     filename: (req,file,callback)=>{
//         return callback(null,`${Date.now()}${file.originalname}`)
//     }
// })

// const upload = multer({
//     storage: storage
// })

// formRouter.post('/form' ,upload.single("photo"), form)

// export default formRouter




import express from 'express';
import { form } from '../controllers/formController.js';
import multer from 'multer';

const formRouter = express.Router();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const upload = multer({ storage: storage });

formRouter.post('/form', upload.single('photo'), form);

export default formRouter;
