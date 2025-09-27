import User from "../models/userModel.js";
import jwt from "jsonwebtoken";
//authmiddleware
export const authMiddleware = async (req, res, next) => {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    if (!token) {
        return res.status(401).json({ message: 'Unauthorized', success: false });
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    }
    catch (error) {
        res.status(401).json({ message: 'Unauthorized', success: false });
    }
};
export default authMiddleware;
//# sourceMappingURL=authMiddleware.js.map