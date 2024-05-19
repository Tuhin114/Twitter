# Backend

    1.  `npm init -y`
    2.  `npm install express mongoose jsonwebtoken bcryptjs dotenv cors cookie-parser  cloudinary`
    3.  `npm install -D nodemon`

## Importing Notes 1

**express:** This is a Node.js web application framework that provides a robust set of features for web and mobile applications.
**Creating a Router:**
The express.Router() function creates a new router object. A router object is an isolated instance of middleware and routes.
**Defining Routes:**
Three routes are defined using the router object:
/signup: This route handles HTTP GET requests. When accessed, it responds with JSON data indicating that the signup endpoint was hit.
/login: Similar to /signup, this route responds with JSON data indicating that the login endpoint was hit.
/logout: Again, similar to the previous routes, this one responds with JSON data indicating that the logout endpoint was hit.
**Exporting the Router:**
The router object, containing the defined routes, is exported as a module.
**Setting up Express App:**
An instance of the Express application is created using express().
**Using Middleware:**
The app.use() function is used to mount the router on a specific path, in this case, /api/auth. This means that any request made to routes under /api/auth will be handled by the authRoute router object.
**Starting the Server:**
The app.listen() function starts the Express server on port 8000. Once the server is up and running, it logs a message indicating that the server is running on port 8000.

So, in summary, this code sets up an Express server with three endpoints (/signup, /login, and /logout) under the /api/auth path, each responding with JSON data when accessed via HTTP GET requests.

## Importing Notes 2

The code imports the Mongoose module, which is a MongoDB object modeling tool designed to work in an asynchronous environment like Node.js.

A new Mongoose schema is defined with various fields for a User model, including:
username: A required and unique string.
fullName: A required string.
password: A required string with a minimum length of 6.
email: A required and unique string.
followers and following: Arrays of ObjectIds that reference other User documents. These fields are used to represent the relationships between users in a social network.
profileImg and coverImg: Strings that represent the URLs of the user's profile and cover images, respectively.
bio: A string that represents the user's biography.
link: A string that represents a link to the user's website or other online presence.
likedPosts: An array of ObjectIds that reference Post documents. This field is used to represent the posts that a user has liked.

The schema also includes a timestamps option, which automatically adds createdAt and updatedAt fields to each document.

The User model is then created from the schema using the mongoose.model() method.
Finally, the User model is exported so that it can be used in other parts of the application.

## Important Notes 3

**Import Statements:**
**generateTokenAndSetCookie:** This function is imported from a utility file (generateToken.js). It's used to generate a JSON Web Token (JWT) and set it as a cookie in the response headers.
**User:** This is the model representing a user in the application. It's imported from a file (user.model.js) where the schema and methods for the user model are defined.
**bcrypt:** This library is used for password hashing. It's imported for securely hashing passwords before storing them in the database.
**Signup Function (signup):**
This function handles the signup process for new users.
It extracts user input (fullName, username, email, password) from the request body using object destructuring.
Validates the email format using a regular expression.
Checks if the username and email are already taken by querying the database.
Validates the password length (must be at least 6 characters).
Hashes the password using bcrypt.
Creates a new user instance with the hashed password.
Saves the new user to the database.
Generates a JWT token and sets it as a cookie in the response headers.
Sends a success response with user data (excluding sensitive fields like password).
**Login Function (login):**
Handles the user login process.
Extracts username and password from the request body.
Finds the user in the database by username.
Compares the provided password with the hashed password stored in the database using bcrypt.
If the user or password is incorrect, returns an error.
If login is successful, generates a JWT token and sets it as a cookie in the response headers.
Sends a success response with user data (excluding sensitive fields).
**Logout Function (logout):**
Clears the JWT cookie by setting its expiration (maxAge) to 0.
Sends a success response indicating successful logout.
**GetMe Function (getMe):**
Retrieves details of the currently logged-in user.
Uses the user ID stored in the JWT token (req.user._id) to find the user in the database.
Excludes the password field from the user data.
Sends the user data in the response.

Each function is wrapped in a try-catch block to handle errors gracefully. If an error occurs during the execution of any function, it logs the error and sends an internal server error response (status code 500) with a generic error message.

## Important Notes 4

This code defines a function named generateTokenAndSetCookie, which is responsible for generating a JSON Web Token (JWT) and setting it as a cookie in the response headers. Here's a detailed explanation of each part:

