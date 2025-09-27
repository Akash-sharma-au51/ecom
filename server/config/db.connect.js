import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const uri = process.env.MONGO_URI;
const connectDB = async () => {
    try {
        await mongoose.connect(uri);
        console.log('MongoDB connected successfully');
    }
    catch (error) {
        console.log('MongoDB connection failed');
    }
};
export default connectDB;
//# sourceMappingURL=db.connect.js.map