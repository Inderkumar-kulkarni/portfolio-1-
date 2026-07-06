import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      connectTimeoutMS: 5000,
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 10000,
      family: 4,
    });
    console.log(`MongoDB connected -> ${mongoose.connection.host}/${mongoose.connection.name}`);
  } catch (err) {
    console.error("MongoDB connection failed:", err.message);
    console.error("Continuing without database connection. Contact submissions will still be accepted via email.");
  }
};