**Import Statement:**
import jwt from "jsonwebtoken";: This imports the jsonwebtoken library, which is used for generating JWTs.
**Function Definition (generateTokenAndSetCookie):**
This function takes two parameters:
    userId: The ID of the user for whom the JWT is being generated.

    res: The response object from the Express.js framework, to which the JWT will be attached as a cookie.
**Inside the function:**

    jwt.sign(): This method is used to sign the JWT with the user ID and a secret key. It takes three arguments:
        The payload to be encoded into the JWT ({ userId }).

        The secret key used to sign the token (process.env.JWT_SECRET).

        Additional options, such as the token expiration time (expiresIn: "15d" specifies a 15-day expiration).
    
    res.cookie(): This method sets the JWT as a cookie in the response object. It takes four arguments:
        The name of the cookie ("jwt").

        The value of the cookie (the generated JWT token).
    
    Additional options:
        maxAge: Specifies the maximum age of the cookie in milliseconds (15 days in this case).

        httpOnly: Makes the cookie accessible only through HTTP requests, preventing access via client-side scripts (helps prevent XSS attacks).
        
        sameSite: Specifies the SameSite attribute of the cookie, which helps prevent CSRF attacks. It's set to "strict".

        secure: Specifies whether the cookie should only be sent over HTTPS. It's set to true if the environment is not development.

This function encapsulates the process of generating a JWT with the user ID, setting it as an HTTP-only and secure cookie in the response headers, and configuring additional security measures such as SameSite and secure attributes.

## Important Notes 5

It looks like you're working on building authentication functionality for a Node.js server using JSON Web Tokens (JWTs). Let me break down what's happening in your code:

In your server.js file, you're initializing cookieParser() middleware to parse cookies attached to the client request.

In your authRoutes.js file, you have several functions:

a. protectRoute: This middleware function is used to protect routes that require authentication. It checks for the presence and validity of a JWT token in the request's cookies. If the token is valid, it extracts the user ID from the token, retrieves the user from the database, and attaches the user object to the request (req.user). If any errors occur during this process, it returns the appropriate error response.

b. logout: This function is responsible for logging the user out. It clears the JWT cookie from the client by setting its maxAge to 0, effectively invalidating the token. It then sends a success response indicating that the user has been logged out.

c. getMe: This controller function is used to fetch details of the currently logged-in user. It retrieves the user object based on the user ID attached to the request (req.user) and sends the user data (excluding the password) in the response.

Overall, these functions work together to provide authentication and user-related functionalities in your Node.js application.

These two functions, logout and getMe, are essential parts of your authentication system in Node.js:

**logout:** This function handles the logout process. It clears the JWT cookie (jwt) by setting its value to an empty string and setting its maxAge to 0, effectively expiring the cookie. This action invalidates the JWT token on the client side. After clearing the cookie, it sends a success response with a status code of 200 and a JSON object containing a message indicating that the user has been logged out successfully.

**getMe:** This controller function retrieves the details of the currently logged-in user. It finds the user in the database using the user ID attached to the request object (req.user._id). It excludes the password field from the retrieved user object for security reasons. After fetching the user data, it sends a response with a status code of 200 and a JSON object containing the user details.

Both functions are enclosed in a try-catch block to handle any errors that may occur during the execution. If an error occurs, it logs the error message to the console and sends an appropriate error response with a status code of 500, indicating an internal server error.

Your protectRoute middleware function is essential for protecting routes that require authentication in your Node.js application. Let's go over its functionality:

**Importing Dependencies:** You import the User model from "../models/userModel.js" and the jsonwebtoken package. This allows you to interact with your user data model and handle JWT authentication.

**Middleware Function Definition:** The protectRoute middleware function is defined as an asynchronous function that takes three parameters: req (the request object), res (the response object), and next (a callback function to call the next middleware function in the stack).

**Extracting JWT Token:** You retrieve the JWT token from the request cookies using req.cookies.jwt.

**Token Verification:** The JWT token is then verified using jwt.verify. If the token is invalid or not provided, appropriate error responses are returned (401 Unauthorized for missing or invalid tokens).

**User Retrieval:** If the token is valid, you extract the user ID (decoded.userId) from the token payload and use it to find the corresponding user in the database using User.findById(). You exclude the password field from the user object for security reasons.

**Attaching User Object to Request:** If the user is found, you attach the user object to the request (req.user), making it accessible in subsequent middleware functions or route handlers.

