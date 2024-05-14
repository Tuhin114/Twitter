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
