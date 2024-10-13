import NextAuth, { CredentialsSignin } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { connectDB } from "./lib/db";
import { User } from "./models/user-models";
import { compare } from "bcryptjs";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    GitHub({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRETE,
    }),
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRETE,
    }),

    Credentials({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },

      authorize: async (credentials) => {
        const email = credentials.email as string | undefined;
        const password = credentials.password as string | undefined;

        if (!email || !password) {
          throw new CredentialsSignin("Please provide both email & password");
        }

        await connectDB();

        const user = await User.findOne({ email }).select("+password +role");

        if (!user) {
          throw new Error("Invalid email or password");
        }

        if (!user.password) {
          throw new Error("Invalid email or password");
        }

        const isMatched = await compare(password, user.password);

        if (!isMatched) {
          throw new Error("Password did not matched");
        }

        const userData = {
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          role: user.role,
          id: user._id,
        };

        return userData;
      },
    }),
  ],

  pages: {
    signIn: "/login",
  },

  callbacks: {
    // Handles user sign-in, adds to DB if not existing
    async signIn({ user, account }) {
      await connectDB();

      // Check if user exists based on email
      let existingUser = await User.findOne({ email: user.email });

      if (!existingUser) {
        // If user doesn’t exist, create a new record
        existingUser = await User.create({
          firstName: user?.name?.split(" ")[0] || "User",
          lastName: user?.name?.split(" ")[1] || "LastName",
          email: user.email,
          image: user.image,
          authProviderId: account?.id, // Store provider ID for reference
          role: "user", // Default role, can be customized as needed
        });
      }
      return true; // Proceed with login
    },
  },
});
