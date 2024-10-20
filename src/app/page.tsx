import React from "react";
import {
  ArrowRight,
  Mail,
  Github,
  Shield,
  Lock,
  User,
  Facebook,
  Twitter,
  Linkedin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";

const AuthLandingPage = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans ">
      {/* Hero Section */}
      <section className="bg-blue-50 py-20 ">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              Simplify Authentication with Secure Access
            </h1>
            <p className="text-xl mb-8">
              Fast and reliable sign-in with Email, Google, GitHub, and 2FA protection.
            </p>
            <div className="space-x-4">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300">
                <Link href="/auth/login">Get Started</Link>
              </button>
              <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold border border-blue-600 hover:bg-blue-50 transition duration-300">
                Learn More
              </button>
            </div>
          </div>
          <div className="lg:w-1/2 lg:max-w-lg">
            <Image src="/hero.svg" alt="Authentication System" height={1000} width={1000} />
          </div>
        </div>
      </section>
      {/* Features Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Powerful Authentication Features</h2>
          <p className="text-xl text-center mb-12">
            All the tools you need to ensure secure and easy access for your users.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Mail size={48} className="mx-auto mb-4 text-blue-600" />
              <h3 className="text-xl font-semibold mb-2">Email Sign-In</h3>
              <p>Simple and reliable email authentication.</p>
            </div>
            <div className="text-center">
              <Github size={48} className="mx-auto mb-4 text-blue-600" />
              <h3 className="text-xl font-semibold mb-2">Social Sign-In</h3>
              <p>Seamless integration with Google and GitHub.</p>
            </div>
            <div className="text-center">
              <Shield size={48} className="mx-auto mb-4 text-green-500" />
              <h3 className="text-xl font-semibold mb-2">2FA Security</h3>
              <p>Add an extra layer of protection.</p>
            </div>
          </div>
        </div>
      </section>
      {/* How It Works */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">How It Works</h2>
          <p className="text-xl text-center mb-12">
            3 simple steps to authenticate your users securely.
          </p>
          <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 md:space-x-4">
            <div className="text-center">
              <div className="bg-white p-6 rounded-full shadow-lg mb-4">
                <User size={48} className="text-blue-600 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Step 1</h3>
              <p>Choose your sign-in method</p>
            </div>
            <ArrowRight size={24} className="hidden md:block text-blue-600" />
            <div className="text-center">
              <div className="bg-white p-6 rounded-full shadow-lg mb-4">
                <Lock size={48} className="text-blue-600 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Step 2</h3>
              <p>Enter your credentials and authenticate</p>
            </div>
            <ArrowRight size={24} className="hidden md:block text-blue-600" />
            <div className="text-center">
              <div className="bg-white p-6 rounded-full shadow-lg mb-4">
                <Shield size={48} className="text-green-500 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Step 3</h3>
              <p>Complete optional 2FA for extra security</p>
            </div>
          </div>
        </div>
      </section>
      {/* Security Focus */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Top-Notch Security</h2>
          <p className="text-xl text-center mb-12">
            Our system ensures your data is safe with two-factor authentication and OAuth support.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-green-50 p-8 rounded-lg text-center">
              <Lock size={48} className="mx-auto mb-4 text-green-600" />
              <h3 className="text-xl font-semibold mb-2">End-to-end Encryption</h3>
              <p>Your data is protected at every step</p>
            </div>
            <div className="bg-green-50 p-8 rounded-lg text-center">
              <Shield size={48} className="mx-auto mb-4 text-green-600" />
              <h3 className="text-xl font-semibold mb-2">OAuth Integration</h3>
              <p>Secure authorization with industry standards</p>
            </div>
            <div className="bg-green-50 p-8 rounded-lg text-center">
              <Lock size={48} className="mx-auto mb-4 text-green-600" />
              <h3 className="text-xl font-semibold mb-2">2FA Protection</h3>
              <p>Add an extra layer of security to your account</p>
            </div>
          </div>
        </div>
      </section>
      {/* Testimonials */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">What Our Users Say</h2>
          <p className="text-xl text-center mb-12">
            Trusted by developers and companies around the globe.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="mb-4">
                {` "This authentication system has streamlined our user onboarding process
                significantly."`}
              </p>
              <p className="font-semibold">John Doe, CTO at TechCorp</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="mb-4">
                {`"The 2FA feature gives us peace of mind knowing our users' accounts are
                well-protected."`}
              </p>
              <p className="font-semibold">Jane Smith, Security Lead at SecureApp</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="mb-4">
                {`                "Integrating this system was a breeze. It saved us months of development time."
`}{" "}
              </p>
              <p className="font-semibold">Mike Johnson, Founder of StartupX</p>
            </div>
          </div>
        </div>
      </section>{" "}
      <footer className="bg-slate-900 text-slate-200 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <h3 className="text-lg font-semibold mb-4">SecureAuth Co.</h3>
              <p className="text-slate-400 mb-4">
                Providing secure authentication solutions for businesses worldwide.
              </p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="icon">
                  <Facebook className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Twitter className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Linkedin className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Github className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Product Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Product</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-slate-400 hover:text-white transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-400 hover:text-white transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-400 hover:text-white transition-colors">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-400 hover:text-white transition-colors">
                    API Reference
                  </a>
                </li>
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-slate-400 hover:text-white transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-400 hover:text-white transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-400 hover:text-white transition-colors">
                    Press
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-400 hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-slate-400 hover:text-white transition-colors">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-400 hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-400 hover:text-white transition-colors">
                    Cookie Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-400 hover:text-white transition-colors">
                    GDPR Compliance
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <Separator className="my-8 bg-slate-700" />

          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm mb-4 md:mb-0">
              © {currentYear} SecureAuth Co. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AuthLandingPage;
