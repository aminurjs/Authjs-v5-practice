import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

const Home = async () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Secure Authentication with Auth.js v5</h1>

      {/* Section 1: Introduction */}
      <section className="mb-12">
        <Card>
          <CardHeader>
            <CardTitle>Welcome to Our Auth.js v5 Powered App</CardTitle>
            <CardDescription>Enjoy seamless and secure authentication</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700">
              Experience state-of-the-art authentication powered by Auth.js v5. Secure your account
              and access personalized features with ease.
            </p>
            <Button className="mt-4">
              <Link href="/register">Sign Up Now</Link>
            </Button>
          </CardContent>
        </Card>
      </section>

      {/* Section 2: Authentication Options */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Authentication Options</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card>
            <CardHeader>
              <CardTitle>Email & Password</CardTitle>
            </CardHeader>
            <CardContent>
              Create an account or sign in using your email and a secure password.
              <Button className="mt-4 w-full">
                <Link className="w-full" href="/login">
                  {" "}
                  Email Sign In
                </Link>
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Social Login</CardTitle>
            </CardHeader>
            <CardContent>
              Quickly sign in with your favorite social media accounts.
              <div className="flex gap-2 mt-4">
                <Button variant="outline" className="flex-1">
                  <Link href="/login">Google</Link>
                </Button>
                <Button variant="outline" className="flex-1">
                  <Link className="w-full" href="/login">
                    Github
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Section 3: Features */}
      <section>
        <Card className="bg-primary text-primary-foreground">
          <CardHeader>
            <CardTitle>Why Choose Our Auth Solution?</CardTitle>
            <CardDescription>Powered by Auth.js v5</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2">
              <li>Multi-factor authentication for enhanced security</li>
              <li>Seamless integration with Next.js applications</li>
              <li>Support for multiple authentication providers</li>
              <li>Easy session management and user data access</li>
            </ul>
            <Button variant="secondary" className="mt-4">
              Learn More
            </Button>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};
export default Home;
