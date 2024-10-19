import * as z from "zod";

export const newPasswordSchema = z.object({
  password: z.string().min(6, {
    message: "Minimum 6 characters required.",
  }),
});

export const resetSchema = z.object({
  email: z.string().min(1, { message: "Email is required." }).email("This is not a valid email."),
});

export const loginSchema = z.object({
  email: z.string().min(1, { message: "Email is required." }).email("This is not a valid email."),
  password: z.string().min(1, {
    message: "Password is required.",
  }),
});

export const registerSchema = z.object({
  email: z.string().min(1, { message: "Email is required." }).email("This is not a valid email."),
  password: z.string().min(6, {
    message: "Minimum 6 characters required.",
  }),
  name: z.string().min(1, {
    message: "Name is required.",
  }),
});
