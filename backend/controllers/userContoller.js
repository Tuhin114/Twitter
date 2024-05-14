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
