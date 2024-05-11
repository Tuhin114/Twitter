// Import the User model and jwt package
import User from "../models/userModel.js";
import jwt from "jsonwebtoken";

// protectRoute middleware function to protect routes that require authentication
export const protectRoute = async (req, res, next) => {
  try {
    // Get the JWT token from cookies
    const token = req.cookies.jwt;

    // If no token is provided, return an Unauthorized error
    if (!token) {
      return res.status(401).json({ error: "Unauthorized: No Token Provided" });
    }

    // Verify the token using the JWT_SECRET environment variable
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // If the token is invalid, return an Unauthorized error
    if (!decoded) {
      return res.status(401).json({ error: "Unauthorized: Invalid Token" });
    }

    // Find the user in the database using the decoded userId
    const user = await User.findById(decoded.userId).select("-password");

    // If the user is not found, return a User not found error
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Attach the user object to the request object
    req.user = user;

    // Call the next middleware function
    next();
  } catch (err) {
    // Log the error message
    console.log("Error in protectRoute middleware", err.message);

    // Return an Internal Server Error
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
