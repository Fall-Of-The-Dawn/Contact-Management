import express from 'express';
import dotenv from 'dotenv';
import {connectDB} from './lib/db.lib.js';
dotenv.config();

const app = express();

const Port = process.env.PORT || 3000;
try{
    connectDB();
}catch(err){
    console.log(err.message)
}

app.listen(Port, () => console.log(`Server running on port ${Port}`)); 