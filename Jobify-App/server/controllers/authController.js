import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
const salt = 10;
import Candidate from '../models/Candidate.js';
import dotenv from 'dotenv';
dotenv.config();

export const signup = async(req, res) => {
    try{
        const user = req.body;
        if(!user.name || !user.email || !user.password){
            return res.status(400).json({error:"Name, Email and Password are required"})
        }else{
            const existingUser = await Candidate.findOne({ email: user.email})
            if(existingUser) return res.status(400).json({error:"Email already registered."})
            else {
                const hashedPwd = await bcrypt.hash(user.password, salt);
                const newCandidate = await Candidate.create({
                    name:user.name,
                    email:user.email,
                    password:hashedPwd,
                    role:user.role==="admin"? "admin" : "candidate"
                });
                res.status(201).json(newCandidate);
            }
        }
    }catch(err){
        res.status(500).json({error: "Server Error", e:err});
    }
}

export const login = async(req,res) => {
    console.log("LOGIN CONTROLLER HIT");
    try{
        const user = req.body;
        if(!user.email || !user.password){
            return res.status(400).json({error: "Email and Password are required!!"});
        }
        const existingUser = await Candidate.findOne({email:user.email})
        if(!existingUser){
            return res.status(400).json({error: "Email not found."})
        }
        const isMatch = await bcrypt.compare(user.password, existingUser.password);
        if(!isMatch) return res.status(401).json({error: "Invalid Password"});
        const tokenUser = {id:existingUser._id, name:existingUser.name, role:existingUser.role}
        const token = jwt.sign(
            tokenUser,
            process.env.JWT_SECRET,
            {expiresIn: "7d"}
        )
        res.json({token: token, user:existingUser})
    }catch (err) {
        console.error(err);
        return res.status(500).json({
            error: "Server Error",
            e: err.message
        });
    }
}