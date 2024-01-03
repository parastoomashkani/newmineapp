import mongoose, { ConnectOptions } from "mongoose";

export const connectMongoDB = async (): Promise<void> => {
  try {
    const mongodbUri = process.env.MONGODB_URI;
  
    if (!mongodbUri) {
      throw new Error("MONGODB_URI is not defined in the environment variables.");
    }
  
    await mongoose.connect(mongodbUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as ConnectOptions);
  
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("Error connecting to MongoDB: ", error);
  }
}