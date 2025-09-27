import User from "../models/userModel.js";
import type { Request } from "express";
import type { Response } from "express";
import jwt from "jsonwebtoken";

declare global {
    namespace Express {
        interface Request {
            user?: any;
        }
    }
}

//authmiddleware
export const authMiddleware = async (req: Request, res: Response, next: Function) => {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    if (!token) {
        return res.status(401).json({ message: 'Unauthorized', success: false });
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET as string);
        req.user = decoded;
        next();
    } catch (error) {
        res.status(401).json({ message: 'Unauthorized', success: false });
    }
};


export default authMiddleware;
