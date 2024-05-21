import Post from "../models/postModel.js";
import User from "../models/userModel.js";
import { v2 as cloudinary } from "cloudinary";

/**
 * Controller to create a new post
 */
export const createPost = async (req, res) => {
  try {
    /**
     * Extract required fields from request body
     */
    const { text } = req.body;
    let { img } = req.body;
    const userId = req.user._id.toString();

    /**
     * Fetch user details from database
     */
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: "User not found" });

    /**
     * Validate post input: either text or image is required
     */
    if (!text && !img) {
      return res.status(400).json({ error: "Post must have text or image" });
    }

    /**
     * Handle image upload to Cloudinary if it exists
     */
    if (img) {
      const uploadedResponse = await cloudinary.uploader.upload(img);
      img = uploadedResponse.secure_url;
    }

    /**
     * Create a new post document with user ID, text, and image
     */
    const newPost = new Post({
      user: userId,
      text,
      img,
    });

    /**
     * Save the new post to the database
     */
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    /**
     * Handle internal server errors
     */
    res.status(500).json({ error: "Internal server error" });
    console.log("Error in createPost controller: ", error);
  }
};
