import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Job from "../models/Jobs.js";
import seed_jobs_data from './seed_jobs_data.js';

dotenv.config();

mongoose.connect(process.env.MONGO_URI)
    .then(async()=>{
        console.log("Connected!!");
        await Job.deleteMany();
        await Job.insertMany(seed_jobs_data);
        console.log("Database seeded with sample data");
        process.exit(0);
    }).catch(function(e){
        console.log("MangoDb connection error");
        console.log(e);
    })