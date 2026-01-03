import express from 'express';
import dotenv from 'dotenv';
import {connectDB} from '../src/lib/db.lib.js';
import usersRoute from '../src/routes/users.route.js'
import cors from 'cors'

const app = express();


dotenv.config();

app.use(cors())
app.use(express.json())

app.use('/api/users', usersRoute)




const Port = process.env.PORT || 3000;
try{
    connectDB();
}catch(err){
    console.log(err.message)
}
export default app;