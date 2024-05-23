import Post from "../models/postModel.js";
import Notification from "../models/notificationModel.js";
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

// Import necessary dependencies and define the commentOnPost function
export const commentOnPost = async (req, res) => {
  // Try to execute the following code, catching any errors that may occur
  try {
    // Destructure the 'text' property from the request body
    const { text } = req.body;

    // Extract the 'id' parameter from the request and assign it to 'postId'
    const postId = req.params.id;

    // Extract the user's ID from the request and assign it to 'userId'
    const userId = req.user._id;

    // Check if the 'text' property exists in the request body
    if (!text) {
      // If not, return a 400 Bad Request response with an error message
      return res.status(400).json({ error: "Text field is required" });
    }

    // Find the post with the given ID
    const post = await Post.findById(postId);

    // Check if the post exists
    if (!post) {
      // If not, return a 404 Not Found response with an error message
      return res.status(404).json({ error: "Post not found" });
    }

    // Create a new comment object with the user's ID and the comment text
    const comment = { user: userId, text };

    // Add the new comment to the post's comments array
    post.comments.push(comment);

    // Save the updated post to the database
    await post.save();

    // Return a 200 OK response with the updated post
    res.status(200).json(post);
  } catch (error) {
    // If an error occurs, log it to the console and return a 500 Internal Server Error response
    console.log("Error in commentOnPost controller: ", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Exported asynchronous function to like or unlike a post
export const likeUnlikePost = async (req, res) => {
  try {
    // Retrieve the user ID from the request object
    const userId = req.user._id;

    // Extract the post ID from the request parameters
    const { id: postId } = req.params;

    // Find the post by its ID
    const post = await Post.findById(postId);

    // Check if the post exists
    if (!post) {
      // Return a 404 error if the post is not found
      return res.status(404).json({ error: "Post not found" });
    }

    // Determine if the user has already liked the post
    const userLikedPost = post.likes.includes(userId);

    if (userLikedPost) {
      // If the user has liked the post, unlike it

      // Update the post by removing the user's ID from the likes array
      await Post.updateOne({ _id: postId }, { $pull: { likes: userId } });

      // Update the user by removing the post's ID from the likedPosts array
      await User.updateOne({ _id: userId }, { $pull: { likedPosts: postId } });

      // Filter the post's likes array to remove the user's ID
      const updatedLikes = post.likes.filter(
        (id) => id.toString() !== userId.toString()
      );

      // Return the updated likes array with a 200 status code
      res.status(200).json(updatedLikes);
    } else {
      // If the user has not liked the post, like it

      // Add the user's ID to the post's likes array
      post.likes.push(userId);

      // Update the user by adding the post's ID to the likedPosts array
      await User.updateOne({ _id: userId }, { $push: { likedPosts: postId } });

      // Save the updated post
      await post.save();

      // Create a new notification for the post's author
      const notification = new Notification({
        from: userId,
        to: post.user,
        type: "like",
      });

      // Save the new notification
      await notification.save();

      // Return the updated likes array with a 200 status code
      res.status(200).json(post.likes);
    }
  } catch (error) {
    // Log any errors and return a 500 error response
    console.log("Error in likeUnlikePost controller: ", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Exported asynchronous function to get all posts from the database
export const getAllPosts = async (req, res) => {
  try {
    // Find all posts in the database, sorted by creation time in descending order
    const posts = await Post.find()
      .sort({ createdAt: -1 })
      // Populate the 'user' field of each post, selecting all fields except 'password'
      .populate({
        path: "user",
        select: "-password",
      })
      // Populate the 'user' field of each comment in each post, selecting all fields except 'password'
      .populate({
        path: "comments.user",
        select: "-password",
      });

    // If no posts are found, return an empty array with a 200 status code
    if (posts.length === 0) {
      return res.status(200).json([]);
    }

    // Return the posts with a 200 status code
    res.status(200).json(posts);
  } catch (error) {
    // Log the error and return a 500 status code with an error message
    console.log("Error in getAllPosts controller: ", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getLikedPosts = async (req, res) => {
  // Extract the user ID from the request parameters
  const userId = req.params.id;

  try {
    // Retrieve the user document from the database using the provided ID
    const user = await User.findById(userId);

    // If the user is not found, return a 404 error with a corresponding message
    if (!user) return res.status(404).json({ error: "User not found" });

    // Find all posts that the user has liked, and populate the user and comment information
    const likedPosts = await Post.find({ _id: { $in: user.likedPosts } })
      .populate({
        path: "user",
        select: "-password", // exclude the password field from the user document
      })
      .populate({
        path: "comments.user",
        select: "-password", // exclude the password field from the comment user document
      });

    // Return the liked posts in the response with a 200 status code
    res.status(200).json(likedPosts);
  } catch (error) {
    // Log any errors that occur during the execution of this function
    console.log("Error in getLikedPosts controller: ", error);

    // Return a 500 error with a corresponding message if an error occurs
    res.status(500).json({ error: "Internal server error" });
  }
};

// Exported asynchronous function to fetch posts from users that the authenticated user is following
export const getFollowingPosts = async (req, res) => {
  try {
    // Retrieve the ID of the authenticated user
    const userId = req.user._id;

    // Find the authenticated user in the User model
    const user = await User.findById(userId);

    // Return a 404 error if the user is not found
    if (!user) return res.status(404).json({ error: "User not found" });

    // Extract the list of users that the authenticated user is following
    const following = user.following;

    // Find all posts created by the users that the authenticated user is following
    // Sort the posts by creation date in descending order
    // Populate the 'user' field with the user data, excluding the password
    // Populate the 'comments.user' field with the user data, excluding the password
    const feedPosts = await Post.find({ user: { $in: following } })
      .sort({ createdAt: -1 })
      .populate({
        path: "user",
        select: "-password",
      })
      .populate({
        path: "comments.user",
        select: "-password",
      });

    // Return a 200 OK response with the fetched posts
    res.status(200).json(feedPosts);
  } catch (error) {
    // Log the error and return a 500 Internal Server Error response
    console.log("Error in getFollowingPosts controller: ", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Exported function to get user posts
export const getUserPosts = async (req, res) => {
  try {
    // Destructure 'username' from request parameters
    const { username } = req.params;

    // Find user by username
    const user = await User.findOne({ username });

    // Return 404 error if user not found
    if (!user) return res.status(404).json({ error: "User not found" });

    // Find all posts by user, sorted by creation date in descending order
    // Populate 'user' field with user details, excluding password
    // Populate 'comments.user' field with user details, excluding password
    const posts = await Post.find({ user: user._id })
      .sort({ createdAt: -1 })
      .populate({
        path: "user",
        select: "-password",
      })
      .populate({
        path: "comments.user",
        select: "-password",
      });

    // Return 200 OK response with posts
    res.status(200).json(posts);
  } catch (error) {
    // Log error and return 500 Internal Server Error response
    console.log("Error in getUserPosts controller: ", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
