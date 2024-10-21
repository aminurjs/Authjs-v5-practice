"use client";

import React, { useState, useTransition } from "react";
import * as z from "zod";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { loginSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { FormError } from "@/components/form-error";
import { FormSuccess } from "@/components/form-success";
import { login } from "@/actions/login";
import Social from "./social";
import { useSearchParams } from "next/navigation";
import { Loader2 } from "lucide-react";

const LoginForm = () => {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl");
  const urlError =
    searchParams.get("error") === "OAuthAccountNotLinked"
      ? "Email is already use in different provider."
      : "";
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isTwoFactor, setIsTwoFactor] = useState<boolean | undefined>(false);
  const [isPending, setTransition] = useTransition();
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof loginSchema>) => {
    setError("");
    setSuccess("");

    setTransition(() => {
      login(values, callbackUrl)
        .then((data) => {
          if (data?.error) {
            form.reset();
            setError(data?.error);
          }
          if (data?.success) {
            form.reset();
            setSuccess(data?.success);
          }

          if (data?.twoFactor) {
            setIsTwoFactor(true);
          }
        })
        .catch(() => setError("Something went wrong"));
    });
  };

  const loginBack = () => {
    form.reset();
    setIsTwoFactor(false);
  };

  return (
    <Card className="mt-10 max-w-md w-full mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl">Login</CardTitle>
        <CardDescription>Enter your email below to login to your account</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              {isTwoFactor ? (
                <FormField
                  name="code"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Two factor code</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          disabled={isPending}
                          type="text"
                          inputMode="numeric"
                          pattern="[0-9]*"
                          placeholder="123456"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              ) : (
                <>
                  {" "}
                  <FormField
                    name="email"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            disabled={isPending}
                            type="email"
                            placeholder="john.doe@example.com"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    name="password"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel htmlFor="password">Password</FormLabel>

                        <FormControl>
                          <Input
                            {...field}
                            disabled={isPending}
                            type="password"
                            placeholder="******"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="flex items-center justify-end">
                    <Link href="/auth/reset" className="ml-auto inline-block text-sm underline">
                      Forgot your password?
                    </Link>
                  </div>
                </>
              )}
              <FormError message={error || urlError} />
              <FormSuccess message={success} />
              <Button disabled={isPending} type="submit" className="w-full mt-6">
                {!isPending ? (
                  isTwoFactor ? (
                    "Confirm"
                  ) : (
                    "Login"
                  )
                ) : (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Please wait
                  </>
                )}
              </Button>
            </form>
          </Form>
          {!isTwoFactor && (
            <>
              {" "}
              <div className="relative flex justify-center items-center">
                <span className="text-neutral-800 dark:text-neutral-300 text-lg bg-card z-10">
                  or
                </span>
                <span className="w-full h-px  absolute left-0 top-1/2 translate-y-1/2" />
              </div>
              <Social isPending={isPending} />
            </>
          )}
        </div>
      </CardContent>
      {!isTwoFactor ? (
        <CardFooter className="flex justify-center">
          Don&apos;t have an account?{" "}
          <Link href="/auth/register" className="underline">
            Sign up
          </Link>
        </CardFooter>
      ) : (
        <CardFooter className="flex justify-center">
          <Button variant="link" onClick={loginBack}>
            Back to Login
          </Button>
        </CardFooter>
      )}
    </Card>
  );
};

export default LoginForm;
