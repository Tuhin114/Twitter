import Notification from "../models/notificationModel.js";
import User from "../models/userModel.js";

// Function to get a user's profile
export const getUserProfile = async (req, res) => {
  // Destructure the 'username' parameter from the request object
  const { username } = req.params;

  try {
    // Use the User model to find one user with the given username
    // and exclude the password field from the selection
    const user = await User.findOne({ username }).select("-password");

    // If no user is found, return a 404 Not Found status with an error message
    if (!user) return res.status(404).json({ message: "User not found" });

    // If a user is found, return a 200 OK status with the user object
    res.status(200).json(user);
  } catch (error) {
    // If there is an error, log it to the console and return a 500 Internal Server Error
    // status with the error message
    console.log("Error in getUserProfile: ", error.message);
    res.status(500).json({ error: error.message });
  }
};
export const followUnfollowUser = async (req, res) => {
  try {
    // Extract the ID of the user to modify from the request parameters
    const { id } = req.params;

    // Find the user to modify and the current user by their IDs
    const userToModify = await User.findById(id);
    const currentUser = await User.findById(req.user._id);

    // If the user is trying to follow/unfollow themselves, return an error
    if (id === req.user._id.toString()) {
      return res
        .status(400)
        .json({ error: "You can't follow or unfollow yourself" });
    }

    // If either user is not found, return an error
    if (!userToModify || !currentUser) {
      return res.status(400).json({ error: "User not found" });
    }

    // Check if the current user is already following the user to modify
    const isFollowing = currentUser.following.includes(id);

    // If they are following, unfollow the user
    if (isFollowing) {
      await User.findByIdAndUpdate(id, { $pull: { followers: req.user._id } });
      await User.findByIdAndUpdate(req.user._id, { $pull: { following: id } });

      // Return a success message
      res.status(200).json({ message: "User unfollowed successfully" });
    } else {
      // If they are not following, follow the user
      await User.findByIdAndUpdate(id, { $push: { followers: req.user._id } });
      await User.findByIdAndUpdate(req.user._id, { $push: { following: id } });

      // Create a new notification instance to send to the user being followed
      // This notification is of type "follow", indicating that the current user (req.user) is following the user being modified (userToModify)
      const newNotification = new Notification({
        // The type of notification, in this case, a follow notification
        type: "follow",
        // The ID of the user who is performing the follow action (the current user)
        from: req.user._id,
        // The ID of the user being followed (the user being modified)
        to: userToModify._id,
      });

      // Save the new notification to the database
      await newNotification.save();

      // Return a success message
      res.status(200).json({ message: "User followed successfully" });
    }
  } catch (error) {
    console.log("Error in followUnfollowUser: ", error.message);
    res.status(500).json({ error: error.message });
  }
};

// Exported asynchronous function to get suggested users
export const getSuggestedUsers = async (req, res) => {
  try {
    // Retrieve the current user's ID from the request object
    const userId = req.user._id;

    // Find the current user and select only the 'following' field
    const usersFollowedByMe = await User.findById(userId).select("following");

    // Use MongoDB aggregation to match all users except the current user and sample 10 of them
    const users = await User.aggregate([
      {
        $match: {
          _id: { $ne: userId },
        },
      },
      { $sample: { size: 10 } },
    ]);

    // Filter the sampled users to exclude those already followed by the current user
    const filteredUsers = users.filter(
      (user) => !usersFollowedByMe.following.includes(user._id)
    );

    // Slice the first 4 users from the filtered users array as suggested users
    const suggestedUsers = filteredUsers.slice(0, 4);

    // Remove password property from each suggested user object before sending the response
    suggestedUsers.forEach((user) => (user.password = null));

    // Send the suggested users as a successful response with a status code of 200
    res.status(200).json(suggestedUsers);
  } catch (error) {
    // Log the error message and send an internal server error response with a status code of 500
    console.log("Error in getSuggestedUsers: ", error.message);
    res.status(500).json({ error: error.message });
  }
};
