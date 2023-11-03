import express from 'express';
// import notFoundMiddleware from './middleware/not-found.js';
import path from 'path';
import dotenv from 'dotenv';
import authRouter from './routes/authRoutes.js';
import jobRouter from './routes/jobsRoutes.js';

dotenv.config()


const app = express();

//middleware
app.use(express.json());
app.use(express.static('frontend/build'));
app.get('*', (req, res) => {
    // const myPath = path.resolve(__dirname, 'frontend', 'build', 'index.html')
    // console.log('__dirname: ', __dirname);
    // console.log('My Path: ', myPath);
    // return res.sendFile(myPath);
    return res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
});

app.use('/api/accounts/signup', authRouter)
app.use('/api/v1/jobs', authRouter)

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server listening on port ${PORT}`));