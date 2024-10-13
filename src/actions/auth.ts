"use server";

import { signIn } from "@/auth";
import { connectDB } from "@/lib/db";
import { User } from "@/models/user-models";
import { hash } from "bcryptjs";
import { CredentialsSignin } from "next-auth";
import { redirect } from "next/navigation";

const login = async (formData: FormData): Promise<void> => {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  try {
    await signIn("credentials", {
      redirect: false,
      callbackUrl: "/",
      email,
      password,
    });
  } catch (error) {
    const someError = error as CredentialsSignin;
    return console.log(someError.cause);
  }
  redirect("/dashboard");
};

const register = async (formData: FormData): Promise<void> => {
  const firstName = formData.get("firstname") as string;
  const lastName = formData.get("lastname") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  if (!firstName || !lastName || !email || !password) {
    return console.log("All fields are required");
  }

  await connectDB();

  const existingUser = await User.findOne({ email });

  if (existingUser) {
    return console.log("User already exists");
  }

  const hashedPassword = await hash(password, 12);

  const result = await User.create({ firstName, lastName, email, password: hashedPassword });

  if (result) {
    console.log("user created successfully");
    try {
      await signIn("credentials", {
        redirect: false,
        callbackUrl: "/",
        email,
        password,
      });
    } catch (error) {
      const someError = error as CredentialsSignin;
      return console.log(someError.cause);
    }
    redirect("/dashboard");
  }
};

export { login, register };
