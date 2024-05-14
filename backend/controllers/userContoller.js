import User from "../models/userModel.js";

// Function to get a user's profile
export const getUserProfile = async (req, res) => {
  // Destructure the 'username' parameter from the request object
  const { username } = req.params;

  try {
    // Use the User model to find one user with the given username
    // and exclude the password field from the selection
    const user = await Userser.findOne({ username }).select("-password");

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
    const { id } = req.params;
    const userToModify = await User.findById(id);
    const currentUser = await User.findById(req.user._id);

    if (id === req.user._id) {
      return res
        .status(400)
        .json({ error: "You can't follow/unfollow youself" });
    }

    if (!userToModify || !currentUser) {
      return res.status(404).json({ error: "User not found" });
    }

    const isFollowing = currentUser.following.includes(id);
    if (isFollowing) {
      // Unfollow the user
      await User.findByIdAndUpdate(id, { $pull: { followers: req.user._id } });
      await User.findByIdAndUpdate(req.user._id, { $pull: { following: id } });

      res.status(200).json({ message: "User unfollowed successfully" });
    } else {
      // Follow the user
      await User.findByIdAndUpdate(id, { $push: { followers: req.user._id } });
      await User.findByIdAndUpdate(req.user._id, { $push: { following: id } });

      res.status(200).json({ message: "User followed successfully" });
    }
  } catch (error) {
    console.log("Error in followUnfollowUser: ", error.message);
    res.status(500).json({ error: error.message });
  }
};
