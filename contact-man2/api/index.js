import express from 'express';
import dotenv from 'dotenv';
import {connectDB} from '../src/lib/db.lib.js';
import usersRoute from '../src/routes/users.route.js'
import cors from 'cors'

const app = express();


dotenv.config();

app.use(cors(
    {
        origin: "https://contact-management-app-flax.vercel.app", 
        credentials: true
    }
))
app.use(express.json())

app.use('/api/users', usersRoute)




const Port = process.env.PORT || 3000;
connectDB()
export default app;