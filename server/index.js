import express from 'express';
import connectDB from './config/db.connect.js';
import dotenv from 'dotenv';
import cors from 'cors';
import morgan from 'morgan';
dotenv.config();
const app = express();
const port = process.env.PORT || 5000;
const corsOption = {
    origin: '*',
    credentials: true,
    optionSuccessStatus: 200,
};
//middlewares
app.use(cors(corsOption));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
//routes
app.get('/', (req, res) => {
    res.send('API is running...');
});
//connect to server
connectDB().then(() => {
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
}).catch((err) => {
    console.log('Failed to connect to the database', err);
});
//# sourceMappingURL=index.js.map