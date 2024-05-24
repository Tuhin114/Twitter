import express from "express"; // Importing the express module
import { protectRoute } from "../middleware/protectRoute.js"; // Importing the protectRoute middleware function
import {
  deleteNotifications, // Importing the deleteNotifications controller function
  getNotifications, // Importing the getNotifications controller function
} from "../controllers/notificationController.js";

const router = express.Router(); // Creating a new express router instance

// Defining a GET route at the root URL ('/') that is protected by the protectRoute middleware
// and calls the getNotifications controller function when accessed
router.get("/", protectRoute, getNotifications);

// Defining a DELETE route at the root URL ('/') that is protected by the protectRoute middleware
// and calls the deleteNotifications controller function when accessed
router.delete("/", protectRoute, deleteNotifications);

export default router; // Exporting the router instance as the default export
