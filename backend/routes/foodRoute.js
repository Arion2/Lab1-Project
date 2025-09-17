import express from "express";
import { addFood } from "../controllers/foodController.js";
//import multer from "multer";

const foodRouter = express.Router();

// Image Storage Engine

// cb = callback
// const storage = multer.diskStorage({
//     destination: 'uploads',
//     filename: (req, file, cb) => {
//         return cb(null, `${Date.now()}${file.originalname}`)
//     }
// });

// const upload = multer({ storage: storage });    upload.single("image"),

// routes
foodRouter.post("/add", addFood);

export default foodRouter;