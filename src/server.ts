import dotenv from 'dotenv';
import express from 'express';
dotenv.config();

const app = express()

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
// app.use(require('./routes/user'));
app.get('/', (req, res) => {
    res.send('Hello World!')
})

export default app