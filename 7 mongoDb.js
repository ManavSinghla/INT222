import express from 'express';
import mongoose from 'mongoose';

const app = express();
const port = 4000;
app.use(express.json());
app.get('/', (req, res) => {
    res.send('Hello, World!');
})



mongoose.connect('mongodb://localhost:27017/mydatabase').then(() => {
    console.log('Connected to MongoDB');
})