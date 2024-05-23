import express from "express";
import { protectRoute } from "../middleware/protectRoute.js";
import {
  // Function to comment on a post
  commentOnPost,
  // Function to create a new post
  createPost,
  // Function to delete a post
  deletePost,
  // Function to retrieve all posts
  getAllPosts,
  // Function to retrieve posts from followed users
  //   getFollowingPosts,
  // Function to retrieve posts liked by the user
  getLikedPosts,
  // Function to retrieve posts by a specific user
  //   getUserPosts,
  // Function to like or unlike a post
  likeUnlikePost,
} from "../controllers/postController.js";

const router = express.Router();

// Route to retrieve all posts
router.get("/all", protectRoute, getAllPosts);
// Route to retrieve posts from followed users
// router.get("/following", protectRoute, getFollowingPosts);
// Route to retrieve posts liked by the user
router.get("/likes/:id", protectRoute, getLikedPosts);
// Route to retrieve posts by a specific user
// router.get("/user/:username", protectRoute, getUserPosts);
// Route to create a new post
router.post("/create", protectRoute, createPost);
// Route to like or unlike a post
router.post("/like/:id", protectRoute, likeUnlikePost);
// Route to comment on a post
router.post("/comment/:id", protectRoute, commentOnPost);
// Route to delete a post
router.delete("/:id", protectRoute, deletePost);

export default router;