**Calling Next Middleware Function:** Finally, if everything is successful, you call the next() function to pass control to the next middleware function in the stack.

**Error Handling:** Any errors that occur during the execution of the middleware function are caught in the catch block. The error message is logged, and an appropriate error response (500 Internal Server Error) is returned to the client.

Overall, this middleware function ensures that routes requiring authentication are protected by checking for a valid JWT token and attaching the authenticated user's information to the request object for further processing.

## Important Notes 6

It's a set of routes for an Express.js application, using the Router functionality. Each route is protected by a middleware function called protectRoute, which presumably checks for authentication before allowing the user to access the route.

Here's a breakdown of each route:

**/profile/:username:** This route gets a user's profile by their username. It's protected, so only authenticated users can access it.
**/suggested:** This route gets a list of suggested users. It's also protected, so only authenticated users can access it.
**/follow/:id:** This route allows a user to follow or unfollow another user by their ID. It's protected, so only authenticated users can access it.
**/update:** This route allows a user to update their profile. It's protected, so only authenticated users can access it.

Each route is defined using the router.get() method, which takes a path, a middleware function (in this case, protectRoute), and a route handler function (which is not defined in this code snippet). The route handler function would contain the logic for handling the request and sending a response.

## Important Notes 7

This code is an asynchronous function named getUserProfile that is meant to handle requests for retrieving a user's profile. It's designed to work with an HTTP server framework like Express.js, as it expects req and res parameters representing the request and response objects, respectively.

Let's break down what it does:

**Extract Username:** It extracts the username from the request parameters using destructuring assignment: const { username } = req.params;. This assumes that the username is passed as a parameter in the URL.

**Query the Database:** It attempts to find a user in the database using the extracted username. The User.findOne() method is typically a part of a database library like Mongoose in a Node.js environment. It searches for a user document where the username field matches the provided username. The .select("-password") part ensures that the password field is not included in the retrieved user object, presumably for security reasons.

**Handle User Existence:** If a user is found, it sends a JSON response with a status code of 200 (OK) containing the user object: res.status(200).json(user);.

**Handle User Not Found:** If no user is found with the provided username, it sends a JSON response with a status code of 404 (Not Found) along with a message indicating that the user was not found: res.status(404).json({ message: "User not found" });.

**Handle Errors:** If an error occurs during the database query or any other part of the process, it logs the error to the console and sends a JSON response with a status code of 500 (Internal Server Error) containing the error message: res.status(500).json({ error: error.message });.

Overall, this function serves as a controller function in a Node.js web application, handling requests to fetch user profiles from a database and returning appropriate responses based on the outcome of the database query.

## Important Notes 8

``export const followUnfollowUser = async (req, res) => {
  try {``

This is a controller function named followUnfollowUser. It handles the logic for users to follow or unfollow other users. The function is asynchronous (async) to allow for asynchronous operations like database queries. It takes two parameters, req (the request object) and res (the response object).

javascript
Copy code
    ```// Extract the ID of the user to modify from the request parameters
    const { id } = req.params;

    // Find the user to modify and the current user by their IDs
    const userToModify = await User.findById(id);
    const currentUser = await User.findById(req.user._id);```

The code extracts the id of the user to modify from the request parameters. Then, it uses User.findById (assuming User is a Mongoose model) to find both the user to modify and the current user based on their IDs.

javascript
Copy code
    // If the user is trying to follow/unfollow themselves, return an error
    if (id === req.user._id.toString()) {
      return res
        .status(400)
        .json({ error: "You can't follow or unfollow yourself"});
    }

    // If either user is not found, return an error
    if (!userToModify || !currentUser) {
      return res.status(400).json({ error: "User not found"});
    }

These if statements handle two error cases: if a user is trying to follow/unfollow themselves, or if either the user to modify or the current user is not found. In these cases, it sends an appropriate error response with a status code of 400.

javascript
Copy code
    // Check if the current user is already following the user to modify
    const isFollowing = currentUser.following.includes(id);

It checks whether the current user is already following the user to modify by checking if the ID of the user to modify is included in the following array of the current user.

javascript
Copy code
    // If they are following, unfollow the user
    if (isFollowing) {
      await User.findByIdAndUpdate(id, { $pull: { followers: req.user._id }});
      await User.findByIdAndUpdate(req.user._id, { $pull: { following: id }});

      // Return a success message
      res.status(200).json({ message: "User unfollowed successfully"});
    } else {
      // If they are not following, follow the user
      await User.findByIdAndUpdate(id, { $push: { followers: req.user._id }});
      await User.findByIdAndUpdate(req.user._id, { $push: { following: id }});

      // Send a notification to the user being followed

      // Return a success message
      res.status(200).json({ message: "User followed successfully"});
    }

If the current user is already following the user to modify (isFollowing is true), it unfollows the user by removing their ID from the followers array of the user to modify and removing the user to modify's ID from the following array of the current user. If not, it follows the user by adding their IDs to the respective arrays. After updating the database, it sends a success message with a status code of 200.

javascript
Copy code
  } catch (error) {
    console.log("Error in followUnfollowUser: ", error.message);
    res.status(500).json({ error: error.message});
  }
};

