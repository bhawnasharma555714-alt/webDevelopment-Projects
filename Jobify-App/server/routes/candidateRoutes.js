import express from 'express';
import { verifyToken } from '../middleware/auth.js';
import {applyToJob, getMyProfile} from '../controllers/candidateController.js';

const router = express.Router();
// router.post("/apply",verifyToken,applyToJob);
router.post("/apply", (req, res, next) => {
    console.log("Apply route hit");
    next();
}, verifyToken, applyToJob);
router.get("/me",verifyToken,getMyProfile);

export default router;