// Import the express library to create an HTTP server
import express from "express";
// Import the dotenv library to load environment variables from a .env file
import dotenv from "dotenv";

// Import the authRoute module, which contains routes related to authentication
import authRoute from "./routes/authRoutes.js";
// Import the connectMongoDB function, which establishes a connection to the MongoDB database
import connectMongoDB from "./db/connectMongoDB.js";

// Load environment variables from the .env file using dotenv
dotenv.config();

// Create an instance of the express application
const app = express();

// Log the MongoDB URI from the environment variables to the console
console.log(process.env.MONGO_URI);

// Use the authRoute module to handle routes starting with "/api/auth"
app.use("/api/auth", authRoute);

// Start the server and listen on port 8000
app.listen(8000, () => {
  // Log a message to the console when the server starts
  console.log("Server is running on PORT 8000");
  // Establish a connection to the MongoDB database
  connectMongoDB();
});
