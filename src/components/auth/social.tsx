"use client";

import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";

type Pending = {
  isPending: boolean;
};
type Provider = "google" | "github";

const Social = ({ isPending }: Pending) => {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl");
  const socialSignIn = (provider: Provider) => {
    signIn(provider, {
      callbackUrl: callbackUrl || DEFAULT_LOGIN_REDIRECT,
    });
  };

  return (
    <div className="flex gap-4 mb-2">
      <Button
        disabled={isPending}
        variant="outline"
        type="submit"
        className="w-full"
        onClick={() => {
          socialSignIn("google");
        }}
      >
        <Image
          src="/google.svg"
          className="h-4 w-4 text-neutral-800 dark:text-neutral-300 mr-2"
          width={20}
          height={20}
          alt="google"
        />
        Google
      </Button>
      <Button
        disabled={isPending}
        variant="outline"
        type="submit"
        className="w-full"
        onClick={() => {
          socialSignIn("github");
        }}
      >
        <GitHubLogoIcon className="h-4 w-4 text-neutral-800 dark:text-neutral-300 mr-2" />
        Github
      </Button>
    </div>
  );
};

export default Social;
