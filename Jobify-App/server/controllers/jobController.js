import Job from '../models/Jobs.js';

console.log("CONTROLLER LOADED");
export let getAllJobs = async(req, res)=>{
    try{
        const jobs = await Job.find();
        res.json(jobs);
    }catch(err){
        res.status(500).json({error:"Server Error cannot find Jobs"});
    }
}

// http://localhost:3000/api/jobs/1
export let getJobById = async(req, res)=>{  
    try{
        const job = await Job.findById(req.params.id);
        if(!job) return res.status(404).json({error : "Job Not Found!!"});
        res.json(job);
    }catch(err){
        res.status(500).json({error:"Server Error: cannot find by id: #"+req.params.id});
    }
}   

// http://localhost:3000/api/jobs
export let createJob = async(req, res)=>{  
    try{
        let user_input = req.body;
        if(!user_input.title || !user_input.company){
            return res.status(400).json({error:"Title and company are required"});
        }
        const newJob = await Job.create(user_input);
        res.status(201).json(newJob);
    }catch(error){
        res.status(500).json({error: "Server error: can not create Job"});
    }
}

