import { login } from "@/actions/auth";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Login = () => {
  return (
    <Card className="mt-10 max-w-md w-full mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl">Login</CardTitle>
        <CardDescription>Enter your email below to login to your account</CardDescription>
      </CardHeader>
      <form action={login}>
        <CardContent>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" placeholder="example@gmail.com" type="email" name="email" />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <Link href="#" className="ml-auto inline-block text-sm underline">
                  Forgot your password?
                </Link>
              </div>
              <Input
                id="password"
                placeholder="***********"
                type="password"
                name="password"
                className="mb-5"
              />
            </div>
            <Button type="submit" className="w-full">
              Login
            </Button>

            <div className="relative flex justify-center items-center">
              <span className="text-neutral-800 dark:text-neutral-300 text-lg bg-card z-10">
                or
              </span>
              <span className="w-full h-px  absolute left-0 top-1/2 translate-y-1/2" />
            </div>

            <div className="flex gap-4 mb-2">
              <Button variant="outline" type="button" className="w-full">
                <Image
                  src="/google.svg"
                  className="h-4 w-4 text-neutral-800 dark:text-neutral-300 mr-2"
                  width={50}
                  height={50}
                  alt="google"
                />
                Google
              </Button>
              <Button variant="outline" type="button" className="w-full">
                <Github className="h-4 w-4 text-neutral-800 dark:text-neutral-300 mr-2" />
                Github
              </Button>
            </div>
          </div>
          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{" "}
            <Link href="/register" className="underline">
              Sign up
            </Link>
          </div>
        </CardContent>
      </form>
    </Card>
  );
};

export default Login;
