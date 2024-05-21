import mongoose from "mongoose";

// Define a new Mongoose schema for a Post
const postSchema = new mongoose.Schema(
  {
    // Reference to the User who created the post
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    // Text content of the post
    text: {
      type: String,
    },
    // Image associated with the post
    img: {
      type: String,
    },
    // Array of User IDs who liked the post
    likes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    // Array of comments on the post
    comments: [
      {
        // Text content of the comment
        text: {
          type: String,
          required: true,
        },
        // Reference to the User who made the comment
        user: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
          required: true,
        },
      },
    ],
  },
  // Enable timestamps for the post (createdAt and updatedAt)
  { timestamps: true }
);

// Create a Mongoose model for the Post schema
const Post = mongoose.model("Post", postSchema);

// Export the Post model
export default Post;
