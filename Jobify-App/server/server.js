import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import connectDb from './config/db.js';
//Routes import
import jobRoutes from './routes/jobRoutes.js';
import authRoutes from './routes/authRoutes.js';
import candidateRoutes from './routes/candidateRoutes.js';

dotenv.config();

const port = process.env.PORT;

connectDb();

let server = express();
server.use(cors({
    origin:[
        "http://localhost:5173"
    ]
}));

//Body Parser middleware
server.use(express.json()); //for row json post
server.use(express.urlencoded({extended:false})); //for x-www-form-urlencoded
 
server.use('/api/jobs',jobRoutes);
server.use('/api/auth',authRoutes);
server.use('/api/candidate',candidateRoutes);
server.listen(port, ()=> console.log(`Server running on PORT : ${port}`));  