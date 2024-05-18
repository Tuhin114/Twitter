import mongoose from "mongoose";

// Define the Notification schema with required fields and their types
const notificationSchema = new mongoose.Schema(
  {
    // The ObjectId of the user who sends the notification
    from: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    // The ObjectId of the user who receives the notification
    to: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    // The type of notification, either 'follow' or 'like'
    type: {
      type: String,
      required: true,
      enum: ["follow", "like"],
    },
    // A boolean indicating whether the notification has been read or not
    read: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true } // Add createdAt and updatedAt timestamps to the schema
);

// Create a Notification model using the defined schema
const Notification = mongoose.model("Notification", notificationSchema);

// Export the Notification model for use in other modules
export default Notification;
