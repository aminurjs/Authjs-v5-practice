import mongoose from "mongoose";

interface IUser extends mongoose.Document {
  firstName: string;
  lastName: string;
  email: string;
  password?: string;
  role: string;
  image?: string;
  authProviderId?: string;
}

const userSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, select: false },
    role: { type: String, default: "user" },
    image: { type: String },
    authProviderId: { type: String },
  },
  { timestamps: true }
);

export const User = mongoose.models?.User || mongoose.model<IUser>("User", userSchema);
