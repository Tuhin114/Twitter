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

export const deletePost = async (req, res) => {
  // Try to delete the post, catch any errors that occur
  try {
    // Find the post by its ID
    const post = await Post.findById(req.params.id);

    // If the post is not found, return a 404 error
    if (!post) {
      return res.status(404).json({ error: "Post not found" });
    }

    // Check if the user is authorized to delete the post
    if (post.user.toString() !== req.user._id.toString()) {
      // If not authorized, return a 401 error
      return res
        .status(401)
        .json({ error: "You are not authorized to delete this post" });
    }

    // If the post has an image, delete it from Cloudinary
    if (post.img) {
      // Extract the image ID from the image URL
      const imgId = post.img.split("/").pop().split(".")[0];

      // Delete the image from Cloudinary
      await cloudinary.uploader.destroy(imgId);
    }

    // Delete the post from the database
    await Post.findByIdAndDelete(req.params.id);

    // Return a success message
    res.status(200).json({ message: "Post deleted successfully" });
  } catch (error) {
    // Log any errors that occur
    console.log("Error in deletePost controller: ", error);

    // Return a 500 error
    res.status(500).json({ error: "Internal server error" });
  }
};
