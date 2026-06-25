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

const ContentSchema = new Schema({
    title: String,
    link: String,
    type: String,
    tags:[{type: mongoose.Types.ObjectId, ref: "Tags"}],
    userId:{type: mongoose.Types.ObjectId, ref: "User"}
})

export const ContentModel = mongoose.model("Content",ContentSchema)

const LinkSchema = new mongoose.Schema({
    hash:{ type: String, required: true, unique: true},
    userId:{type: mongoose.Types.ObjectId, ref: "User", required: true, unique: true}
})

export const LinkModel = mongoose.model("Link", LinkSchema)

const TagsSchema = new mongoose.Schema({
    type: String
})

export const TagsModel = mongoose.model("Tags", TagsSchema) 