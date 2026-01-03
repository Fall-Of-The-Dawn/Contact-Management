import express from 'express';
import dotenv from 'dotenv';
import {connectDB} from './lib/db.lib.js';
import usersRoute from './routes/users.route.js'
import cors from 'cors'

const app = express();


dotenv.config();

app.use(cors(
    {
    origin: "https://contact-management-sepia-omega.vercel.app/",
    credentials: true
    }
))
app.use(express.json())

app.use('/api/users', usersRoute)




const Port = process.env.PORT || 3000;
try{
    connectDB();
}catch(err){
    console.log(err.message)
}
app.listen(Port, () => console.log(`Server running on port ${Port}`)); 