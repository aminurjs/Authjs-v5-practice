import mongoose from "mongoose";

interface Cached {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
}

const cached: Cached = {
  conn: null,
  promise: null,
};

export const connectDB = async () => {
  try {
    console.log("🚀 ~ connect ~ process.env.MONGO_URI:", process.env.MONGO_URI);
    if (cached.conn) {
      return cached.conn;
    }
    if (!cached.promise) {
      cached.promise = mongoose.connect(process.env.MONGO_URI ?? "").then((mongoose) => {
        return mongoose;
      });
    }

    cached.conn = await cached.promise;
    return cached.conn;
  } catch (error) {
    throw error;
  }
};

export const disconnect = async () => {
  if (cached.conn) {
    try {
      await mongoose.connection.close();
      cached.conn = null;
      cached.promise = null;
      console.log("Disconnected from MongoDB");
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
};
