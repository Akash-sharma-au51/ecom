import User from "../models/userModel.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
// Register a new user
const registerUser = async (req, res) => {
    const { username, email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ message: 'User already exists', success: false });
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const newUser = await User.create({ username, email, password: hashedPassword });
        const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, { expiresIn: '1d' });
        res.status(201).json({
            message: "User registered successfully",
            success: true,
            token,
            data: {
                id: newUser._id,
                email: newUser.email
            }
        });
    }
    catch (error) {
        res.status(500).json({ message: 'internal server error', success: false });
        console.error(error);
    }
};
// Login a user
const loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'User not found', success: false });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials', success: false });
        }
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });
        res.status(200).json({
            message: 'User logged in successfully',
            success: true,
            token,
            data: {
                id: user._id,
                email: user.email
            }
        });
    }
    catch (error) {
        res.status(500).json({ message: 'Internal server error', success: false });
        console.error(error);
    }
};
const logoutUser = (req, res) => {
    try {
        res.clearCookie('token');
        res.status(200).json({ message: 'User logged out successfully', success: true });
    }
    catch (error) {
        res.status(500).json({ message: 'Internal server error', success: false });
        console.error(error);
    }
};
export { loginUser, logoutUser, registerUser };
//# sourceMappingURL=userController.js.map