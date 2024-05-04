// Import the mongoose library
import mongoose from "mongoose";

// Define an asynchronous function called connectMongoDB
const connectMongoDB = async () => {
  // Use a try block to attempt to connect to the MongoDB database
  try {
    // Use the mongoose.connect() method to connect to the database
    // using the MONGO_URI environment variable
    const conn = await mongoose.connect(process.env.MONGO_URI);
    // Log a success message to the console with the host name
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    // If there is an error, use the console.error() method to log an
    // error message to the console with the error message
    console.error(`Error connection to mongoDB: ${error.message}`);
    // Exit the process with a status code of 1
    process.exit(1);
  }
};

// Export the connectMongoDB function as the default export
export default connectMongoDB;
