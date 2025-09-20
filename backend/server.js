import express from 'express';
import cors from 'cors';
import { connectDB } from './config/db.js';
import foodRouter from './routes/foodRoute.js';


//app configuration
const app = express();
const port = 4000;

//middlewares
app.use(cors());
app.use(express.json());

// DB Connection
connectDB();

// api routes
app.use('/api/food', foodRouter);
// app.use('/images',express.static('uploads'));


app.get('/', (req, res) => {
    res.send('Hello from backend');
});

app.listen(port, ()=>{
    console.log(`Server running on http://localhost:${port}`);
});

