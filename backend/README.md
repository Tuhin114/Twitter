# Backend

    1.  `npm init -y`
    2.  `npm install express mongoose jsonwebtoken bcryptjs dotenv cors cookie-parser  cloudinary`
    3.  `npm install -D nodemon`

## Importing Notes

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