Finally, the function catches any errors that occur during execution. It logs the error message to the console for debugging purposes and sends a generic error response with a status code of 500 and the error message in the JSON format.

## Important Notes 9

Certainly! Here's a detailed explanation suitable for documentation:

### Mongoose and the Notification Schema

#### Overview

This documentation explains the use of Mongoose to define a schema for handling notifications in a MongoDB database. Notifications typically include information about who generated the notification, who is the recipient, the type of notification, and whether it has been read.

#### Mongoose Import

- **Purpose**: Importing Mongoose is essential for creating and managing schemas and models in MongoDB through a Node.js application. Mongoose provides an abstraction layer that simplifies data validation and relationships.

#### Notification Schema Definition

The `notificationSchema` is a blueprint for the notification documents stored in the MongoDB collection. Each field within the schema has specific data types and constraints to ensure consistency and integrity.

1. **Fields in the Notification Schema**:
   - **from**:
     - **Type**: `ObjectId`
       - This field stores a unique identifier referencing the user who created the notification.
     - **Reference**: `User`
       - The `ref` property establishes a relationship to the `User` model, enabling the population of user details in queries.
     - **Required**: `true`
       - This field is mandatory, meaning each notification must specify the originating user.

   - **to**:
     - **Type**: `ObjectId`
       - This field stores a unique identifier referencing the user who is the recipient of the notification.
     - **Reference**: `User`
       - Similar to the `from` field, it references the `User` model to link the notification to the recipient user.
     - **Required**: `true`
       - This field is mandatory, ensuring each notification specifies the recipient.

   - **type**:
     - **Type**: `String`
       - This field stores the type of notification.
     - **Required**: `true`
       - Each notification must specify its type.
     - **Enum**: `["follow", "like"]`
       - This constraint restricts the type to either `"follow"` or `"like"`, ensuring only valid types are used.

   - **read**:
     - **Type**: `Boolean`
       - This field indicates whether the notification has been read.
     - **Default**: `false`
       - Notifications are unread by default upon creation.

2. **Schema Options**:
   - **Timestamps**: `true`
     - Enabling timestamps automatically adds two fields to the schema:
       - `createdAt`: The timestamp when the notification is created.
       - `updatedAt`: The timestamp when the notification is last updated.

#### Notification Model Creation

- **Purpose**: The model, named `Notification`, is created based on the `notificationSchema`. This model represents the collection in MongoDB and provides methods for interacting with the notification data.

#### Exporting the Notification Model

- **Purpose**: Exporting the `Notification` model allows it to be imported and utilized in other parts of the application. This facilitates operations such as creating, querying, and updating notifications.

### Workflow Examples

#### Creating a Notification

To create a new notification, instantiate the `Notification` model with appropriate data and save it to the database. Ensure that the `from`, `to`, and `type` fields are provided, and utilize the `read` field if necessary.

#### Querying Notifications

To retrieve notifications, use methods like `find` to query the collection. Utilize the `populate` method on the `from` field to include details about the user who generated the notification. Example queries may include finding all unread notifications for a specific user.

#### Updating a Notification

To update a notification, such as marking it as read, use methods like `updateOne` to modify the `read` field of the specified notification. Ensure to reference the notification by its unique identifier.

### Summary

- **Mongoose**: A powerful tool for schema-based modeling of application data in MongoDB.
- **Schema Definition**: Outlines the structure and validation rules for notifications, ensuring data integrity.
- **Model Creation**: Provides an interface for interacting with the notification data, supporting operations like creation, querying, and updating.
- **Data Relationships**: References between notifications and users enable complex queries and data population.
- **Validation and Constraints**: Enforce required fields and valid values to maintain consistency and reliability in the data.

