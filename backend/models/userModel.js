import mongoose from "mongoose";

// Define the User schema with various fields and their data types
const userSchema = new mongoose.Schema(
  {
    // The unique username of the user
    username: {
      type: String,
      required: true,
      unique: true,
    },
    // The full name of the user
    fullName: {
      type: String,
      required: true,
    },
    // The password of the user (min length: 6)
    password: {
      type: String,
      required: true,
      minLength: 6,
    },
    // The email of the user (unique)
    email: {
      type: String,
      required: true,
      unique: true,
    },
    // An array of ObjectIds representing the followers of the user
    followers: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        default: [],
      },
    ],
    // An array of ObjectIds representing the users being followed by the user
    following: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        default: [],
      },
    ],
    // The profile image of the user
    profileImg: {
      type: String,
      default: "",
    },
    // The cover image of the user
    coverImg: {
      type: String,
      default: "",
    },
    // The bio of the user
    bio: {
      type: String,
      default: "",
    },

    // A link associated with the user
    link: {
      type: String,
      default: "",
    },
    // An array of ObjectIds representing the posts liked by the user
    likedPosts: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post",
        default: [],
      },
    ],
  },
  { timestamps: true }
);

// Create the User model based on the userSchema
const User = mongoose.model("User", userSchema);

// Export the User model
export default User;
