// Exported async function for handling user signup
export const signup = async (req, res) => {
  // Return a JSON response indicating that the signup endpoint was hit
  res.json({
    data: "You hit signup endpoint",
  });
};

// Exported async function for handling user login
export const login = async (req, res) => {
  // Return a JSON response indicating that the login endpoint was hit
  res.json({
    data: "You hit login endpoint",
  });
};

// Exported async function for handling user logout
export const logout = async (req, res) => {
  // Return a JSON response indicating that the logout endpoint was hit
  res.json({
    data: "You hit logout endpoint",
  });
};
