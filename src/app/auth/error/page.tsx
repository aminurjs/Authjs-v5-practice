import React from "react";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
import Link from "next/link";

const AuthErrorCard = () => {
  return (
    <div className="flex items-center justify-center h-[calc(100vh-120px)]">
      <Card className="w-[350px] mx-auto">
        <CardHeader>
          <CardTitle className="flex items-center text-red-600">
            <ExclamationTriangleIcon className="mr-2" />
            Something went wrong
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-600">
            There was a problem authenticating your account. Please try again.
          </p>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Link href="/auth/login">
            <Button variant="link">Back to Login</Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default AuthErrorCard;
