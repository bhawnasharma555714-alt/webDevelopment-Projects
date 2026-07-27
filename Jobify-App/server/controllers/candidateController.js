import Candidate from "../models/Candidate.js";

export const applyToJob = async(req, res) => {
    console.log("APPLY CONTROLLER HIT");
    console.log("req.user:", req.user);
    console.log("req.body:", req.body);
    try{
        const jobId = req.body.jobId;
        if(!jobId){
            return res.status(404).json({error: "Job Id is missing"});
        }

        const candidateId = req.user.id;
        const candidate = await Candidate.findById(candidateId);
        console.log(candidate);
        console.log(candidate.applications);
        if(!candidate){
            return res.status(404).json({error:"Candidate not found with id #"+candidateTd});
        }
        // const appliedApps = candidate.applications.filter((app) => app.jobTd.toString === jobTd);
        const appliedApps = candidate.applications.filter(
            app => app.jobId && app.jobId.toString() === jobId
        );

        console.log(appliedApps);
        console.log(appliedApps)
        if(appliedApps.length > 0){
            return res.status(400).json({error:"Already applied to this job."});
        }
        const currentJob = {
            jobId : jobId,
            matchScore: null,
            aiFeedback: null,
            status: "applied"
        }
        candidate.applications.push(currentJob);
        await candidate.save();
        console.log("Saved successfully!");
        res.status(201).json(candidate);
        console.log("Response sent");

    }catch (err) {
        console.error(err);

        return res.status(500).json({
            error: "Server error",
            message: err.message
        });
    }
}


export const getMyProfile = async(req,res) => {
    try{
        const candidateId = req.user.id;
        const candidate = await Candidate.findById(candidateId);
        return res.json(candidate);

    }catch(err){
        return res.status(500).json({error:"Server Error"}, err);
    }
}
