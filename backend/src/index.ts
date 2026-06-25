import express from 'express';
import jwt from 'jsonwebtoken';
import { signinSchema, signupSchema } from './schemas/auth';
import dotenv from "dotenv";
import { ContentModel, LinkModel, UserModel, TagsModel } from './db';
import bcrypt from "bcrypt";
import crypto from "crypto"
import { UserMiddleware } from './middleware';
dotenv.config()

const app = express();
app.use(express.json())

app.post("/api/v1/signup", async (req,res) => { 
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
    const existingPassword = await bcrypt.compare(password,existingUser.password);
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

app.post("/api/v1/content", UserMiddleware, async (req,res) => {
    const title = req.body.title;
    const link = req.body.link;
    const type = req.body.type;
    try{
        await ContentModel.create({
        title,
        link,
        type,
        tags:[],
        // @ts-ignore
        userId: req.userId,
    })} catch(err){
        console.log(err)
    }
    res.json({
        message:"Content Added"
    })

})

app.get("/api/v1/content", UserMiddleware, async(req,res) => {
    //@ts-ignore
    const userId = req.userId;
    const content = await ContentModel.find({
        userId: userId
    }).populate("userId","username")
    res.json({
        content: content
    })
    

})

app.delete("/api/v1/content", UserMiddleware,async (req,res) => {
    const contentId = req.body.contentId

    await ContentModel.deleteMany({
        contentId, 
        //@ts-ignore
        userId: req.userId
    })

    res.json({
        message:"Deleted"
    })
})

app.post("/api/v1/brain/share", UserMiddleware,async (req,res) => {
    
    const existingLink = await LinkModel.findOne({
        //@ts-ignore
        userId: req.userId
    })

    if (existingLink){
        return res.json({
            hash: existingLink.hash
        })
    }

    const hash = crypto.randomBytes(10).toString("hex");

    const link = await LinkModel.create({
        hash,
        //@ts-ignore
        userId: req.userId
    });

    res.json({
        hash: link.hash
    })
})

app.get("/api/v1/brain/:sharelink", async (req,res) => {
    const hash = req.params.sharelink
    const link = await LinkModel.findOne({ hash })

    if(!link){
        return res.status(404).json({
            message:"Share Link not found"
        })
    }

    const content = await ContentModel.find({
        userId: link.userId
    }).populate("tags")

    res.json({
        content
    })

})


app.listen(3000, () => {
    console.log("Server is running on port 3000");
})