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