This documentation provides a comprehensive guide to implementing and utilizing the Notification schema and model in a MongoDB-backed Node.js application using Mongoose.

## Important Notes 10

This code is a controller function designed to handle the follow/unfollow functionality for users in an application. Let's break down how the notification model works within this code:

1. **User Interaction:**
   - Users can follow or unfollow other users.
   - When a user follows another user, it triggers a notification to the user being followed.

2. **Functionality Overview:**
   - The function receives a request (`req`) and a response (`res`).
   - It extracts the ID of the user to be followed/unfollowed from the request parameters.
   - It finds both the user to be modified (`userToModify`) and the current user (`currentUser`) using their IDs.

3. **Error Handling:**
   - It checks if the user is trying to follow/unfollow themselves. If so, it returns an error.
   - It checks if either the user to modify or the current user is not found. If so, it returns an error.

4. **Follow/Unfollow Logic:**
   - It checks if the current user is already following the user to modify.
   - If the current user is following, it unfollows the user by removing their IDs from each other's respective lists of followers and following.
   - If the current user is not following, it follows the user by adding their IDs to each other's respective lists.

5. **Notification Creation:**
   - If the action is to follow a user (i.e., the user is not already followed), it creates a new notification instance using the `Notification` model.
   - The notification is of type "follow", indicating that the current user is following the user being modified.
   - The notification includes:
     - Type: Indicates the type of notification (in this case, "follow").
     - From: The ID of the user who is performing the follow action (the current user).
     - To: The ID of the user being followed (the user being modified).

6. **Saving Notification:**
   - The newly created notification instance is saved to the database.

7. **Response:**
   - It returns a success message along with an appropriate HTTP status code.

8. **Error Handling (Catch Block):**
   - If any error occurs during the process, it logs the error and returns an error response with an appropriate status code.

This mechanism ensures that users receive notifications when they are followed by others, facilitating interaction and engagement within the application.

In this section of the code, a new notification instance is created using the `Notification` model and saved to the database. Let's delve deeper into the steps involved:

1. **Creating a New Notification:**
   - A new instance of the `Notification` model is created using the `new` keyword.
   - The constructor of `Notification` expects an object with properties representing the notification details.

2. **Notification Properties:**
   - `type`: Specifies the type of notification. In this case, it's set to `"follow"`, indicating that this notification is for a user being followed.
   - `from`: Represents the ID of the user who initiated the follow action. It's obtained from `req.user._id`, indicating the current user performing the follow action.
   - `to`: Denotes the ID of the user who is being followed. It's obtained from `userToModify._id`, representing the user being modified in the context of this operation.

3. **Saving the Notification:**
   - After creating the notification instance, it is saved to the database using the `save()` method.
   - The `await` keyword is used to ensure that the notification is saved asynchronously, allowing the execution flow to wait until the save operation completes before proceeding further.

By creating and saving this notification, the system ensures that the user being followed receives a notification, informing them about the action taken by another user within the application. This enhances user engagement and facilitates interaction between users within the platform.

## Important Notes 11

This function retrieves suggested users for the current user based on the users they are already following. Let's walk through the steps:

1. **Getting Current User's ID:**
   - The function starts by extracting the ID of the current user (`userId`) from the request object (`req.user._id`).

2. **Finding Users Followed by the Current User:**
   - It queries the database to find the current user by their ID and selects only the `following` field. This retrieves an array of IDs of users whom the current user is following.

3. **Finding Random Users:**
   - It uses the MongoDB aggregation framework to find users other than the current user (`_id: { $ne: userId }`).
   - The `$sample` stage randomly selects a specified number of users (in this case, 10) from the collection.

4. **Filtering Users:**
   - It filters out the users who are already being followed by the current user.
   - This is done by comparing the IDs of users obtained in the previous step with the IDs of users whom the current user is following. Users already followed are excluded from the `filteredUsers` array.

5. **Limiting and Sanitizing Data:**
   - It limits the number of suggested users to a maximum of 4 by slicing the `filteredUsers` array.
   - For security purposes, it removes the password field from each suggested user object before sending the response.

6. **Sending Response:**
   - It sends a JSON response with a status code of 200 containing the array of suggested users to the client.

7. **Error Handling:**
   - If any error occurs during the process, it logs the error and sends an error response with an appropriate status code.

This function efficiently provides suggested users to the current user, excluding those whom they are already following, thereby enhancing user discovery and engagement within the application.
