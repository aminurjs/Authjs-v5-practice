import { register } from "@/actions/auth";
import { auth } from "@/auth";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";

const Register = async () => {
  const session = await auth();
  if (session?.user) redirect("/dashboard");
  return (
    <Card className="mt-10 max-w-md w-full mx-auto">
      <CardHeader>
        <CardTitle className="text-xl"> Welcome to MyShop</CardTitle>
        <CardDescription> Please provide all the necessary information</CardDescription>
      </CardHeader>{" "}
      <form className="my-4" action={register}>
        <CardContent className="grid gap-4">
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
            <div className="flex flex-col">
              <Label htmlFor="firstname" className="mb-2">
                First Name
              </Label>
              <Input id="firstname" placeholder="John" type="text" name="firstname" />
            </div>
            <div className="flex flex-col">
              <Label htmlFor="lastname" className="mb-2">
                Last Name
              </Label>
              <Input id="lastname" placeholder="Doe" type="text" name="lastname" />
            </div>
          </div>

          <Label htmlFor="email">Email Address</Label>
          <Input id="email" placeholder="example@gmail.com" type="email" name="email" />

          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            placeholder="***********"
            type="password"
            name="password"
            className="mb-5"
          />
        </CardContent>{" "}
        <CardFooter className="flex flex-col gap-2">
          <Button className="w-full">Sign up &rarr;</Button>{" "}
          <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
            Already have an account?{" "}
            <Link href="/login" className="underline">
              Login
            </Link>
          </p>
        </CardFooter>{" "}
      </form>
    </Card>
  );
};

export default Register;
