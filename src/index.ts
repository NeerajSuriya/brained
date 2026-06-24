import express from 'express';
import jwt from 'jsonwebtoken';
import { signinSchema, signupSchema } from './schemas/auth';
import dotenv from "dotenv";
import { UserModel } from './db';
import bcrypt from "bcrypt";
dotenv.config()

const app = express();
app.use(express.json())

app.post("/api/v1/signup", async (req,res) => { //zod, hash, status codes
    const parsed = signupSchema.safeParse(req.body)
    console.log(parsed)

    if(!parsed.success){
        return res.status(401).json({
            error: parsed.error.issues,
            message:"Invalid Inputs"
        })
    }

    const {username, password, name} = req.body
    const hashedPassword = await bcrypt.hash(password,10)
    console.log(hashedPassword)

    try{
        await UserModel.create({
            username,
            password: hashedPassword,
            name
        })

        res.status(201).json({
            message:"User has been added"
        })
    } catch(err){
        return res.status(409).json({
            message:"User already exists"
        })
    }

})

app.post("/api/v1/signin", async (req,res) => {
    const parsed = signinSchema.safeParse(req.body)

    if(!parsed){
        return res.status(401).json({
            message:"Invalid Inputs"
        })
    }

    const {username, password} = req.body
    const existingUser = await UserModel.findOne({
        username
    })
    if(!existingUser){
        return res.status(401).json({
            message: "Invalid credentials"
        })
    } 
    const existingPassword = await bcrypt.compare(
        password,
        existingUser.password
    );
    if(!existingPassword){
        return res.status(401).json({
            message: "Invalid credentials"
     })} else {
        const token = jwt.sign({
            id: existingUser.id
        },process.env.JWT_PASSWORD!)
        res.json({
            token: token
        })
    }
})

app.post("/api/v1/content", (req,res) => {
    

})

app.get("/api/v1/content", (req,res) => {
    

})

app.delete("/api/v1/content", (req,res) => {
    

})

app.delete("/api/v1/brain/share", (req,res) => {
    

})

app.get("/api/v1/brain/:sharelink", (req,res) => {
    

})


app.listen(3000, () => {
    console.log("Server is running on port 3000");
})