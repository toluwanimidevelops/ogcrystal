import mongoose from "mongoose";

const connectDB = async () => {
  try {
    mongoose.set("strictQuery", true);

    await mongoose.connect(process.env.MONGODB_URI, {
      serverSelectionTimeoutMS: 10000, // fail fast instead of hanging forever
    });

    console.log("✅ MongoDB connected");

    mongoose.connection.on("error", (err) => {
      console.error("MongoDB connection error after initial connect:", err);
    });

    mongoose.connection.on("disconnected", () => {
      console.warn("⚠️ MongoDB disconnected");
    });
  } catch (error) {
    console.error("❌ MongoDB connection failed:", error.message);
    process.exit(1); // don't let the server run with no DB
  }
};

export default connectDB;
