import { z } from 'zod';

export const signupSchema = z.object({
    username: z
    .string()
    .min(8)
    .max(32),
    
    password: z
    .string()
    .min(8,{message:"Password must be atleast 8 characters long"})
    .max(32,{message:"Password must not exceed 32 characters long"})
    .regex(/[A-Z]/, { message: "Must contain at least one uppercase letter." })
    .regex(/[a-z]/, { message: "Must contain at least one lowercase letter." })
    .regex(/[0-9]/, { message: "Must contain at least one number." }),

    name: z
    .string()
    .min(3,{message:"Name must be atleast 3 characters long"})
    .max(32,{message:"Name must not exceed 32 characters long"})
})

export const signinSchema = z.object({
    username: z
    .string()
    .min(8)
    .max(32),
    
    password: z
    .string()
    .min(8,{message:"Password must be atleast 8 characters long"})
    .max(32,{message:"Password must not exceed 32 characters long"})
    .regex(/[A-Z]/, { message: "Must contain at least one uppercase letter." })
    .regex(/[a-z]/, { message: "Must contain at least one lowercase letter." })
    .regex(/[0-9]/, { message: "Must contain at least one number." })
})
