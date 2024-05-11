import express from "express";
// Import the express library to create the server
import { getMe, login, logout, signup } from "../controllers/authController.js";
import { protectRoute } from "../middleware/protectRoute.js";
// Import the login and signup functions from the authController file

const router = express.Router();
// Create a new Express router instance

router.get("/me", protectRoute, getMe);

// Define a POST route for the signup endpoint
// This route will handle user signup requests
router.post("/signup", signup);

// Define a POST route for the login endpoint
// This route will handle user login requests
router.post("/login", login);

// Define a POST route for the logout endpoint
// This route will handle user logout requests
router.post("/logout", logout);

// Export the router instance as the default export
export default router;
// Export the router instance so it can be used in other parts of the application
