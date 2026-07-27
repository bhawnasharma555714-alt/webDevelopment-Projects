import jwt from 'jsonwebtoken';

export const verifyToken = (req,res,next) => {
    const authHeader = req.headers.authorization;
    if(!authHeader){
        return res.status(401).json({error: "Not authorized Login first"});
    }
    const prefix = authHeader.substring(0,7); // substring(start,end) start=>included , end = not included
    if(!prefix || prefix != "Bearer "){
        return res.status(401).json({error: "Not authorized Login first"});
    }
    const token = authHeader.substring(7); //here end is last ele by default 
    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log("Decoded user:", decoded);
        req.user = decoded;
        next();
    }catch(err){
        return res.status(401).json({error: "Invalid or expired token"});
    }
}

export const requireAdmin = (req,res,next) => {
    if(req.user.role != "admin"){
        return res.status(403).json({error: "Admin Required"});
    }
    next();
}
