import express from 'express';
// import {getAllJobs, getJobById, createJob} from './jobController.js';
import {getAllJobs, getJobById, createJob} from '../controllers/jobController.js';
import { middleware_usage } from '../middleware/demo_middleware.js';
import { verifyToken, requireAdmin } from '../middleware/auth.js';
const router = express.Router();

console.log("ROUTES FILE LOADED");

//GET all posts
router.get('/',verifyToken,getAllJobs)
//GET single post
router.get('/:id',verifyToken,getJobById)

//Post posts
router.post('/',verifyToken,requireAdmin,createJob)

export default router;