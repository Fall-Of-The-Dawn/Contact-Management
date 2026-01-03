import mongoose from "mongoose";

let isConnected = false;

export const connectDB = async () => {
  if (isConnected) return;

  try {
    await mongoose.connect(process.env.MONGO_URL);
    isConnected = true;
    console.log("Mongo connected");
  } catch (error) {
    console.error("Mongo error:", error.message);
    throw error;
  }
};
