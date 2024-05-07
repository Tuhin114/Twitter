// Import the express library to create an HTTP server
import express from "express";
// Import the dotenv library to load environment variables from a.env file
import dotenv from "dotenv";

// Import the authRoute module, which contains routes related to authentication
import authRoute from "./routes/authRoutes.js";
// Import the connectMongoDB function, which establishes a connection to the MongoDB database
import connectMongoDB from "./db/connectMongoDB.js";

// Load environment variables from the.env file using dotenv
// This allows the application to access environment-specific configurations
dotenv.config();

// Create an instance of the express application
const app = express();

// Define the port number, using the value from the environment variables or 5000 as a default
const PORT = process.env.PORT || 5000;

// Log the MongoDB URI from the environment variables to the console
// This helps verify that the correct database connection information is being used
console.log(process.env.MONGO_URI);

app.use(express.json());

// Use the authRoute module to handle routes starting with "/api/auth"
// This sets up the authentication-related endpoints for the application
app.use("/api/auth", authRoute);

// Start the server and listen on the specified port
// This makes the application accessible to clients
app.listen(PORT, () => {
  // Log a message to the console when the server starts
  // This confirms that the server is running and indicates the port number
  console.log(`Server is running on PORT ${PORT}`);

  // Establish a connection to the MongoDB database
  // This allows the application to store and retrieve data as needed
  connectMongoDB();
});
