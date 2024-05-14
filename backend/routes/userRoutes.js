// Import the express library and the protectRoute middleware
import express from "express";
import { protectRoute } from "../middleware/protectRoute.js";
import {
  followUnfollowUser,
  getUserProfile,
} from "../controllers/userContoller.js";

const router = express.Router();

// Route to get user profile by username
// This route is protected and requires authentication
router.get("/profile/:username", protectRoute, getUserProfile);

// Route to get suggested users
// This route is protected and requires authentication
// router.get("/suggested", protectRoute, getUserProfile);

// Route to follow or unfollow a user by id
// This route is protected and requires authentication
router.get("/follow/:id", protectRoute, followUnfollowUser);

// Route to update user profile
// This route is protected and requires authentication
// router.get("/update", protectRoute, updateUserProfile);

export default router;
