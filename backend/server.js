// Import the express library
import express from "express";

// Import the authRoute module
import authRoute from "./routes/authRoutes.js";

// Create an instance of express
const app = express();

// Use the authRoute module for routes starting with "/api/auth"
app.use("/api/auth", authRoute);

// Start the server and listen on port 8000
app.listen(8000, () => {
  console.log("Server is running on PORT 8000");
});
