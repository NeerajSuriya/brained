import dotenv from "dotenv";
import mongoose from 'mongoose';

dotenv.config();
async function db(){
    await mongoose.connect(process.env.MONGO_URL!);
    console.log("connected");
}

db()