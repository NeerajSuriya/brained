import {Model, Schema} from 'mongoose';
import dotenv from "dotenv";
import mongoose from 'mongoose';
import { z } from 'zod';

dotenv.config();
mongoose.connect(process.env.MONGO_URL!).then(() => {
    console.log("Connected to MongoDB");
}).catch((err) => {
    console.log("Error connecting to MongoDB", err);
})

const UserSchema = new Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    name: { type: String, required: true }
})

export const UserModel = mongoose.model("User", UserSchema);
