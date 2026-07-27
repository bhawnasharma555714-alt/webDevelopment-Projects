import { application } from 'express';
import mongoose from 'mongoose';

const candidateSchema = new mongoose.Schema({
    name: {type:String, required:true},
    email: {type:String, required:true},
    password: {type:String, required:true},
    role: {type:String, enum:["admin","candidate"], default:"candidate"},
    resumeText: {type:String, default:""},
    parsedSkills: {type:[String], default:[]},
    applications: [
        {
            jobId: {type: mongoose.Schema.Types.ObjectId, ref:"Job"},
            matchScore: {type:Number, default:null},
            aiFeedback: {type:Number, default:null},
            status: {type: String, default: "applied"}
        }
    ]
})

candidateSchema.set("toJSON", {  
  transform: (doc, ret) => {  
    ret.id = ret._id.toString();  
    delete ret._id;  
    delete ret.password;  
    delete ret.__v;  
  }  
});  

export default mongoose.model("Candidate", candidateSchema);