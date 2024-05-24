// Import the Notification model from the models directory
import Notification from "../models/notificationModel.js";

// Export the getNotifications function, which will be used to fetch notifications for a specific user
export const getNotifications = async (req, res) => {
  try {
    // Retrieve the user's ID from the request object
    const userId = req.user._id;

    // Find all notifications where the 'to' field matches the user's ID
    // Populate the 'from' field with the username and profile image of the user who sent the notification
    const notifications = await Notification.find({ to: userId }).populate({
      path: "from",
      select: "username profileImg",
    });

    // Update the read status of all notifications for the user to true
    await Notification.updateMany({ to: userId }, { read: true });

    // Send a response with a status code of 200 and the retrieved notifications
    res.status(200).json(notifications);
  } catch (error) {
    // Log any errors that occur during the execution of the function
    console.log("Error in getNotifications function", error.message);

    // Send a response with a status code of 500 and an error message
    res.status(500).json({ error: "Internal Server Error" });
  }
};
